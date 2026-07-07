import type { Business } from "../content/business-schema.js";
import { summarizeOpeningHours } from "../content/hours.js";
import { buildBusinessProfile } from "../content/local-copy.js";
import type { Composition, SiteSpec, VisualMood } from "./schema.js";

const moods: VisualMood[] = [
  "roadside-urgent",
  "workshop-trust",
  "precision-service",
  "neighborhood-direct",
  "fleet-utility",
];

const compositions: Composition[] = [
  "split-command",
  "poster-bay",
  "route-card",
  "service-ledger",
  "photo-board",
];

function hasAny(value: string, terms: string[]): boolean {
  const normalized = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  return terms.some((term) => normalized.includes(term));
}

function chooseMood(business: Business, index: number): VisualMood {
  const text = `${business.name} ${business.category} ${business.main_product_or_service} ${business.opening_hours.raw ?? ""}`;
  if (hasAny(text, ["lubricentro", "lubricante", "aceite"])) return "precision-service";
  if (hasAny(text, ["lavadero", "lavado", "detailing", "estetica", "estética"])) return "neighborhood-direct";
  if (hasAny(text, ["repuesto", "repuestos", "accesorio", "autopart"])) return "fleet-utility";
  if (hasAny(text, ["chapa", "pintura", "pulido"])) return "precision-service";
  if (hasAny(text, ["24", "auxilio"])) return "roadside-urgent";
  if (hasAny(text, ["mecanica", "mecánica", "multimarca", "taller"])) return "workshop-trust";
  return moods[index % moods.length];
}

function reviewSignal(business: Business): string {
  const best = business.reviews.find((review) => review.text.length > 18);
  return best ? `Reseñas que destacan: "${best.text.slice(0, 92)}${best.text.length > 92 ? "..." : ""}"` : "Reseñas disponibles para comparar experiencias reales.";
}

function imageSubject(rubro: string): string {
  const normalized = rubro
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  if (normalized.includes("lavadero") || normalized.includes("estetica")) {
    return "lavadero o estudio de detailing en Tandil, auto limpio, agua, espuma y terminaciones cuidadas";
  }
  if (normalized.includes("lubricentro")) {
    return "lubricentro en Tandil, area de mantenimiento, bidones de aceite, filtros y herramientas ordenadas";
  }
  if (normalized.includes("chapa")) {
    return "taller de chapa y pintura en Tandil, carroceria en reparacion, herramientas y luz de trabajo";
  }
  if (normalized.includes("repuesto")) {
    return "local de repuestos para autos en Tandil, mostrador, estanterias y accesorios automotores";
  }
  if (normalized.includes("gomeria")) {
    return "gomeria en Tandil, fachada de local barrial, herramientas y cubiertas";
  }
  return `${normalized} en Tandil, fachada de local barrial y herramientas de trabajo`;
}

export function composeLocalSiteSpec(business: Business, index: number): SiteSpec {
  const profile = buildBusinessProfile(business);
  const hours = summarizeOpeningHours(business.opening_hours.raw);
  const mood = chooseMood(business, index);
  const composition = compositions[index % compositions.length];
  const service = profile.rubro.toLowerCase();
  const addressShort = business.address.split(",").slice(0, 2).join(",").trim();

  return {
    business_id: business.id,
    slug: business.slug,
    visual_mood: mood,
    composition,
    headline: business.name,
    subheadline: `${profile.rubro} en Tandil con datos concretos para decidir rapido: contacto, horarios, ubicacion y referencias publicas.`,
    primary_cta: profile.cta,
    secondary_cta: "Ver datos del local",
    service_tags: profile.services.slice(0, 5),
    proof_points: [
      `${business.rating.value.toFixed(1)} sobre 5 con ${business.rating.reviews_count} reseñas`,
      `Horario: ${hours}`,
      `Direccion: ${addressShort}`,
      reviewSignal(business),
    ].slice(0, 4),
    resource_title: profile.resourceTitle,
    resource_items: profile.resourceItems,
    review_heading: `Lo que valoran quienes ya fueron`,
    contact_heading: `Llegar o llamar sin vueltas`,
    image_prompt: `Escena editorial realista para ${imageSubject(profile.rubro)}, luz natural, sin texto, sin logos inventados.`,
    design_notes: `Mood ${mood}, composicion ${composition}. Evitar estetica SaaS generica; usar recursos visuales del rubro ${service}, direccion y prueba social.`,
  };
}
