# Automotive Tandil Restart Design

## Alcance aprobado

Rehacer desde cero el proceso para 10 landings de negocios vehiculares en Tandil, Buenos Aires, Argentina. El objetivo es mejorar la variedad de rubros frente a la primera shortlist, que quedo concentrada en gomerias y talleres.

## Enfoque

Usar Google Places como fuente inicial autorizada y mantener las reglas del repositorio: no inventar datos, conservar evidencia por campo, descartar negocios con sitio propio informado por Places, exigir reseñas/fotos suficientes y no publicar automaticamente.

La seleccion debe priorizar diversidad por rubro. La busqueda cubre lavaderos, detailing, lubricentros, talleres, gomerias, chapa y pintura, polarizados, repuestos y estetica vehicular. Si Tandil no tiene suficientes candidatos aptos en algun rubro, el cupo se completa con los mejores negocios vehiculares disponibles y se reporta la limitacion.

## Flujo

1. Instalar dependencias.
2. Verificar `GOOGLE_PLACES_API_KEY` sin exponer el valor.
3. Ajustar el shortlist para elegir por segmentos antes que solo por score global.
4. Regenerar candidatos, shortlist, dataset final y specs.
5. Generar sitios finales con fotos reales descargadas desde Google Places.
6. Ejecutar validaciones y QA.
7. Preparar plan de deploy, sin publicar.

## Riesgos

- La disponibilidad real de lavaderos, detailing o lubricentros aptos puede ser menor que la deseada.
- Las fotos y reseñas de Google Places requieren respetar terminos y atribuciones vigentes antes de publicar.
- El deploy final queda fuera de este proceso salvo pedido explicito.
