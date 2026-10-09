# Capítulo VI: Product Implementation, Validation & Deployment

Este capítulo registra la configuración y las evidencias de implementación del producto. En este avance se documentan el entorno, la gestión del código, las convenciones disponibles y la línea base planificada para el Sprint 1. Las actividades de ejecución, pruebas y despliegue se informarán cuando se cuente con evidencia verificable.

## 6.1. Software Configuration Management

### 6.1.1. Software Development Environment Configuration

La Landing Page de ICHU se desarrolla como un sitio estático con **HTML, CSS y JavaScript**, sin framework ni proceso de compilación. El código está organizado en páginas HTML, una hoja de estilos compartida (`css/styles.css`) y dos módulos JavaScript: `js/i18n.js`, para idioma, y `js/main.js`, para navegación e interacciones. Los recursos gráficos y de video se mantienen en carpetas propias.

Para una revisión local, el README del repositorio permite abrir `index.html` directamente en un navegador o iniciar un servidor estático con `npx serve .` o `python -m http.server 8080`. El proyecto también declara una comprobación con jsdom para identificar IDs duplicados, recursos faltantes, anclas rotas y estilos inline. La existencia de esa práctica en el README no constituye por sí sola evidencia de que se haya ejecutado para esta revisión.

| Elemento | Configuración documentada |
|---|---|
| Lenguajes | HTML, CSS y JavaScript |
| Framework o build | No se usan framework ni proceso de compilación |
| Ejecución de la Landing Page | Navegador web; opcionalmente, servidor estático local |
| Organización del código | Páginas HTML, `css/styles.css`, `js/i18n.js` y `js/main.js` |
| Validación mencionada por el proyecto | Script con jsdom descrito en el README; falta adjuntar su resultado de ejecución para el Sprint Review |

Fuente: [repositorio LandingPageSmartFarm](https://github.com/SmartFarm-8733/LandingPageSmartFarm) y su README.

### 6.1.2. Source Code Management

El código de la Landing Page y el informe se mantienen en repositorios Git separados: [LandingPageSmartFarm](https://github.com/SmartFarm-8733/LandingPageSmartFarm) y [Report-SmartFarm](https://github.com/SmartFarm-8733/Report-SmartFarm). Esta separación permite revisar la evolución del producto web y la documentación de manera independiente.

Para el repositorio del informe, la guía de contribución define `main` para entregas publicadas, `develop` para integración y ramas `feature/<alcance>` o `fix/<alcance>` para cambios de trabajo. Las contribuciones se integran mediante Pull Request con revisión de otro integrante, y los commits siguen Conventional Commits. El capítulo se está trabajando localmente en la rama `feature/chapterVI`; aún no se ha publicado ni integrado.

| Práctica | Convención del repositorio del informe |
|---|---|
| Ramas de trabajo | `feature/<alcance>` o `fix/<alcance>`, creadas desde `develop` |
| Integración | Pull Request hacia la rama correspondiente y revisión por otro integrante |
| Mensajes de commit | Conventional Commits, en minúsculas, con alcance opcional |
| Rama de entrega | `main` |

Fuente: [guía de contribución](../CONTRIBUTING.md). La convención anterior describe el repositorio del informe; cualquier diferencia en el flujo del repositorio de la Landing Page debe confirmarse con su configuración y responsables.

### 6.1.3. Source Code Style Guide & Conventions

Las convenciones identificables en la documentación del proyecto son:

- Mantener la estructura semántica de cada página en HTML y centralizar los estilos compartidos en `css/styles.css`.
- Mantener separadas las traducciones (`js/i18n.js`) y las interacciones de interfaz (`js/main.js`).
- Definir la paleta mediante variables CSS y reutilizar esos tokens para los temas claro y oscuro.
- Incluir nombres accesibles, etiquetas ARIA y alternativas textuales donde correspondan; el README señala navegación por teclado y soporte para movimiento reducido.
- Mantener imágenes optimizadas en WebP, declarar sus dimensiones y usar carga diferida cuando corresponda.

Estas convenciones resumen la guía del repositorio de la Landing Page. No se afirma que se haya ejecutado una auditoría automatizada de accesibilidad o estilo para este informe.

### 6.1.4. Software Deployment Configuration

La Landing Page se publicó como sitio estático en un preview administrado desde FPM Desk. Según la información proporcionada por el equipo, el servidor es privado, pertenece a FPM y fue creado por Flor de María Contreras. La consola muestra el proyecto `LandingPageSmartFarm`, el repositorio de GitHub conectado, la rama `main`, la receta `Static HTML` y el estado del preview como **Público**. El flujo separa el preview de Producción, que aparece como una etapa opcional; por ello, esta evidencia acredita un preview publicado, no una promoción a producción.

URL completa del preview: https://smartfarm-ichu-preview.fpm.it.com/

La consola registra seis ejecuciones de despliegue. En la captura, la más reciente figura como lista, construida desde el commit `23c4793` de `main` el 9 de septiembre de 2026, con la receta `Static HTML` y una duración de cuatro segundos. La URL respondió con HTTP 200 durante la verificación de este informe el 8 de octubre de 2026.

![Panel FPM Desk con la lista de proyectos y el proyecto LandingPageSmartFarm](assets/images/deployment/fpm-projects.png)

*Figura 6.5. Lista de proyectos en FPM Desk; se identifica LandingPageSmartFarm con un preview disponible.*

![Configuración del preview en FPM Desk](assets/images/deployment/fpm-preview-configuration.png)

*Figura 6.6. Detalle del preview: repositorio GitHub conectado, rama `main`, receta Static HTML, URL completa visible y estado público. El panel indica Producción como una etapa opcional.*

![Historial de ejecuciones de despliegue en FPM Desk](assets/images/deployment/fpm-deployment-history.png)

*Figura 6.7. Historial de seis ejecuciones, con la más reciente en estado «Listo».*

![Landing Page de ICHU abierta desde la URL publicada](assets/images/deployment/published-preview.png)

*Figura 6.8. Portada en español cargada desde el preview público; la barra del navegador muestra smartfarm-ichu-preview.fpm.it.com.*

## 6.2. Landing Page, Services & Applications Implementation

### 6.2.1. Sprint 1

El Capítulo III asigna trece historias al Sprint 1, con un total estimado de 47 puntos. Este capítulo usa esa asignación como **línea base del backlog planificado**; no la presenta como trabajo ya terminado ni como velocidad validada del equipo. El alcance asignado es una Landing Page bilingüe y accesible, junto con las funciones iniciales de acceso a la plataforma y gestión de la ficha del animal.

#### 6.2.1.1. Sprint Planning 1

**Objetivo de producto planificado:** comunicar la propuesta de ICHU a los dos segmentos, permitir que los visitantes comprendan los planes y soliciten una demostración, y cubrir el primer flujo de acceso y registro/consulta de animales planteado para la plataforma.

El alcance proviene del roadmap y la priorización registrados en el Capítulo III. Incluye la Landing Page con internacionalización y accesibilidad, el registro de unidad productiva, el acceso, el perfil profesional y la ficha del animal. La estimación inicial suma 47 puntos de historia; el propio roadmap indica que el equipo debe contrastar la velocidad real al cierre del Sprint 1 antes de ajustar los siguientes sprints.

La fuente consultada no fija aquí las fechas, duración, capacidad comprometida ni el resultado de la reunión de planificación. Estos datos deben añadirse desde el Sprint Backlog vigente en Jira antes de presentar la planificación como acuerdo final del equipo.

#### 6.2.1.2. Aspect Leaders and Collaborators

Los responsables y colaboradores por aspecto se completarán con las asignaciones vigentes del equipo en Jira. No se infieren a partir de la autoría de commits ni de la lista general de integrantes.

#### 6.2.1.3. Sprint Backlog 1

La tabla conserva el orden y la estimación de la priorización de historias del Capítulo III. La columna «Sprint» corresponde a la planificación documentada, no al estado actual de implementación.

| Prioridad | Historia | Resultado esperado | Puntos | Sprint asignado |
|---:|---|---|---:|---|
| 1 | US-32 — Conocer la propuesta de ICHU | Presentar el problema, la solución IoT, los beneficios por segmento y los productos digitales. | 3 | Sprint 1 |
| 2 | US-33 — Acceder al destino correspondiente a mi segmento | Dirigir al visitante al producto digital o canal correspondiente. | 2 | Sprint 1 |
| 3 | US-35 — Comparar los planes y estimar el costo | Presentar planes, límites de dispositivos y estimación según el tamaño del hato. | 5 | Sprint 1 |
| 4 | US-34 — Solicitar una demostración | Registrar la solicitud con el segmento y contexto productivo del visitante. | 3 | Sprint 1 |
| 5 | US-36 — Consultar los términos y condiciones del servicio | Exponer condiciones de uso y tratamiento de datos. | 2 | Sprint 1 |
| 6 | US-06 — Registrar un animal en el hato | Incorporar identificación y datos productivos del animal. | 5 | Sprint 1 |
| 26 | US-07 — Consultar la ficha de un animal | Mostrar identificación, etapa productiva, collar asignado y última lectura. | 3 | Sprint 1 |
| 27 | US-01 — Registrar una cuenta de unidad productiva | Crear la cuenta con ubicación y escala de la unidad. | 3 | Sprint 1 |
| 28 | US-02 — Acceder a la plataforma | Iniciar sesión según rol y alcance de las unidades productivas. | 3 | Sprint 1 |
| 29 | US-04 — Autorizar a un médico veterinario sobre el hato | Conceder acceso temporal y acotado a la unidad productiva. | 5 | Sprint 1 |
| 51 | US-37 — Consultar la experiencia en mi idioma | Presentar la experiencia en inglés o español y conservar la preferencia. | 5 | Sprint 1 |
| 52 | US-38 — Acceder a la experiencia con tecnología de asistencia | Proveer nombres y funciones accesibles, alternativas textuales y recorrido por teclado. | 5 | Sprint 1 |
| 63 | US-03 — Completar el perfil profesional | Registrar especialidad, colegiatura y experiencia del médico veterinario. | 3 | Sprint 1 |
|  | **Total planificado** |  | **47** |  |

Fuente: [Product Backlog y roadmap, Capítulo III](30-requirements-specification.md).

#### 6.2.1.4. Development Evidence for Sprint Review

Las capturas siguientes documentan la presentación de la Landing Page en español e inglés, el tema oscuro y una vista móvil simulada. La tercera captura muestra una sección de contenido para ganaderos con una ficha visual de ejemplo; esta ficha forma parte de la presentación de la propuesta y no demuestra que exista una aplicación funcional de gestión del hato.

![Portada de ICHU en español en navegador de escritorio](assets/images/implementation/landing-page-es-desktop.png)

*Figura 6.1. Portada de la Landing Page en español vista en escritorio. Captura de navegador proporcionada por el equipo.*

![Sección de presentación de ICHU en inglés en navegador de escritorio](assets/images/implementation/landing-page-en-desktop.png)

*Figura 6.2. Sección «What is ICHU?» en inglés, abierta desde un archivo local en el navegador. Captura de navegador proporcionada por el equipo.*

![Sección para ganaderos con tema oscuro](assets/images/implementation/landing-page-en-dark-theme.png)

*Figura 6.3. Vista en inglés con tema oscuro y contenido dirigido a ganaderos. La ficha del animal en la imagen es un recurso ilustrativo de la Landing Page, no evidencia de una función conectada a datos.*

![Portada de ICHU adaptada a una vista móvil](assets/images/implementation/landing-page-en-mobile.png)

*Figura 6.4. Portada en inglés en la emulación de un viewport móvil de 360 × 800 píxeles. La captura muestra una vista emulada en navegador, no una prueba en un dispositivo físico.*

#### 6.2.1.5. Testing Suite Evidence for Sprint Review

#### 6.2.1.6. Execution Evidence for Sprint Review

Las Figuras 6.2 y 6.4 muestran la página cargada localmente en un navegador; la Figura 6.2 deja visible la ruta local del archivo y la Figura 6.4 indica la emulación del viewport móvil. La Figura 6.8 muestra la portada abierta desde el preview público. La URL respondió con HTTP 200 durante la verificación del 8 de octubre de 2026. Estas evidencias acreditan renderizado local y disponibilidad del preview en esa fecha; no demuestran una prueba en teléfono físico ni el funcionamiento de los controles de idioma, tema o formulario, que requieren resultados de prueba propios.

#### 6.2.1.7. Services Documentation Evidence for Sprint Review

#### 6.2.1.8. Software Deployment Evidence for Sprint Review

#### 6.2.1.9. Team Collaboration Insights during Sprint
