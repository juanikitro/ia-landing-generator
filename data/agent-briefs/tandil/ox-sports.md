# Site Brief 9: OX Sports

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

- id: `google-ChIJUU2JcPwhkZURtjC3M7AJU7s`
- slug: `ox-sports`
- name: OX Sports
- category: Gym
- inferred profile: Indumentaria
- requested segment: rubros variados de alta conversion
- city: Tandil
- address: Gral. Rodríguez 1649, B7000 Tandil, Provincia de Buenos Aires, Argentina
- phone: 0249 437-3891
- hours summary: Lunes a Sabado; Domingo cerrado
- rating: 4.9 / 5 (120 reseñas)
- service baseline: entrenamiento personal

## Suggested Commercial Profile

```json
{
  "tone": "premium-detailing",
  "customer_type": "Personas que quieren consultar disponibilidad o acercarse al local con una idea clara.",
  "hero_claim": "Ver, consultar y pasar por el local sin perder datos.",
  "services": [
    "Ropa",
    "Atencion en local",
    "Consulta por disponibilidad",
    "Ubicacion comercial"
  ],
  "trust_bar": [
    {
      "label": "Prueba social",
      "title": "4.9 / 5",
      "body": "120 resenas registradas en las fuentes disponibles.",
      "meta": "Dato verificado",
      "is_demo": false
    },
    {
      "label": "Rubro",
      "title": "Indumentaria",
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
      "meta": "0249 437-3891"
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
      "label": "Local",
      "title": "Visita con direccion clara",
      "body": "Horario, ubicacion y contacto aparecen arriba."
    },
    {
      "label": "Consulta",
      "title": "Disponibilidad a confirmar",
      "body": "No se inventan marcas, talles, precios ni stock."
    },
    {
      "label": "Vidriera",
      "title": "Fotos reales primero",
      "body": "La galeria queda lista para imagenes del local o productos reales.",
      "is_demo": true
    }
  ],
  "why_choose": [
    {
      "title": "Sin stock falso",
      "body": "La pagina invita a consultar disponibilidad real."
    },
    {
      "title": "Datos del local",
      "body": "Direccion, horario y contacto evitan busquedas extra."
    },
    {
      "title": "Fotos editables",
      "body": "La vidriera se completa con material propio."
    }
  ],
  "packages": [
    {
      "name": "Consulta de prenda",
      "price_label": "Precio a confirmar",
      "body": "Para preguntar por disponibilidad real.",
      "items": [
        "Tipo de prenda",
        "Talle",
        "Color si aplica"
      ],
      "is_demo": true
    },
    {
      "name": "Visita al local",
      "price_label": "Sin precio publicado",
      "body": "Direccion y horario para acercarse.",
      "items": [
        "Horario",
        "Direccion",
        "Contacto"
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
      "label": "Indumentaria",
      "title": "Detalle del trabajo",
      "body": "Plano corto de materiales, herramientas, terminaciones o mostrador segun el rubro.",
      "meta": "Foto a reemplazar",
      "is_demo": true
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Consultar prenda",
      "body": "El cliente pregunta por tipo, talle o disponibilidad."
    },
    {
      "step": "02",
      "title": "Confirmar stock",
      "body": "El local responde con datos reales."
    },
    {
      "step": "03",
      "title": "Coordinar visita",
      "body": "Direccion y horario visibles."
    }
  ],
  "final_cta": {
    "title": "OX Sports: el proximo paso es simple",
    "body": "Llama, confirma disponibilidad y lleva el auto con el dato clave ya resuelto: indumentaria, direccion y horario.",
    "primary_label": "Consultar disponibilidad",
    "secondary_label": "Ver ubicacion"
  }
}
```


## Useful Real Signals

### Reviews

1. "expectacular" — Cristian Castillo (5/5)
2. "Hago running y comencé para fortalecer luego de una lesión que requirió kinesiología. Divinos todos y muy buen ambiente, más allá del profesionalismo y la vasta y amplia cantidad de máquinas –algunas que ni conocía– 🥺😅😂 Pese a que amo el running, el gym siempre me fue un reto; y OX logró romper esa barrera y de a poco, como un gatito asustado 😂 me encanta... 5/5 ⭐⭐⭐⭐⭐🥺❤️😍🤗❤️" — Federico Algañaraz (5/5)
3. "Es un excelente gimnasio, lleno de mancuernas y máquinas bien adaptadas y en excelentes condiciones. No solo eso, la atención es total, los instructores son pacientes, amables y súper capaces y atentos a la hora de corregir o explicar técnica y ejecución. Las rutinas que elaboran son siempre orientadas a los objetivos que uno tiene, jamás son a mano alzada o “estándares” como para cumplir así nomas. Realmente es un lugar donde uno se siente a gusto, donde se desarrolla una experiencia de familiaridad súper cómoda y donde uno puede explotar sus objetivos fisicos a gusto y al máximo. Siempre recomendables." — Nazareno Barraza (5/5)

### Photos

1. other | allowed | https://places.googleapis.com/v1/places/ChIJUU2JcPwhkZURtjC3M7AJU7s/photos/AaVGc3mT7LHDyX6uDXeHDNWoyE2Zg294-ZpGl6P2ewAqwpLo9LMHY5s7XJH85swVDckHFsGBanuIorzIAADbrgbEjEDi9edOznj7_eLU0lrDNHwwaRqCF6xflxBECB2EhWIH7ZfzC3IyvTcU5vpd0C8fx4ailojnEwbikRBemRvfdZrI4hdWc54K-PYMLJ8Q2qmPkotVl_YfWlhFyddKX2o4ENcRtQaHQYGOvmbDo33YbyzwTWmJwlwOUXpRdfCvIfc7q5YrGYJiV0zLt6MXNWxmpSwKpCiOXXstkzGR4zJVY7PInBIHjJixfSt8xaypkG56O3GhetpJKGD8mLZ3tH5AifvbKnLjoyNZDz1MEsRkZ4Oa_WESz7X7jbBUsPi5zVZPxXM75zK_tsRcQMcElrPEuaoeuCx2AP-ZxxT3Eik1LaI/media?maxWidthPx=1600
2. other | allowed | https://places.googleapis.com/v1/places/ChIJUU2JcPwhkZURtjC3M7AJU7s/photos/AaVGc3kEui1IT2TQfcndCuV9dphyd1FM-_YbysQQ-5ScbBs-aIwMEDcXaHsIY5pSIYVrbYyk-OoQ5XkhVQI3pLr37sUCFOXsimuvrxHQ1wB9g0P17c7V1O-FJaVf1Z6R29GuFPdKlfvWTJNWOpLMVAwL3Wyaf7IkKtMqc-ESIZrbIRxZNY6cfdkdAEt7a3Khe1zbS5TItWHuU-D9AKKW5SoWf0qmcggzSUCm5REdQ6i7QlBe9aZanCf31E7ch3zQ2BUCN8F0KTbgZDjJ4UsbJKzKmAFffmAjpDuMk3ySyMx2wWR42MLDSUuajM8JJRTE1Tp0m_FDPmVweokSrXp6RHk0GSRLqy9jb5XAriHL1Bh3tSD6v7G_yFAOXlO5cMe2woYIj040Xy-Sgm-8eGeae4NcHu-fmiMLW-RNXauLtLEYndE/media?maxWidthPx=1600
3. other | allowed | https://places.googleapis.com/v1/places/ChIJUU2JcPwhkZURtjC3M7AJU7s/photos/AaVGc3lxgVsz0FkkEa6TybPCq4rEeUiMznzodH9dWgA5fVqbWv7HCcV5WuMgdiDjBzRdDHIM4yANNK0rPudo4EDwkFxilVA6OBJB6L26ZrIy0VIl0ycih3z8__MsRikruFFpUDCdqlESlL7Elg5utN1epeaHrUeyshNjv317PUpI6bJ_KY473OG2HCqXCceWwP31IUE649ZAdLrgqmZ01jtHRTCrbQHWax2UALl4PXGITn56jwxsSXePg99z6UPF_44GeGp5Bv1-D2wXhPGk5gIrMqQUB_H-ninkJ1E-E7UnGWxp7MC8YcOWCy2AUXL-qyZko_cLlWsrgaF0t-Y5EhZBGXiWPnjnH_u445Nz6fPWb5-A-qTqN_u-pk3XCAj0Vx_I4GSWn7mlEvo2JNKvHEs5phOyWeQAX3Tz2wvpQSY_IFT4Ow/media?maxWidthPx=1600

### Sources

- https://maps.google.com/?cid=13498143160546046134&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA
- https://www.google.com/maps/contrib/111311087812232062728/reviews
- https://www.google.com/maps/contrib/118435177808864762260/reviews
- https://www.google.com/maps/contrib/109508428278561200460/reviews


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
  - `source_dir`: source folder kept inside this repo, for example `data/frontends/tandil-rubros-variados-de-alta-conversion/ox-sports`
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
