# Pipeline

## Fase 1: repo base

Estructura, schema, validadores, generador, arquetipos, agentes, skills y docs iniciales.

## Fase 2: dataset schema

`data/tandil-businesses.json` debe contener solo negocios reales. El archivo puede estar vacio mientras no haya datos verificados.

Validacion:

```bash
npm run validate:data
```

Este comando exige exactamente 10 negocios aprobados y rechaza mocks.

## Fase 3: investigacion e importacion

Fuentes permitidas:

- API oficial.
- Export del usuario.
- Busqueda autorizada.
- Carga manual asistida.
- URLs publicas verificables.

Importar un export JSON ya verificado:

```bash
npm run import:businesses -- --input verified-export.json
```

No se incluye scraping agresivo ni scraping que viole terminos de servicio.

### Busqueda automatica con Google Places

Configurar una API key en la shell:

```bash
$env:GOOGLE_PLACES_API_KEY="..."
```

Buscar candidatos vehiculares en Tandil:

```bash
npm run search:tandil
npm run validate:intake
```

El resultado se guarda en `data/intake/tandil-candidates.json`.

Esta salida no aprueba negocios para deploy. Marca `approved_for_generation: false`. Por configuracion local, las fotos de Google Places se cargan como `allowed` por defecto. Los candidatos con `websiteUri` informado por Google Places se descartan automaticamente.

Crear shortlist automatico:

```bash
npm run shortlist:tandil
```

El comando escribe:

- `data/intake/tandil-shortlist.json`
- `data/intake/tandil-shortlist.report.md`

Promover los 10 negocios al dataset final:

```bash
npm run promote:tandil
npm run validate:data
```

Componer direccion visual y preparar el trabajo del agente:

```bash
npm run agent:briefs
```

Luego Codex/Claude debe:

- disenar una landing real por negocio
- crear HTML/CSS propio o un framework exportado a estatico
- guardar el resultado dentro de `data/frontends/<run>/<slug>/`
- agregar `agent_frontend` en `data/site-specs/tandil-site-specs.json`

Validar:

```bash
npm run validate:specs
```

`npm run compose:local` queda como fallback mecanico. `npm run compose:ai` queda como opcion secundaria con billing de OpenAI API; no usa tokens de Codex Desktop.

El generador usa `data/site-specs/tandil-site-specs.json` para validar datos, ubicar el frontend de agente y copiar el artefacto final. El renderer interno solo queda como fallback de preview.

Variables opcionales:

```bash
$env:LOCAL_WEB_SEARCH_MIN_RATING="4.3"
$env:LOCAL_WEB_SEARCH_MIN_REVIEWS="10"
```

## Fase 4: frontend de agente

El agente tiene libertad para crear una UI destacable. Puede usar:

- HTML/CSS estatico dedicado por negocio.
- Frameworks o librerias cuando aporten calidad real.
- Builds/export estaticos como salida final.

Ejemplo para una landing escrita a mano:

```json
{
  "agent_frontend": {
    "mode": "static-files",
    "source_dir": "data/frontends/tandil-servicios-vehiculares/mecanica-maz",
    "notes": "Landing editorial de taller basada en reseñas de viaje."
  }
}
```

Ejemplo con framework:

```json
{
  "agent_frontend": {
    "mode": "framework-build",
    "source_dir": "data/frontends/chivilcoy-ropa/la-tienda",
    "output_dir": "data/frontends/chivilcoy-ropa/la-tienda/dist",
    "build_command": "npm run build",
    "libraries": ["vite", "gsap"],
    "notes": "Vidriera editorial con motion y composicion propia."
  }
}
```

El generador no ejecuta `build_command`. El agente debe correr el build y dejar listo `output_dir`.

## Fase 5: generacion

Probar con fixture mock:

```bash
npm run validate:mock
npm run generate:mock
```

Generar final:

```bash
npm run generate
```

Cada negocio aprobado crea una carpeta `generated/<slug>/` con `index.html`, `styles.css` y `site.json`.

`npm run generate` exige `GOOGLE_PLACES_API_KEY`, fotos reales y `agent_frontend`. Si queres revisar UI sin fotos reales o sin frontend final, usar:

```bash
npm run generate:preview
```

## Fase 6: QA

```bash
npm run qa
```

Controla cantidad de sitios, footer, texto prohibido, datos cruzados, frontends de agente y carpetas separadas. La revision visual con screenshots sigue siendo responsabilidad del agente antes de deploy.

## Fase 7: deploy

```bash
npm run deploy:plan
```

El comando escribe `generated/deploy-plan.json`. No publica nada. El deploy real debe ejecutarse explicitamente.

## Repetir con otra ciudad

1. Crear `data/<ciudad>-businesses.json`.
2. Cargar negocios con la misma estructura.
3. Ejecutar `tsx src/validators/validate-dataset.ts data/<ciudad>-businesses.json --strict-final`.
4. Ejecutar `tsx src/generator/generate-sites.ts data/<ciudad>-businesses.json --out generated/<ciudad>`.
5. Ejecutar `tsx src/validators/validate-generated-sites.ts generated/<ciudad>`.
