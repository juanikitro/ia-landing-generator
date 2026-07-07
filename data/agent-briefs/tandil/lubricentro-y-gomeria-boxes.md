# Site Brief 3: Lubricentro y Gomeria BOXES

## Goal

Write or refine one `SiteSpec` for this business. Use the agent session context and judgement. Do not call the OpenAI API from repo scripts.

## Hard Rules

- Use only verified data below.
- Do not invent services, years, awards, guarantees, prices, certifications, owners, staff, or claims.
- Visible copy must be Spanish argentino, natural, local, commercial, and not exaggerated.
- Avoid generic filler like "soluciones integrales", "calidad garantizada", "experiencia unica", "creado con IA".
- Keep the business name isolated to this one site.
- Make the page feel designed for "servicios vehiculares" in Tandil, not like a SaaS template.

## Business Snapshot

- id: `google-ChIJzZSnpU4hkZURfE9Ok88wjqc`
- slug: `lubricentro-y-gomeria-boxes`
- name: Lubricentro y Gomeria BOXES
- category: Car repair and maintenance service
- inferred profile: Lubricentro
- requested segment: servicios vehiculares
- city: Tandil
- address: Ameghino 898, B7000 Tandil, Provincia de Buenos Aires, Argentina
- phone: 0249 443-7843
- hours summary: Lunes a Sabado; Domingo cerrado
- rating: 4.7 / 5 (44 reseñas)
- service baseline: lubricentro

## Useful Real Signals

### Reviews

1. "Espetacular la atención recomendable cien por ciento." — Marcelo Cabrera (5/5)
2. "Excelente atención siempre con toda la onda!" — Nicolas “Nekoo Wilson” Davalo (5/5)
3. "Excelente atención, muy buenos precios" — Jorge Ferreira (5/5)

### Photos

1. other | allowed | https://places.googleapis.com/v1/places/ChIJzZSnpU4hkZURfE9Ok88wjqc/photos/AaVGc3kz1JyDSHZ70ZGEGkj_K4Tk4gu1yNL6pB1cLfGGFcEdFK0TpvRun3jqhqjiHE6BW0Bk-PWRCcqjJB5MwNvqb9-83oWk7YzPSj898PbRyHwLDad2BVn8qpSLeFWtqX-dmsrdWIxwR9fNn2xRzaNRDU7YJW9KWZ4Jbro2sKEaxJ3IjsFCqa1Blc345HcGhhmeKwTJlIlZ4f9LcbuJU_GopcTN9sPpKbTAuyIN_R004UwglrYlS34gzSZYJ6FxRR4JlGobc9V9_-mPkkbpx_Znj6JQo94qoMVv2rZTFDhfMwh0tuJS3U4kmk8zXMvr_nbldk4izmBpd3J3MNIAv3l8_NxtGJiw2jb58AaIgWA2N9LZ_38IKSWIzzQDmmN1Rb5zFU5wtuqzGUwBN8642TQnkXnWWBlbxWAJf_UyAzNkJzAtX3SY/media?maxWidthPx=1600
2. other | allowed | https://places.googleapis.com/v1/places/ChIJzZSnpU4hkZURfE9Ok88wjqc/photos/AaVGc3n4KQ6mSGo-lTnwjUX-sqEZK3t6YtMEXa8gi0vbgKcCKLE1X6wCkhlWczJKNNfQh3XnkSSM2NitrAZHJ8H2Kt2eRf7ux6BriWXuLkeKbxCW_-FFDmXSEwT78269A44hRFEuvR51BShuvhC9LSHEcmwJ_9IsPWLKqt8MEdasueU7HHWbf_6_ao2diNIxzlE5N8o4hCugTl74MMAVAUooW4LAGKdVBUggjbwNk51UhbuM197yoi2bvxuCn4RuWdZ7kquRyrJ2_KGRTWlRVKuJE7tzrSTB4GoECAkI_DXb-xbtF1_rm8Iszlemyn1Jd4rz6Fz0Pk5Ov--k8VgnNN2tJNqwzqUiE8ohgBKCl4Ko_zPUlGEAVLL7wXWgGWFyaopaMal1sjKGom4pVtvz7QwWeMmp96jsZzt-a0maD0cpiFc/media?maxWidthPx=1600
3. other | allowed | https://places.googleapis.com/v1/places/ChIJzZSnpU4hkZURfE9Ok88wjqc/photos/AaVGc3lmlVk9ppIMCiei_aGPYIFSd31lvh96Y-gmRQYqb5s_Nbm9KANE3DMlLnNf5pk2bIdo9qW9ZZREPxbWKQcnmOSgGAOaab4fLdeantpIl06NHahRYkEr9og7LZxYxlnbD2SqTqe_iEIQjVbHZW43pHOSF8ijzF5ud9YwN-ZtcLiI7U_wXiqZ-LaF8Xr8Auipxp4ETc3JbuFp4F1IknDAJIjSVEG_OSmZitoQjVWT60J8ZKQ6SSCmRxiGvOm-vp_-7q1O8gPXF7YzS4RFMaFRuqq3XTxgmzUvd_gXFwrPLT2gjMiUQKUidv_Nk-d8ILinQQeco4OIlHZlEZVio1sf2p1s0axdA2Fk_M9SNq2k7jQRO0oNKM0AgsPnivV05MNQJhCo8jYGioeyudmrA9nbOXu-CHgHuD-OR960bQvERsJa4BtI/media?maxWidthPx=1600

### Sources

- https://maps.google.com/?cid=12073641319114624892&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA
- https://www.google.com/maps/contrib/114794676651209773522/reviews
- https://www.google.com/maps/contrib/102596455314038319399/reviews
- https://www.google.com/maps/contrib/116963754561078897502/reviews

## Recommended Design Direction

- Use automotive/local-service cues: route, workshop, tires, urgency, practical contact, opening hours, location.
- Prefer concrete microcopy based on the signals above.
- Vary `visual_mood` and `composition` across the 10 sites.
- Avoid repeating the same hero rhythm, proof order, and CTA wording from nearby briefs.

## Current Spec, If Any

```json
{
  "business_id": "google-ChIJzZSnpU4hkZURfE9Ok88wjqc",
  "slug": "lubricentro-y-gomeria-boxes",
  "visual_mood": "precision-service",
  "composition": "route-card",
  "headline": "BOXES: aceite, cubiertas y consulta rápida",
  "subheadline": "Lubricentro y gomería en Ameghino 898: una landing pensada para mantenimiento, disponibilidad y contacto directo.",
  "primary_cta": "Consultar mantenimiento",
  "secondary_cta": "Ver dirección",
  "service_tags": [
    "Lubricentro",
    "Gomería",
    "Filtros y aceite",
    "Consulta en local"
  ],
  "proof_points": [
    "4.7 sobre 5 con 44 reseñas",
    "Lunes a sábado",
    "Ameghino 898, Tandil",
    "Reseñas sobre atención y precios"
  ],
  "resource_title": "Mantenimiento liviano con datos de contacto al frente",
  "resource_items": [
    "Servicio mixto: lubricentro y gomería.",
    "Horario partido registrado de lunes a sábado.",
    "Teléfono disponible para consultar antes de ir."
  ],
  "review_heading": "Señales de atención",
  "contact_heading": "Consultar antes de acercarse",
  "image_prompt": "Escena editorial realista para lubricentro y gomería en Tandil, aceite, filtros, cubiertas y herramientas ordenadas, sin texto ni logos inventados.",
  "design_notes": "Landing técnica tipo etiqueta de mantenimiento, con grilla precisa y CTA sobrio.",
  "creative": {
    "concept": "Ficha de mantenimiento: la landing debe sentirse como un tablero de servicio, clara y confiable.",
    "audience": "Conductores que buscan resolver cambio de aceite, filtros, cubiertas o una consulta de mantenimiento.",
    "visual_direction": "Industrial limpio, líneas de etiqueta, tarjetas tipo checklist y foto con tratamiento técnico.",
    "layout": "oil-bay",
    "texture": "oil-label",
    "hero_angle": "El sitio vende orden: rubro mixto, teléfono, horario y reseñas sin hacer promesas no verificadas.",
    "hero_cards": [
      {
        "label": "Rubro",
        "value": "Lubricentro + gomería",
        "note": "Servicio mixto"
      },
      {
        "label": "Rating",
        "value": "4.7",
        "note": "44 reseñas"
      },
      {
        "label": "Dirección",
        "value": "Ameghino 898",
        "note": "Tandil"
      }
    ],
    "sections": [
      {
        "type": "service-board",
        "eyebrow": "Mantenimiento",
        "title": "Una página para quien quiere resolver algo del auto, no leer un folleto.",
        "body": "La propuesta presenta el mix lubricentro/gomería como dato central y deja el contacto listo para confirmar disponibilidad.",
        "items": [
          {
            "label": "Aceite",
            "value": "Consulta por lubricación"
          },
          {
            "label": "Cubiertas",
            "value": "Gomería"
          },
          {
            "label": "Antes de ir",
            "value": "Llamar al 0249 443-7843"
          }
        ]
      },
      {
        "type": "process",
        "eyebrow": "Chequeo",
        "title": "Horario, rubro y teléfono: el mínimo útil bien presentado.",
        "body": "El bloque funciona como una orden de trabajo previa: qué se consulta, dónde queda y cuándo abre.",
        "items": [
          {
            "label": "1",
            "value": "Revisar horario partido"
          },
          {
            "label": "2",
            "value": "Consultar disponibilidad"
          },
          {
            "label": "3",
            "value": "Ir a Ameghino 898"
          }
        ],
        "callout": "No se inventan marcas ni stock: se vende claridad."
      },
      {
        "type": "quote-strip",
        "eyebrow": "Referencia",
        "title": "“Excelente atención, muy buenos precios.”",
        "body": "La reseña se usa como indicio de experiencia, no como garantía.",
        "items": [
          {
            "label": "Reseña",
            "value": "Atención recomendable"
          },
          {
            "label": "Reseña",
            "value": "Muy buena onda"
          }
        ]
      }
    ]
  }
}
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

The `creative` object is the main place where the page stops being a template. Use it to define a sellable landing from the verified signals.
