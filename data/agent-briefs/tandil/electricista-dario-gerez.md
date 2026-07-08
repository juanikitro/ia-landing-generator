# Site Brief 4: Electricista Dario Gerez

## Goal

Write or refine one `SiteSpec` for this business and create its real frontend artifact. Use the agent session context, judgement, and frontend skill. Do not call the OpenAI API from repo scripts.

## Hard Rules

- Use only verified data below.
- Do not invent services, years, awards, guarantees, prices, certifications, owners, staff, or claims.
- Visible copy must be Spanish argentino, natural, local, commercial, and strong enough to sell the next action.
- If useful commercial facts are missing, use safe AI-assisted filler: generic rubro imagery, process visuals, texture, section names, microcopy, and "a confirmar" offers. Never present them as verified facts.
- Internal placeholders may exist in specs, but the customer-facing HTML must not show raw brackets, "placeholder", "demo", "editable", "template", "landing", or "creado con IA".
- Avoid generic filler like "soluciones integrales", "calidad garantizada", "experiencia unica", "creado con IA".
- Keep the business name isolated to this one site.
- Make the page feel designed for "rubros variados de alta conversion" in Tandil, not like a SaaS template.
- Final generation expects an `agent_frontend`. The renderer fallback is only for rough preview.

## Business Snapshot

- id: `google-ChIJV8MZl586M0oRTgGUHoBVWss`
- slug: `electricista-dario-gerez`
- name: Electricista Dario Gerez
- category: Electrician
- inferred profile: Electrician
- requested segment: rubros variados de alta conversion
- city: Tandil
- address: Chacabuco 1235, C7000 Tandil, Provincia de Buenos Aires, Argentina
- phone: 0249 460-5301
- hours summary: Abierto 24 horas
- rating: 5 / 5 (17 reseñas)
- service baseline: instalaciones electricas

## Suggested Commercial Profile

```json
{
  "tone": "practical-workshop",
  "customer_type": "Clientes locales que necesitan entender el servicio, llamar y llegar sin friccion.",
  "hero_claim": "Una landing clara para convertir una busqueda local en una consulta concreta.",
  "services": [
    "instalaciones electricas",
    "Atencion en local",
    "Consulta directa",
    "Ubicacion en Tandil"
  ],
  "trust_bar": [
    {
      "label": "Prueba social",
      "title": "5.0 / 5",
      "body": "17 resenas registradas en las fuentes disponibles.",
      "meta": "Dato verificado",
      "is_demo": false
    },
    {
      "label": "Rubro",
      "title": "Electrician",
      "body": "La pagina debe vender el servicio principal sin sumar prestaciones no confirmadas.",
      "meta": "Base verificada"
    },
    {
      "label": "Agenda",
      "title": "Abierto 24 horas",
      "body": "Horario publicado para orientar la primera consulta.",
      "meta": "Dato verificado",
      "is_demo": false
    },
    {
      "label": "Contacto",
      "title": "Telefono directo",
      "body": "CTA preparado para llamar desde el celular sin buscar el dato en otro lado.",
      "meta": "0249 460-5301"
    },
    {
      "label": "Confianza",
      "title": "Mas de [X] vehiculos",
      "body": "Placeholder editable para volumen real, anos o trabajos terminados si el negocio lo confirma.",
      "meta": "Demo editable",
      "is_demo": true
    }
  ],
  "service_cards": [
    {
      "label": "Servicio",
      "title": "instalaciones electricas",
      "body": "El servicio principal se muestra sin agregar prestaciones no verificadas."
    },
    {
      "label": "Contacto",
      "title": "Consulta directa",
      "body": "Telefono, direccion y horario se ordenan para reducir friccion."
    },
    {
      "label": "Prueba",
      "title": "Referencias publicas",
      "body": "Rating y resenas reales sostienen la decision."
    }
  ],
  "why_choose": [
    {
      "title": "Datos en orden",
      "body": "Nombre, direccion y contacto en un solo lugar."
    },
    {
      "title": "Sin claims falsos",
      "body": "No se inventan servicios, premios, precios ni trayectoria."
    },
    {
      "title": "CTA claro",
      "body": "La pagina empuja al siguiente paso verificable."
    }
  ],
  "packages": [
    {
      "name": "Consulta inicial",
      "price_label": "A confirmar",
      "body": "Bloque editable para convertir visitas en consultas utiles.",
      "items": [
        "Necesidad",
        "Horario",
        "Contacto"
      ],
      "is_demo": true
    },
    {
      "name": "Servicio principal",
      "price_label": "[Editable]",
      "body": "Espacio para detallar alcance cuando el negocio lo confirme.",
      "items": [
        "instalaciones electricas",
        "Alcance a confirmar",
        "Datos reales"
      ],
      "is_demo": true
    }
  ],
  "gallery": [
    {
      "label": "Antes",
      "title": "Foto real del ingreso",
      "body": "Espacio para mostrar el estado inicial del vehiculo, pieza o consulta.",
      "meta": "Placeholder visual",
      "is_demo": true
    },
    {
      "label": "Despues",
      "title": "Resultado o entrega",
      "body": "Lugar reservado para una foto propia del negocio, sin usar stock generico.",
      "meta": "Editable",
      "is_demo": true
    },
    {
      "label": "Electrician",
      "title": "Detalle del trabajo",
      "body": "Plano corto de materiales, herramientas, terminaciones o mostrador segun el rubro.",
      "meta": "Foto a reemplazar",
      "is_demo": true
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Contar la necesidad",
      "body": "El visitante consulta el servicio principal."
    },
    {
      "step": "02",
      "title": "Confirmar disponibilidad",
      "body": "El negocio valida horario, alcance y datos."
    },
    {
      "step": "03",
      "title": "Coordinar visita",
      "body": "Direccion y contacto quedan visibles."
    }
  ],
  "final_cta": {
    "title": "Electricista Dario Gerez: el proximo paso es simple",
    "body": "Llama, confirma disponibilidad y lleva el auto con el dato clave ya resuelto: electrician, direccion y horario.",
    "primary_label": "Consultar",
    "secondary_label": "Ver ubicacion"
  }
}
```


## Useful Real Signals

### Reviews

1. "Lo llame a la 1 de la mañana porque se quemó la térmica de afuera, vinieron y lo arreglo en una hora.el trato muy respetuoso y cordial. Y lo que cobro acorde a lo que hizo y sobretodo por la hora." — Lili Orellano (5/5)
2. "Hizo trabajos en mi casa, muy buena persona para recomendar, gracias." — María Flabiana Andino (5/5)
3. "Un genio Darío, puntual, muy educado y muy prolijo, súper recomendado." — Juancruz Carro (5/5)

### Photos

1. other | allowed | https://places.googleapis.com/v1/places/ChIJV8MZl586M0oRTgGUHoBVWss/photos/AaVGc3k4ZYWz1qGVtlwhqJr0Dr-gnIAnLzPNoXebG7feMN3EoMhMjkv7nm1MTbm5S4ODrGUYw_yL3B8OxPQVeII6A0xyrWCUhB7caWr2rePJ39qEhVujZr5kHWBTFYvJhG9k6lueby0jbY8t4jtX6W16O0m80Fx34UnCyuOf5_8Ol26vLCGR58tFNJQesoHj_IBcEAbHWWJ8uHib7RKXAwH0zHUXAsf5mZUEk05Xl6b9CNv07k5meF8a4uQYFTl_srp_xLNH9LnGH7E3cpdcGNMmCLKAbHzgbp4Rp5m_LTEsfTvP8XMnQ4jKkJAd5taaqZ3aaDvJsHwC6Oz0T0qyRPShubcPUJb2iYEH0ulI0KCRKc4-Rr9Gsk6TGDvl1wFX0sEMJQSY8GUxIkOddz-x_qC3ZK_ZVfoUcUefY_87YULIeuB3v1x0GwqeP8l9PkSSt36l/media?maxWidthPx=1600
2. other | allowed | https://places.googleapis.com/v1/places/ChIJV8MZl586M0oRTgGUHoBVWss/photos/AaVGc3lV6rMiGc57HRHcRY157ajbV_TMwClhxPxIX1SrBM9XxgLTHyy0LpWtO97b1vSjDNnIXK5YahUB6Ax5g4je980FKilgO7rnmB367gUfOJ-NRqwXA_PlbtAYwkWARPDpKFmFKsNTgi_v12OA92soY9RfRJDOnJFqz7mJ86LLMFj54VBHTxCfgJi23dVg0Mh9ToxSOUJrtRP1h0sLJD3vGY44ubWyU2guILzaqkA9b5ODvc4zPSoGJnMvJM5gfXTONSFs9MdV-hmmdZ6CxrRCmSBcYaEGw_DztLZgrgf9Y9KknqFOVUx5IBOmC4c_twliTLf5XD3ZTJKcKfyxNJB_2PFk85m__A2j-UjIpmfb77Lrt4rK79qF8TlSSDvM-92RRgA1Tyo2BhNgGwT9PK5KdtpZfPHIrEHDAoVrvHOC5vs1iS4tGLBlizxKiYR4mKA1/media?maxWidthPx=1600
3. other | allowed | https://places.googleapis.com/v1/places/ChIJV8MZl586M0oRTgGUHoBVWss/photos/AaVGc3n9wLa6jh3aibDmpmdNeYnUAxKojEpmVrVUnSTf8ZetZ1sGuAHt_8ABwRHU0uCfCJmmu9renh__bj45oY7qO1iDSwnghARpvynGacti6qaXAQ1cojGPoYrF-JG-0Nf_8_avKEnMpLlYrfY-OEq7vcBcKJBJt3C4O5yBjnkNz_b2svCcD7CMXDEcKMty6j66Enu5Z49KG70p7eshYMm1p40sTqYABvflhMLxQjc7qMJ0BCT6p70AkyY4-VlpE-7OdZm4d3T1VTokhIJEcZqaSr28_YfW4K0hTHrpVfaHV1HoAko2-TFraIYatg2r2ZnedGlLmaTMpcnvoeAZAQrM6QsbWNVd_S2SnOm4sB-ngIhVmZgJjaspC1lJihtcetVVs1Yu7_Z6EFwjWe4-ywOLmCD-LOv1q34KlCOm9U_VEhbZm0_w-3Zh0lUEsfK44w/media?maxWidthPx=1600

### Sources

- https://maps.google.com/?cid=14653118346360521038&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA
- https://www.google.com/maps/contrib/104656296360135059301/reviews
- https://www.google.com/maps/contrib/113023046472116255765/reviews
- https://www.google.com/maps/contrib/104929219798954608961/reviews


## Recommended Design Direction

- Use cues from the rubros variados de alta conversion domain and the local retail/service context in Tandil.
- Quality matters more than cheap or fast generation.
- Choose one proven conversion template: `hero-proof-offer`, `editorial-local-story`, `visual-menu`, `service-diagnostic`, `catalog-counter`, or `urgent-call-first`.
- Build a real landing structure: strong hero, trust bar, services, why choose, offer/options, before/after or gallery, process, reviews/contact, final CTA.
- Make sparse data look intentional: use AI-generated generic imagery and crafted microcopy where the source data is thin. Do not leave empty generic cards.
- Automotive references to emulate structurally: strong claim + numbers + services + CTA to booking; urban/aggressive wrapping/custom style; detailing service taxonomy; emotional hero; packages; before/after; reviews.
- You may use plain HTML/CSS or a framework/library if it materially improves the final UI. You have broad discretion to use frontend/UI, animation, and icon libraries such as Aceternity UI (https://ui.aceternity.com/components), shadcn/ui (https://ui.shadcn.com/docs/components), Magic UI (https://magicui.design/), Framer Motion, GSAP, Motion One, lucide-react, React Icons, or similar component/motion kits when they raise product quality.
- If using a framework, build/export it yourself and point `agent_frontend.output_dir` at the static output.
- Avoid making ten pages share the same hero rhythm, card system, font pairing, spacing scale, or composition.
- Prefer concrete microcopy based on the signals above.
- Vary `visual_mood` and `composition` across the 10 sites.
- Avoid repeating the same hero rhythm, proof order, and CTA wording from nearby briefs.
- If the page would otherwise look templated, use a high-conversion template deliberately: first viewport promise + proof + CTA, visible image, objection handling, offer/options, process, final CTA. Make it polished rather than novel.

## Current Spec, If Any

```json
null
```


## SiteSpec Schema Shape

Return one object with:

- `business_id`
- `slug`
- `visual_mood`: one of `roadside-urgent`, `workshop-trust`, `precision-service`, `neighborhood-direct`, `fleet-utility`
- `composition`: one of `split-command`, `poster-bay`, `route-card`, `service-ledger`, `photo-board`
- `headline`
- `subheadline`
- `primary_cta`
- `secondary_cta`
- `service_tags`: 3 to 5 strings
- `proof_points`: 3 to 4 strings
- `resource_title`
- `resource_items`: 3 to 4 strings
- `review_heading`
- `contact_heading`
- `image_prompt`
- `design_notes`
- `conversion_template`: one of `hero-proof-offer`, `editorial-local-story`, `visual-menu`, `service-diagnostic`, `catalog-counter`, `urgent-call-first`
- `design_brief`: required for future/remake quality:
  - `market_position`: what this page sells and for whom
  - `visual_thesis`: concrete art direction tied to the business/rubro
  - `copy_voice`: how the copy should sound and what it must avoid
  - `layout_signature`: what makes this page structurally specific
  - `asset_plan`: how real photos and safe AI generic imagery are used
  - `ai_fill_plan.copy`: how AI enriches thin data without false claims
  - `ai_fill_plan.imagery`: what non-specific images/textures can be generated
  - `ai_fill_plan.boundaries`: explicit limits: no fake prices, stock, brands, years, awards, guarantees, services or reviews
  - `anti_patterns`: visible failure modes to avoid
  - `rewrite_targets`: what to improve if remaking an existing page
- `commercial`: recommended for sellable landings:
  - `tone`: `premium-detailing`, `urban-custom`, `practical-workshop`, `fast-local`, `parts-counter`, or `bodyshop-craft`
  - `customer_type`
  - `hero_claim`
  - `trust_bar`: 3 to 5 cards with `label`, `title`, `body`, optional `meta`, optional `is_demo`
  - `service_cards`: 3 to 6 benefit-led service cards
  - `why_choose`: 3 to 5 reasons tied to the business/rubro
  - `packages`: 2 to 4 offer/options; no fake prices
  - `gallery`: 2 to 4 before/after, real-photo or AI-safe generic visual blocks
  - `process`: 3 to 5 steps from inquiry to visit/booking
  - `final_cta`: `title`, `body`, `primary_label`, `secondary_label`
  - `editable_note`: short warning for placeholders
- `agent_frontend`: required for final quality generation:
  - `mode`: `static-files` or `framework-build`
  - `source_dir`: source folder kept inside this repo, for example `data/frontends/tandil-rubros-variados-de-alta-conversion/electricista-dario-gerez`
  - `output_dir`: required only for `framework-build`; points to the static build output copied by the generator
  - `build_command`: optional note, not executed by the generator
  - `libraries`: optional list of real libraries used
  - `notes`: short explanation of the visual direction and why it fits this business
- `creative`: object used by the renderer to make the page feel custom:
  - `concept`: commercial idea for this specific business
  - `audience`: who is likely to search/contact
  - `visual_direction`: concrete art direction, not generic adjectives
  - `layout`: one of `studio-detail`, `wash-flow`, `oil-bay`, `roadside-rescue`, `bodyshop-craft`, `parts-counter`, `mechanic-ledger`
  - `texture`: one of `polished-glass`, `water-ripple`, `oil-label`, `road-markings`, `primer-dust`, `parts-shelf`, `service-ledger`
  - `hero_angle`: one strong commercial sentence for the hero
  - `hero_cards`: 2 to 4 cards with `label`, `value`, optional `note`
  - `sections`: 3 to 5 blocks. Each block has `type`, `eyebrow`, `title`, `body`, `items`, optional `callout`.

Creative block `type` values:

- `service-board`
- `process`
- `quote-strip`
- `quick-actions`
- `material-story`
- `metric-grid`

The `agent_frontend` artifact is the main place where the page stops being a template. The `design_brief` and `creative` objects remain useful as planning metadata and fallback input, but the final UI must be authored.
