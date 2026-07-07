# Agent Workflow

Este repositorio esta pensado para que una sesion de Codex o Claude haga el trabajo creativo usando sus propios tokens/contexto. Los comandos npm existen para preparar contexto, validar y copiar artefactos, no para reemplazar al agente.

La prioridad actual es calidad visual, no costo ni velocidad. El camino final esperado es que el agente escriba el frontend real de cada landing. El renderer interno queda como fallback de preview.

## Flujo principal

```powershell
npm run validate:data
npm run agent:briefs:tandil
```

El comando escribe briefs en:

```text
data/agent-briefs/tandil/
```

Luego el agente debe leer:

- `data/tandil-businesses.json`
- `data/agent-briefs/tandil/README.md`
- los briefs individuales relevantes
- `data/site-specs/tandil-site-specs.json` si ya existe

Y escribir:

```text
data/site-specs/tandil-site-specs.json
```

Ademas debe crear el frontend de cada negocio en una carpeta del repo, por ejemplo:

```text
data/frontends/tandil-servicios-vehiculares/<slug>/index.html
data/frontends/tandil-servicios-vehiculares/<slug>/styles.css
```

Si una landing necesita framework o librerias, el agente puede usarlos. En ese caso debe ejecutar el build/export y apuntar `agent_frontend.output_dir` al resultado estatico.

Despues:

```powershell
npm run validate:specs:tandil
npm run generate:preview
npm run generate
npm run qa
```

Para ciudades/rubros nuevos, usar paths parametrizados en vez de los archivos de Tandil. Ver `docs/PROMPT_TO_AGENT.md`.

## Responsabilidad del agente

El agente debe producir una landing real por negocio:

- copy natural en espanol argentino
- direcciones visuales diferentes entre negocios
- recursos alineados al rubro
- proof points basados en datos reales
- CTAs concretos
- HTML/CSS propio o framework cuando aporte calidad
- composicion, tipografia, ritmo visual y assets pensados para ese negocio
- `agent_frontend` configurado para que el final no use el fallback
- sin claims inventados
- sin texto meta sobre IA

## Frontends de agente

`agent_frontend` acepta dos modos:

```json
{
  "mode": "static-files",
  "source_dir": "data/frontends/tandil-servicios-vehiculares/mecanica-maz",
  "notes": "Landing editorial de taller con bitacora de ruta y CTA directo."
}
```

```json
{
  "mode": "framework-build",
  "source_dir": "data/frontends/chivilcoy-ropa/la-tienda",
  "output_dir": "data/frontends/chivilcoy-ropa/la-tienda/dist",
  "build_command": "npm run build",
  "libraries": ["vite", "gsap"],
  "notes": "Vidriera editorial con transiciones suaves y grilla de temporada."
}
```

El generador no ejecuta `build_command`; solo copia `source_dir` u `output_dir`. El agente debe correr el build cuando use framework.

## Uso de compose

`npm run compose:local` existe como fallback mecanico para arrancar el archivo de specs.

`npm run compose:ai` existe como opcion secundaria, pero usa `OPENAI_API_KEY` y billing de OpenAI API. No usa los tokens de Codex Desktop. Para usar tokens/contexto de la sesion, el camino correcto es que Codex/Claude edite `data/site-specs/tandil-site-specs.json` directamente.

## Build final

`npm run generate` exige fotos reales, `agent_frontend` y requiere `GOOGLE_PLACES_API_KEY`. Para iteracion visual con fallback usar:

```powershell
npm run generate:preview
```
