# Site Brief 5: Consultorio Veterinario Fernandez

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

- id: `google-ChIJk1ED8JMfkZUR4cft0k-WAYU`
- slug: `consultorio-veterinario-fernandez`
- name: Consultorio Veterinario Fernandez
- category: Veterinary Care
- inferred profile: Veterinary Care
- requested segment: rubros variados de alta conversion
- city: Tandil
- address: Gral. Paz 542, B7000 Tandil, Provincia de Buenos Aires, Argentina
- phone: 0249 444-4777
- hours summary: Lunes a Sabado; Domingo cerrado
- rating: 4.9 / 5 (165 reseñas)
- service baseline: veterinaria

## Suggested Commercial Profile

```json
{
  "tone": "practical-workshop",
  "customer_type": "Clientes locales que necesitan entender el servicio, llamar y llegar sin friccion.",
  "hero_claim": "Una landing clara para convertir una busqueda local en una consulta concreta.",
  "services": [
    "veterinaria",
    "Atencion en local",
    "Consulta directa",
    "Ubicacion en Tandil"
  ],
  "trust_bar": [
    {
      "label": "Prueba social",
      "title": "4.9 / 5",
      "body": "165 resenas registradas en las fuentes disponibles.",
      "meta": "Dato verificado",
      "is_demo": false
    },
    {
      "label": "Rubro",
      "title": "Veterinary Care",
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
      "meta": "0249 444-4777"
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
      "title": "veterinaria",
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
        "veterinaria",
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
      "label": "Veterinary Care",
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
    "title": "Consultorio Veterinario Fernandez: el proximo paso es simple",
    "body": "Llama, confirma disponibilidad y lleva el auto con el dato clave ya resuelto: veterinary care, direccion y horario.",
    "primary_label": "Consultar",
    "secondary_label": "Ver ubicacion"
  }
}
```


## Useful Real Signals

### Reviews

1. "Siempre fuimos a esa veterinaria. Los conocemos hace años desde que estaban en Santamarina y Pinto. Me llamo la atención hoy, al comprar desparasitarlo para perro y gato, cobraron 30 mil cada uno. Ante la duda por el incremento, decidí verificar costos y su precio no supera los 10 mil en otros lugares. No les compro más, perdieron nuestra confianza 😞" — Lourdes Corrales (2/5)
2. "La atención de Tati y Gisela es simplemente excelente. Siempre están ahí para resolver nuestras dudas y acompañarnos en los momentos más difíciles de ser tutores de nuestras mascotas. Se nota la pasión que ponen en su trabajo, su compromiso y la verdadera vocación que tienen por cuidar a nuestros peluditos." — Simon Salagoity (5/5)
3. "Son gente increible, mucha humanidad!!!
Excelente atención de todo el grupo que alli trabaja... Mi gatita ya recuperandose y feliz de que ellos la tengan como paciente de ahora en mas!!! Super recomendable!!! Gracias infinitas!!!" — Lore Bértolo (5/5)

### Photos

1. other | allowed | https://places.googleapis.com/v1/places/ChIJk1ED8JMfkZUR4cft0k-WAYU/photos/AaVGc3nJNJkka6ylh0XtCB_9yCOLCW-zS5HrVA6Uj4Ie47ME7kh4qHksVPLeroV1kZdZgJ8WYm5fNoefic8QHYwSldJ4JmSj5znccjKnysliXVWaNSqwgyImqzODQjIehKvt5BRRdV6SP-c7c1U9z0j5OGl5Eb8QbB57xdCoIrCJARHV_5dsKkwzR74HTHX5tTrXoVKBtVebuoWwT6IuWNfJsyMiFF8MLsxA8eAwO_CYRfRzlaYLLJlcesc1J94IAF9H0zYDajC-WqTCjlSTl7gFZBL4Hfetu-tN2aAmTGA5Q47YW4UpkhsX-4qSYiSGEP2gwu0ghT9Q-VZ7sTOh5_rovep-OqWNcY-ALRre592hcskyB7b_h7ngxpDcFEJiue8ULhHLQwRZo1ejuFGmtDQfWQFsxbrv32bUuCJxPWaiaCpqHS0f/media?maxWidthPx=1600
2. other | allowed | https://places.googleapis.com/v1/places/ChIJk1ED8JMfkZUR4cft0k-WAYU/photos/AaVGc3mGzqJau0mZDrbJBlgyPGqK7le6Xwp5xPKyqC3xJYrkLlY2RKdEkxkAmE9yWTGV3OkT5DXUdIqxv1ew6HCDqxJv-LhRni0kz6H8EYusF3wIqMOFI7tLjN3ol0ojwCMsdQJ03NILCNO7EsRe3YjXefetzj_IczQYMOsIqTVjvM2iwTIHwbFLXjI8Dx1bJ9QTdXZ9wteiCah9uvczZkfinJM2Q0B-g4O3JdCIeaiSmBu5q0L0zTXvAikHE0J3OPojWbcl8b8n6-shrjkTiNTy7ynfY8rR-R8sJqfuZtewQv1hEHdEZ9J2cdEIVfHdHgH3PGYIXiumf1hCyaENXh5iGIiEN86pUzYisJD5-TL4COuQlBucoPrUxSEGmeX88ZWKSzYJQSR9RPq930C362SmayfKIP3iqJpKiXGW47kIkWWVyaCzUHHL9ef2586hTeWj/media?maxWidthPx=1600
3. other | allowed | https://places.googleapis.com/v1/places/ChIJk1ED8JMfkZUR4cft0k-WAYU/photos/AaVGc3mFnaZcLLjjfHjtLRFsP3gdnNA7ypCpe1hNM99M5jFV0qir_8VMPpO3mgu7yS-65cQowL4TRU--cT99_Z_plF3AwbEis-quhWyAvAart4PEddKvc1fg1WysoqgFzpDqxGsVvas3VmVqJE9hwJCi002FbAq2DYRgs2ZYWEcewVL3Mi2VsQXheMM4ug5SGCaVEZtfls7YN67YS0xLbypqWbQF7MJfih-CSUSmF8cDZNC6noGkMsOsEXoc0tZI6pEvC7MoHAHfikJZSu_Ayz4rcBWmu981OGdWP0SbaKdidZyqm2ubjrK0VsQw7Ow7IOCj_BkKVGh_BXAj1sscdPx9UL4mrGe7P2xL_oqWW51FfhbLw_IgLsUVoFO_lz-N7SQP1-VeuhsR2SD2_a6Y6uieDgcy-98ecrlR5H9fzOFEppQHSJkq/media?maxWidthPx=1600

### Sources

- https://maps.google.com/?cid=9584106751606507489&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA
- https://www.google.com/maps/contrib/102376861759291273948/reviews
- https://www.google.com/maps/contrib/112010736878632819337/reviews
- https://www.google.com/maps/contrib/106476604989495046452/reviews


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
  - `source_dir`: source folder kept inside this repo, for example `data/frontends/tandil-rubros-variados-de-alta-conversion/consultorio-veterinario-fernandez`
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
