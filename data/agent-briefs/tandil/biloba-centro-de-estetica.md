# Site Brief 7: BILOBA CENTRO DE ESTÉTICA

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

- id: `google-ChIJ0xPlavcfkZURPlVFKnFXVHw`
- slug: `biloba-centro-de-estetica`
- name: BILOBA CENTRO DE ESTÉTICA
- category: Beauty Salon
- inferred profile: Detailing y estetica vehicular
- requested segment: rubros variados de alta conversion
- city: Tandil
- address: 4 de Abril 795, B7000 Tandil, Provincia de Buenos Aires, Argentina
- phone: 0249 460-5835
- hours summary: Lunes a Sabado; Domingo cerrado
- rating: 5 / 5 (63 reseñas)
- service baseline: centro de estetica

## Suggested Commercial Profile

```json
{
  "tone": "premium-detailing",
  "customer_type": "Personas que cuidan el auto, quieren recuperar brillo, proteger terminaciones o reservar un lavado detallado.",
  "hero_claim": "Que el auto vuelva a sentirse cuidado, limpio y listo para mirar de cerca.",
  "services": [
    "Detailing",
    "Interior",
    "Exterior",
    "Proteccion o consulta"
  ],
  "trust_bar": [
    {
      "label": "Prueba social",
      "title": "5.0 / 5",
      "body": "63 resenas registradas en las fuentes disponibles.",
      "meta": "Dato verificado",
      "is_demo": false
    },
    {
      "label": "Rubro",
      "title": "Detailing y estetica vehicular",
      "body": "La pagina debe vender el servicio principal sin sumar prestaciones no confirmadas.",
      "meta": "Base verificada"
    },
    {
      "label": "Agenda",
      "title": "Lunes a Sabado; Domingo cerrado",
      "body": "Horario publicado para orientar la primera consulta.",
      "meta": "Dato verificado",
      "is_demo": false
    },
    {
      "label": "Contacto",
      "title": "Telefono directo",
      "body": "CTA preparado para llamar desde el celular sin buscar el dato en otro lado.",
      "meta": "0249 460-5835"
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
      "label": "Interior",
      "title": "Habitaculo con sensacion de estreno",
      "body": "Copy pensado para vender limpieza profunda, orden visual y confort sin inventar tratamientos no verificados."
    },
    {
      "label": "Exterior",
      "title": "Brillo y terminacion visible",
      "body": "Bloque preparado para lavado detallado, descontaminado o correccion si el negocio lo confirma."
    },
    {
      "label": "Proteccion",
      "title": "Cuidado despues del lavado",
      "body": "Espacio editable para ceramicos, selladores o mantenimiento cuando existan datos reales.",
      "is_demo": true
    }
  ],
  "why_choose": [
    {
      "title": "Resultado fotografiable",
      "body": "La estructura empuja a mostrar antes/despues, detalles y terminaciones reales."
    },
    {
      "title": "Reserva simple",
      "body": "El CTA lleva a consultar turno, tipo de vehiculo y necesidad concreta."
    },
    {
      "title": "Prueba social visible",
      "body": "Rating, resenas y comentarios quedan arriba, no escondidos al final."
    }
  ],
  "packages": [
    {
      "name": "Lavado detallado",
      "price_label": "Precio a confirmar",
      "body": "Para exterior e interior con foco en presentacion general.",
      "items": [
        "Exterior",
        "Interior",
        "Terminacion visual"
      ],
      "is_demo": true
    },
    {
      "name": "Interior profundo",
      "price_label": "[Desde editable]",
      "body": "Paquete editable para butacas, alfombras, plasticos y olor.",
      "items": [
        "Aspirado detallado",
        "Superficies interiores",
        "Fotos del estado inicial"
      ],
      "is_demo": true
    },
    {
      "name": "Proteccion premium",
      "price_label": "[Presupuesto editable]",
      "body": "Lugar para ceramico, sellador o proteccion si el negocio lo ofrece.",
      "items": [
        "Evaluacion previa",
        "Producto a confirmar",
        "Mantenimiento recomendado"
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
      "label": "Detailing",
      "title": "Detalle del trabajo",
      "body": "Plano corto de materiales, herramientas, terminaciones o mostrador segun el rubro.",
      "meta": "Foto a reemplazar",
      "is_demo": true
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Contar el estado del auto",
      "body": "El cliente consulta por interior, exterior o detalle puntual."
    },
    {
      "step": "02",
      "title": "Elegir nivel de trabajo",
      "body": "La pagina propone paquetes editables y deja claro que el precio se confirma."
    },
    {
      "step": "03",
      "title": "Reservar turno",
      "body": "CTA directo a telefono o WhatsApp cuando esta disponible."
    },
    {
      "step": "04",
      "title": "Registrar resultado",
      "body": "Bloque de galeria listo para cargar fotos reales del trabajo terminado."
    }
  ],
  "final_cta": {
    "title": "BILOBA CENTRO DE ESTÉTICA: el proximo paso es simple",
    "body": "Llama, confirma disponibilidad y lleva el auto con el dato clave ya resuelto: detailing y estetica vehicular, direccion y horario.",
    "primary_label": "Reservar turno",
    "secondary_label": "Ver ubicacion"
  }
}
```


## Useful Real Signals

### Reviews

1. "Natalia: un ser de luz, transmite en sus masajes una energía especial. Recomiendo la experiencia!!!!
Tuvo en cuenta todas mis inquietudes y necesidades.
Muy profesional!!!! comienza la sesión con una entrevista completa que considera los aspectos particulares de cada uno.
La sensación de bienestar trasciende al día del masaje y se instala con el transcurrir de los días.
Conocí el espacio x el hermoso regalo de cumple de Gloria y Marcelo.(Gracias!) Seguiré asistiendo porque considero que ayuda a mí salud 😍
Gracias gracias gracias 🙏🏻" — Andrea Dicósimo (5/5)
2. "Natalia es una profesional que te hace sentir totalmente relajada. En un lugar cálido y muy agradable. Super recomendable" — silvana bañuelo (4/5)
3. "Es la primera vez que voy a un instituto de cosmética. Mi experiencia es muy buena, me siento muy cómodo y relajado. Creo que Natalia es muy buena profesional, ya que me explica lo que va haciendo y se lo toma muy en serio. Siempre comenta sobre las novedades, cursos y perfeccionamientos de los que participa. Está muy atenta a las novedades. Estoy muy satisfecho." — Rodolfo Corradetti (5/5)

### Photos

1. other | allowed | https://places.googleapis.com/v1/places/ChIJ0xPlavcfkZURPlVFKnFXVHw/photos/AaVGc3kWkxEb3J3G_A9ZY619o8PJWvvb1Ugp65UUq3rBGGsn74AvNDwbbIObXQUUB6e5Py1YMiBVuygHDi8RPmsvcb07PT7tOK3WvGhb79tNfGkJxYBIBxtTF7MZZSXkI5OC4wCBAqqaAi6UvVwmM2PN3XGEiuY2AcueGF0O2A5zl3ZYFK9Jqa53gWuaISepRGfa-buOdcwhYOpeBYKroXV06fbrf0f8luP-dQ772UL4le-7qEa_pGSVpbqpb98WP0VdKuaeFfO1YvyAtJyNRpeazKlKpXd8hFp6L8jHkCtsCZpZDdZbtZWJ-y1LCMCX_wioZM1oZzXJV8gPA7SHAsaC_CP33oQQaZoYgFhT9gYiLAhFUUt5gRqrZYwT1QesnpRqOTFZ0Wy9v8gvABCwS5uMiDKuovqC1a_lCjBXmbFZGwN4Qi0v/media?maxWidthPx=1600
2. other | allowed | https://places.googleapis.com/v1/places/ChIJ0xPlavcfkZURPlVFKnFXVHw/photos/AaVGc3mj6y3bs0mPOWE8N86ffUUXetuaUoDyIdCz1X0DVgQoRWVKFCv0XBbkxPWFDAcS07QWl1Q0Puu0kZRS84ap-SFwxp1NoJgP0aLgUeR0NmV9sGmf6wUyjyt2bHl9Ym_KDTF0XLzATNRh0jfMB2VNyvQwfFcb2OyPeUPRLU6S0AwcxoIAF1c_nE8V8Ws7Bhdg_YMice8_09A-oPrD1D8WxFVDh1HNYkYHEXAIuCmyrFalCBuB5r3mJzwpokJuDk82jZGRCRNtai2Lh4OqoaEPh06sI1gOA9L0RphY4z7Pjs525wZ6nIByHFRPdYUTL3u3jonWfqodFDCrehAd-D4jXSX-cN-Jn20TOCOU-Rf1gSO4qzRqW1Qipjcu8Ibf27NwA3kwKsgkuU4Nja8qeBE3RAyP3fPM-B1IrVuOoTDbDyFlnw/media?maxWidthPx=1600
3. other | allowed | https://places.googleapis.com/v1/places/ChIJ0xPlavcfkZURPlVFKnFXVHw/photos/AaVGc3kSTN4mCm0u4A24HGuc5GIrezes_jIzdXdNetfE7CI6d7bFIGGWRlMN951v3FWnFBbmBQC1ENbpc9nojenP2rkiP7mcLCFKSDL73gos0qtZn9-859Ayxc1IiOScnlgQMLUxNJDj7f5qqMWaDLm3ruGx4_4CUBeTJgZMPZgpIBkIv4KUIW-mZzlY0OWxoqY663xC7Q1YjpOeoYAFhWGyW0gFKQLFVFKosZs6MXjyOHtA186MXfGWgfipqAMaL9S1F0vvr2_wFcrjIgc0w3XR5EYYtWwTX1I4BL-SqFkhn0Sw9wnwjQIc6a4hmG4QYk67SME-Z445PLAAsNFnJ2Dr1q25VJKhlqsoAOzp0C9Zbdmc53ISv2sxt9jqJeqHEQz-QFnnYVZgRD-o9XcHRbnnmb08fO28haliXOas9SbGwYUSpA/media?maxWidthPx=1600

### Sources

- https://maps.google.com/?cid=8958881702298867006&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA
- https://www.google.com/maps/contrib/118278615627510069566/reviews
- https://www.google.com/maps/contrib/105976127319622672975/reviews
- https://www.google.com/maps/contrib/113353069109065773919/reviews


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
  - `source_dir`: source folder kept inside this repo, for example `data/frontends/tandil-rubros-variados-de-alta-conversion/biloba-centro-de-estetica`
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
