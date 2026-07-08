# Tandil Agent Briefs

Use these briefs from a Codex/Claude session to rewrite the configured site specs file.

- city: Tandil
- segment: rubros variados de alta conversion
- specs: data/site-specs/tandil-site-specs.json

Recommended flow:

```powershell
npm run agent:briefs:tandil
# Agent edits data/site-specs/tandil-site-specs.json
npm run validate:specs:tandil
npm run generate:preview
npm run generate
npm run qa
```

Remake flow for an existing weak batch:

```powershell
npm run agent:briefs -- --input <businesses.json> --specs <site-specs.json> --out <briefs-dir> --city "Tandil" --segment "rubros variados de alta conversion" --remake-from <generated-run-dir> --screenshots <screenshots-dir>
```

Each remake brief includes current HTML/CSS excerpts and screenshot paths when available. Replace the frontend instead of preserving a weak structure.

Businesses:

1. [Cerrajeria Zuzulich](./cerrajeria-zuzulich.md)
2. [Petrogas Glp](./petrogas-glp.md)
3. [Plomero Gasista Mauro Veron](./plomero-gasista-mauro-veron.md)
4. [Electricista Dario Gerez](./electricista-dario-gerez.md)
5. [Consultorio Veterinario Fernandez](./consultorio-veterinario-fernandez.md)
6. [María y Sol Peluquería](./maria-y-sol-peluqueria.md)
7. [BILOBA CENTRO DE ESTÉTICA](./biloba-centro-de-estetica.md)
8. [Biodent Odontologia Tandil - Dra Valeria Guzzanti](./biodent-odontologia-tandil-dra-valeria-guzzanti.md)
9. [OX Sports](./ox-sports.md)
10. [Estudio Bertucci Abogados](./estudio-bertucci-abogados.md)
