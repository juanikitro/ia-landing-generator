# Site Brief 6: Iturralde - Repuestos

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

- id: `google-ChIJn0YZfYcfkZURojKDl1MpvRE`
- slug: `iturralde-repuestos`
- name: Iturralde - Repuestos
- category: Auto Parts Store
- inferred profile: Repuestos para autos
- requested segment: servicios vehiculares
- city: Tandil
- address: 9 de Julio 1556, B7000 Tandil, Provincia de Buenos Aires, Argentina
- phone: 0249 401-7903
- hours summary: Lunes a Sabado; Domingo cerrado
- rating: 4.6 / 5 (295 reseñas)
- service baseline: repuestos autos

## Useful Real Signals

### Reviews

1. "Recibí una excelente atención del empleado que me toco" — Lorena Blanco (5/5)
2. "Buena atención y precio!" — Guillermo Zubigaray (5/5)
3. "Excelentes muy linda atención" — Beatriz Ruarte (5/5)

### Photos

1. other | allowed | https://places.googleapis.com/v1/places/ChIJn0YZfYcfkZURojKDl1MpvRE/photos/AaVGc3lZ4kWJZTxKwI3KYGFAdYRBGC4i_ZzmZYQ6UDwMWnV11xCvenPRGOXYM0rD8iBTfdX8KdK0fpiq3l_1G8-LgJcD1euxR1Mv1sNC5y9-5dlBbr-KBBeNqV_vQL_6vL13IUwRlfYddqcgh7FCpzmMPIcDWSTvW06syVF1u82ldrsrrxTlHrVqGMwmp6vn3nhij0p8GnVwk-ynbbyPnr1vfoHgKwMCHOrsGILAy2Vz_ZDQmOHUqNRcitnshD6QtPzETpGBlWshs-glljoTB6eBccGGoBuGKI5XtNV6JdfxkJQKzwcFOgN2iI-UwT84g75oJzoOqhoyrVPxuzwqj2qUyFyQOlV7Pcd5ZDYh2gQ9VlpCjONnH8JKG7qrcO4qk1REQEeDMkZ4X1bzmjOBFLXMtMg_V1TOEVPJr9hMXmZuBZR5Y6DU/media?maxWidthPx=1600
2. other | allowed | https://places.googleapis.com/v1/places/ChIJn0YZfYcfkZURojKDl1MpvRE/photos/AaVGc3l7G7J5IVxQa494K4r7Mph7eSt635qIvl_x2t6AzmoE7MApStfziF8brvoKLdBFR0YkAJkJaN2q_L-wC2aPm9MHWuUhw_gZyPceSnT7pg0PQSVjpk0EeFVwMjgdAJgeZJwyvxAfMRqzw9jufnkdyBckVoTLoymR_lOHvX7eOMDK9UpHOgpstlxH0iJ5n-MDmqrpIfPAIJcb1m525fRo_p1vNv8w60SO5jgH_J31Hxu0wuudSQwLFI82qyNRCA-RSi6IA5SPeqLiVMlNNqgQHJk7QXn32Q3UN5TR-1Gf8SGvJFhiDujLlyPpZ1K9inRewUPdi44rn_Ci-QcJfy6msDyWhOu05KWU4Vacmw1IezEXL4mhmbsSeAn1jy0ruWKSBs8cKYOhrqJt7C5XN0Fu1dAmiqiyLWV3125rLkxF7I3Oug/media?maxWidthPx=1600
3. other | allowed | https://places.googleapis.com/v1/places/ChIJn0YZfYcfkZURojKDl1MpvRE/photos/AaVGc3mpJUg9WhMYeC_Uaz-wNtSFqE6AouE0PI5Ww6RM8BK851eyWAdIduzJ62igz0Yyc_Vic5aveEL3U3jMjWZZgwt0M9Ysq3o1Vi2_ad667Er0BgsMsCug8xbCrrur9SmSdGmJyNqVSeYNbkO2DDJTD6tugRHAnsQ2bpR0MxgQs7OgyvaxZwF1m-wyo4nzpMCCywgpPQ7CZN3ZWrhReaGm1lwJEMVkrCspvIgiZrquE--mcjq-UtYiTxzH2S6iu5JKrQjj7BTLXf5UcHsfqcuQajd-dgBiDYnrby_-_ngbkRUnVW8oP8izk00fj7C1xEUlBW_5MBFFuQbz7q7w8v3QNxI4FVpeGXE3NI2bA_e3OFOi7AVKSSztYKnsk5a0pCknCOxrOWDJO5dho2NqqV2h8G8aEUC3DyCMfsFlNtYATt8/media?maxWidthPx=1600

### Sources

- https://maps.google.com/?cid=1278223308244071074&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA
- https://www.google.com/maps/contrib/115410606694359915259/reviews
- https://www.google.com/maps/contrib/105454300057162681743/reviews
- https://www.google.com/maps/contrib/114354342686868698368/reviews

## Recommended Design Direction

- Use automotive/local-service cues: route, workshop, tires, urgency, practical contact, opening hours, location.
- Prefer concrete microcopy based on the signals above.
- Vary `visual_mood` and `composition` across the 10 sites.
- Avoid repeating the same hero rhythm, proof order, and CTA wording from nearby briefs.

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
