# Contribuir al informe SmartFarm

## Ramas

- `main`: entregas publicadas.
- `develop`: integración de cambios aprobados.
- `feature/<alcance>`: nuevas secciones o artefactos; se crean desde `develop`.
- `fix/<alcance>`: correcciones; se crean desde `develop`.
- `hotfix/<alcance>`: correcciones urgentes de una entrega publicada; se crean desde `main` y se integran también en `develop`.

Mantén las ramas de trabajo enfocadas y de corta duración. Abre un Pull Request hacia la rama correspondiente, solicita revisión de otro integrante y elimina la rama al completar la integración. No hagas push directo a `main` o `develop`.

## Commits

Usa Conventional Commits en minúsculas y con un alcance opcional:

```text
docs: reorganize report sources
docs(chapter-iv): update architecture diagrams
fix: repair relative asset links
chore: update repository metadata
```

Tipos habituales: `feat`, `fix`, `docs`, `refactor`, `test`, `build`, `ci` y `chore`. Describe en presente y de forma concreta el cambio. Indica los cambios incompatibles con `!` o con un pie `BREAKING CHANGE:`.

## Cambios en el informe

- Conserva capítulos y secciones en archivos Markdown separados dentro de `report/`.
- Usa prefijos numéricos y `kebab-case` para mantener el orden de lectura.
- Guarda imágenes exportadas en `report/assets/images/` y las fuentes de diagramas en `report/assets/diagram-sources/`.
- Actualiza los enlaces relativos cuando muevas o renombres archivos.
- Incluye en el Pull Request el propósito del cambio y las comprobaciones realizadas.
