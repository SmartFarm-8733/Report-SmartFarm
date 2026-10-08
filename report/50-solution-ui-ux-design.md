# Capítulo V: Solution UI/UX Design

## 5.1. Style Guidelines

### 5.1.1. General Style Guidelines

**SmartFarm** es la startup y **ICHU**, su producto. La identidad combina fondos cálidos, verdes y acentos ocres; usa el logotipo completo en espacios amplios y el monograma en espacios compactos. La interfaz prioriza datos legibles y acciones claras para ganaderos y veterinarios.

| Aspecto | Regla para ICHU |
|---|---|
| Color | Fondo `#F6F5F0`, superficie `#FFFFFF`, texto `#27271F` / `#6F6E60`, borde `#E1DED4`; marca `#22362A`, acciones `#33513E`, apoyo `#3F5F4A`, acentos `#A5813A` y `#E4B842`. |
| Estados | Éxito `#4C7A57`, advertencia `#96742C`, alerta `#A4463C` e información `#66716D`; comunicar cada estado también con texto o icono. |
| Tipografía | **Outfit** (600–700) para títulos y **Plus Jakarta Sans** (400–700) para lectura y controles; monoespaciada solo para datos técnicos. |
| Jerarquía y ritmo | Títulos 28–32 px, subtítulos 20–24 px, lectura 16 px y controles 14 px. Espaciado en escala de 4 px: 4, 8, 12, 16, 24 y 32 px. |
| Componentes | Bordes discretos, etiquetas claras y estados visibles de foco, selección y error. Verde para acciones operativas y dorado para la acción principal del onboarding. |

El mockup HTML aún usa una base de 14 px; se alineará con estos tokens. El tono será serio, cercano, profesional, respetuoso y sereno. Errores y alertas indicarán la situación y el siguiente paso sin diagnósticos no sustentados. Se validarán contraste WCAG (4.5:1 en texto normal; 3:1 en texto grande), foco visible y objetivos táctiles de 44 × 44 px [8].

![Muestra de identidad visual y tokens de ICHU](assets/images/ichu-style-guidelines.svg)

*Figura 5.1.1. Paleta, jerarquía tipográfica y estados iniciales de ICHU. Elaboración propia a partir de los mockups de interfaz recibidos.*

### 5.1.2. Web, Mobile and IoT Style Guidelines

La identidad y el significado de los estados se mantienen entre pantallas; la composición y la interacción se adaptan al dispositivo.

| Experiencia | Guía visual y de interacción |
|---|---|
| **Web responsiva** | Navegación y paneles se reorganizan al reducirse el ancho (1080, 720 y 560 px en el mockup); en móvil, una columna y desplazamiento independiente para tablas. |
| **Aplicación móvil** | Priorizar tarea y acción, tarjetas de una columna y controles táctiles amplios. Los wireframes nativos se documentarán en 5.4; la web responsiva no los sustituye. |
| **IoT digital** | Mostrar lectura, unidad, hora y vigencia; distinguir estados en línea, sin señal, almacenado y sincronizado, junto con batería y conectividad. |
| **IoT físico** | Indicadores inequívocos y coherentes con la app. La función de luces, botones y sonidos se definirá con el diseño físico en 5.6. |

El mockup recibido evidencia la web y su adaptación, pero aún no las vistas nativas ni la interfaz física del collar y del controlador del abrevadero. Las capturas web y los diseños nativos se incorporarán en 5.3 y 5.4; el dispositivo se completará en 5.6.

> **Figura por añadir en 5.1.2:** una lámina comparativa con la web en escritorio y móvil, la app nativa y la interfaz física IoT (collar y controlador, según se defina en 5.6).

## 5.2. Information Architecture

ICHU organiza la información según las tareas de César, administrador ganadero, y Leonardo, veterinario (2.3), las historias de usuario (3.1) y las experiencias web y móvil definidas en 4.1.3.3. Se propone una estructura común con acceso por rol: gestión del hato para el administrador, consulta clínica de hatos autorizados para el veterinario y tareas de campo en móvil. Las decisiones siguientes orientan los wireframes; no representan funcionalidades ya implementadas.

### 5.2.1. Organization Systems

| Grupo de información | Organización y sustento |
|---|---|
| Landing Page | Jerarquía de propuesta, beneficios, tecnología y contacto; contenido por audiencia: ganaderos y veterinarios. La explicación de uso es secuencial: conocer ICHU, entender su funcionamiento y solicitar una demo. |
| Hato y animales | Jerarquía hato → lote → animal → ficha. La ficha reúne identidad, historial, reproducción y monitoreo; potreros y nutrición se consultan desde el lote. Evita repetir datos entre módulos. |
| Monitoreo y atención | Por tópicos: lecturas, ubicación, alertas y registros de campo o clínicos. Alertas ordenadas por prioridad y fecha; historial y lecturas por fecha de captura, no de sincronización. |
| Calendario y reportes | Campañas y seguimientos en orden cronológico. Comparación matricial de animales, lotes e indicadores en escritorio; tarjetas y filtros equivalentes en móvil. |
| Dispositivos y cuenta | Inventario de collares y abrevaderos separado de las fichas animales. Perfil, asesorías y plan en un área secundaria; visibilidad según permisos. |

Los nombres de hatos, lotes y potreros se ordenan alfabéticamente; los animales se identifican por arete. Registro, vinculación de collar e intervención usan pasos breves: seleccionar, completar y confirmar. El veterinario selecciona primero un hato autorizado; el administrador trabaja sobre su unidad y el operario sobre las tareas habilitadas.

El [landing de referencia](https://github.com/SmartFarm-8733/LandingPageSmartFarm) contiene Inicio, Quiénes somos, Ganaderos, Veterinarios, Tecnología y Contacto, además de las páginas Cómo funciona y Web y Media. La propuesta incorpora Planes y Términos (US35–US36) y accesos diferenciados a la aplicación (US33), sin confundir el arete de identificación con el collar IoT.

### 5.2.2. Labeling Systems

Las etiquetas nombran destinos y acciones, no componentes técnicos. Se mantienen entre encabezados, menús y botones, con iconos como apoyo y no como sustituto del texto.

| Etiqueta | Contenido o destino asociado |
|---|---|
| Inicio / Quiénes somos | Propuesta de ICHU / propósito y equipo SmartFarm. |
| Para ganaderos / Para veterinarios | Beneficios y acceso correspondiente a cada segmento. |
| Tecnología / Cómo funciona / Videos | Dispositivos y conectividad / pasos de uso / contenido audiovisual; Videos reemplaza la etiqueta ambigua Web y Media. |
| Planes / Contacto / Términos | Comparación de cobertura y límites / solicitud de demo / condiciones y tratamiento de datos. |
| Mi hato / Hatos autorizados | Resumen de la unidad propia / selector de unidades con acceso profesional vigente. |
| Animales / Ficha del animal | Inventario / identidad, lote, etapa, collar e historial del animal seleccionado. |
| Monitoreo / Alertas | Lecturas y última ubicación conocida / señales que requieren revisión y su estado de atención. |
| Historial / Reproducción / Nutrición | Registros e intervenciones / eventos reproductivos del animal / plan nutricional del lote. |
| Calendario / Reportes | Campañas, recordatorios y seguimientos / indicadores y exportación por periodo. |
| Dispositivos | Collares y abrevaderos, asignación, batería y última comunicación. |
| Perfil / Asesorías / Mi plan | Datos de cuenta y profesionales / solicitudes y permisos de acceso / suscripción, cobertura y límites. |

Las acciones usan verbo y objeto: **Registrar animal**, **Vincular collar**, **Atender alerta**, **Registrar intervención** y **Exportar reporte**. Arete identifica al animal; collar identifica el equipo de telemetría. Una lectura muestra unidad y hora; Sin datos no equivale a Normal, ni Sin conexión a Sin alertas.

Las etiquetas se localizan de forma consistente en `en_US` y `es_419`, incluido el contenido de ayuda, errores, fechas y números (US37). El idioma inicial definido por la historia es `en_US`, con preferencia persistente; los ejemplos de esta sección usan `es_419`.

### 5.2.3. SEO Tags and Meta Tags

### 5.2.4. Searching Systems

### 5.2.5. Navigation Systems

## 5.3. Landing Page UI Design

### 5.3.1. Landing Page Wireframe

### 5.3.2. Landing Page Mock-up

## 5.4. Applications UX/UI Design

### 5.4.1. Applications Wireframes

### 5.4.2. Applications Wireflow Diagrams

### 5.4.3. Applications Mock-ups

### 5.4.4. Applications User Flow Diagrams

## 5.5. Applications Prototyping

## 5.6. IoT Device Design
