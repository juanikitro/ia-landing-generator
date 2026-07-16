# AGENTS.md

Reglas para sesiones de Codex en este repositorio. Complementan `~/.codex/AGENTS.md` y los docs de `docs/`.

## Rol de Codex según cómo corra la sesión

El motor de diseño es la skill **IMPECCABLE** (register `brand`). Quién hace el diseño depende de quién orquesta la sesión:

**Caso A — Claude orquesta la sesión (lo habitual).** El diseño lo hace Claude en la etapa `design-director` (`agents/design-director.md`) y llega a Codex como un `design_brief` firmado `designed_by: "claude-code"`. Acá Codex **no** corre los comandos de diseño de IMPECCABLE; **ejecuta el brief al pie de la letra**:

- No reinterpretar ni "mejorar" la dirección de arte, el par tipográfico, la paleta ni la estructura de secciones definidas en el brief.
- No cambiar el copy: los textos vienen escritos con datos verificados; cualquier hueco se devuelve como pregunta, no se rellena inventando.
- No escribir ni editar el `design_brief` ni marcar `designed_by`: ese campo lo puso Claude. Codex implementa a partir de él.
- Sí aportar calidad de implementación: CSS prolijo con variables, responsive impecable, motion con `prefers-reduced-motion`, accesibilidad, performance.

**Caso B — la sesión corre directamente en Codex (sin Claude orquestando).** No hay que bloquearse esperando a Claude: Codex **hace el diseño él mismo con IMPECCABLE** (setup `node .agents/skills/impeccable/scripts/context.mjs`, luego `shape`/`critique`, register `brand`, ver `reference/brand.md`), escribe el `design_brief` completo y lo firma `designed_by: "codex"`, y recién después implementa el frontend. Mismo contrato de salida y mismos gates que en el Caso A.

En ambos casos rigen las reglas de datos (`docs/DATA_RULES.md`) y la barra de `docs/DESIGN_STANDARDS.md`.

El gate `npm run qa:design` y el flag `npm run generate ... --require-design-brief` bloquean la generación si falta el `design_brief` firmado (`designed_by` = `"claude-code"` o `"codex"`). En el Caso A, Codex no debe sortear ese gate marcando `designed_by` por su cuenta.

## Barra de calidad

`docs/DESIGN_STANDARDS.md` define los golden samples vigentes (corrida `amba-alta-conversion`, 3 landings). Antes de implementar, mirar sus fuentes en `data/frontends/amba-alta-conversion/` y sus capturas en `output/screenshots/golden-samples/amba-alta-conversion/`. El nivel de densidad, pulido y ritmo mobile de esas 3 páginas es el mínimo aceptable.

## Contrato duro por landing (lo valida `npm run qa`)

- Footer con el texto exacto `Creado por Mayofy`, enlazado a `https://www.instagram.com/mayofy.web/` (el gate `qa` exige ambos: el texto y el link a Instagram).
- Prohibido en texto visible: `IA`, `AI`, cualquier forma de `generad(o/a/os/as)`, "hecho/creado con ia", nombres de otros negocios de la tanda.
- Al menos un `<img>` con `src` local existente; nunca referenciar archivos locales que no existan (ni en CSS).
- Datos exactos del dataset: teléfono, horarios, dirección, rating y cantidad de reseñas. Reseñas citadas literales con autor.
- `lang="es-AR"`, viewport, `<title>` y meta description.
- Estático: HTML/CSS + `script.js` vanilla liviano. Sin CDNs de JS. Única dependencia externa: Google Fonts. Si el brief pide framework, correr el build y apuntar `agent_frontend.output_dir` al export estático.

## Salida y validación

```text
data/frontends/<run>/<slug>/index.html + styles.css (+ script.js)
```

Después de implementar: `npm run validate:specs` (parametrizado a la corrida), `npm run generate`, `npm run qa -- --expected-count <N>`, `npm run qa:client` y `npm run qa:impeccable -- generated/<run>` (detector anti-slop de IMPECCABLE; falla ante side-tab, dark-glow, gradiente violeta, etc.). Reportar qué se validó y qué no.
