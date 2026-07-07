# AI Creative Landing Generator Design

## Alcance aprobado

El generador debe seguir siendo reusable, pero las landings no pueden parecer una plantilla con datos cambiados. Cada sitio debe partir de los datos verificados del negocio y de una direccion creativa escrita por IA/agente para producir una pieza vendible.

Las capturas de referencia se toman solo como barra de calidad: buena jerarquia, composicion memorable, mobile cuidado, imagen como material principal y bloques comerciales con intencion. No se usan como base visual ni como inspiracion directa.

## Decision

Agregar una capa de `creative` dentro de `SiteSpec`. Esta capa describe:

- concepto comercial de la landing
- cliente objetivo
- direccion visual
- variante de layout
- tratamiento de textura/foto
- tarjetas del hero
- bloques comerciales composables

El renderer deja de imponer una pagina unica. Construye la landing desde bloques y clases de variante. El mismo sistema puede reutilizarse con otros negocios, pero cada negocio actual recibe una spec curada manualmente por la sesion de agente.

## Bloques

Los bloques iniciales son:

- `service-board`: servicios o consultas principales
- `process`: pasos para llamar, acercarse o resolver
- `quote-strip`: resena destacada o prueba social
- `quick-actions`: acciones directas y datos criticos
- `material-story`: relato breve del oficio, terminacion o experiencia
- `metric-grid`: rating, resenas, horario, direccion o senales de confianza

## Validacion

Mantener los validadores existentes y ampliarlos para revisar textos nuevos. Luego regenerar sitios, correr QA y hacer revision visual desktop/mobile de varias landings.

## Riesgos

- La creatividad no puede inventar servicios, stock, precios, garantias ni claims no verificados.
- Algunas fotos de Places pueden no tener calidad editorial; el layout debe poder trabajar con esa realidad.
- El sistema debe mejorar la expresividad sin romper deploy estatico simple.
