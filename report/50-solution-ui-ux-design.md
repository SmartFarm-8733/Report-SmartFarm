# Capítulo V: Solution UI/UX Design

## 5.1. Style Guidelines

Esta guía establece una base visual y de interacción común para ICHU, el producto de SmartFarm. Se consideran los dos perfiles descritos en el Capítulo II: el administrador ganadero, que necesita consultar y registrar información durante la operación del hato, y el médico veterinario, que alterna entre el trabajo de campo y la revisión de información clínica. Por ello, la interfaz prioriza la lectura rápida de datos, las acciones reconocibles y la identificación explícita de alertas y estados.

Los mockups HTML recibidos se utilizan como referencia para documentar la paleta, la tipografía y los componentes existentes. Las decisiones de esta guía se aplicarán progresivamente en la Landing Page, las aplicaciones y las interfaces IoT de las secciones 5.3 a 5.6. La guía no presenta como verificadas las propiedades de accesibilidad del mockup: estas deberán comprobarse al refinar cada pantalla.

### 5.1.1. General Style Guidelines

#### Marca y principios visuales

SmartFarm identifica al equipo y a la startup; **ICHU** es el nombre del producto que aparece en la interfaz. Se utilizará el logotipo completo cuando haya espacio y el monograma en encabezados compactos, sin deformarlos ni alterar sus colores. La dirección visual toma referencias de tonos de suelo y vegetación: fondo cálido, superficies claras, verde bosque y acentos ocres. La composición usa jerarquía tipográfica, bordes discretos y espacios amplios para distinguir navegación, contenido y acciones sin competir con los datos del hato.

El estilo operativo utiliza tarjetas y controles de esquinas discretas, bordes finos y sombras suaves. El ocre resalta detalles y estados de atención; el verde identifica las acciones principales de las vistas de operación. En el flujo de registro y contratación, el mockup actual emplea un botón principal dorado. Esa variante se conserva para el onboarding y debe mantener la misma jerarquía de acción y legibilidad que los botones verdes de la aplicación.

#### Paleta de color

La siguiente tabla registra los tokens del mockup HTML y el uso previsto en la interfaz:

| Token | Color | Uso |
|---|---|---|
| Fondo cálido | `#F6F5F0` | Fondo general de las pantallas. |
| Superficie | `#FFFFFF` | Formularios, tarjetas y paneles de lectura. |
| Texto principal | `#27271F` | Títulos, datos y contenido de prioridad. |
| Texto secundario | `#6F6E60` | Ayudas, contexto y etiquetas secundarias. |
| Verde bosque | `#22362A` | Bloques de marca y fondos destacados. |
| Verde principal | `#33513E` | Acciones de operación, navegación activa y controles principales. |
| Verde secundario | `#3F5F4A` | Gráficos y elementos complementarios. |
| Ocre | `#A5813A` | Acentos, marcadores y atención no crítica. |
| Dorado | `#E4B842` | Acción principal del flujo de registro y contratación. |
| Borde | `#E1DED4` | Separación de superficies y tablas. |

Los estados se expresan con color, texto e icono o forma, no solo con color: éxito `#4C7A57`, advertencia `#96742C`, alerta `#A4463C` e información `#66716D`. Las combinaciones de texto, fondo y controles se revisarán con los criterios de contraste y percepción de color de WCAG 2.2 [8].

#### Tipografía, espaciado y componentes

| Elemento | Regla de estilo |
|---|---|
| Títulos | **Outfit**, pesos 600–700; mantener una jerarquía consistente entre página, sección y tarjeta. |
| Texto y controles | **Plus Jakarta Sans**, pesos 400–700; usar 400–500 para lectura y 600–700 para acciones o énfasis. |
| Datos técnicos | Fuente monoespaciada solo para lecturas crudas, identificadores y valores estructurados. |
| Tamaños | Como guía: títulos de página 28–32 px, subtítulos 20–24 px, texto de lectura 16 px, controles y ayudas 14 px y metadatos no esenciales desde 12 px. |
| Espaciado | Escala base de 4 px: 4, 8, 12, 16, 24 y 32 px. Reservar los intervalos mayores para separar grupos y secciones. |
| Controles | Borde visible, etiqueta comprensible y estados diferenciados para reposo, selección, error y foco. Las tarjetas y controles operativos usan radios discretos; las formas circulares se reservan para avatares y estados que lo requieran. |

El HTML de referencia declara una base de 14 px y utiliza algunas etiquetas menores, además de dos tratamientos de esquinas para las pantallas de acceso. Por tanto, las medidas de la tabla son la regla que se aplicará al consolidar la guía; el mockup deberá alinearse con ellas antes de considerarse validado visualmente. Las fuentes se cargarán con alternativas locales sans serif para conservar legibilidad si no están disponibles en línea.

#### Tono de comunicación y accesibilidad

El tono será **sereno, respetuoso y directo**. Se prefieren etiquetas breves y vocabulario habitual para el ganadero y el médico veterinario. Los mensajes de error indican qué ocurrió y qué puede hacer la persona para continuar. Las alertas describen la situación y su nivel de atención sin alarmismo ni afirmaciones diagnósticas que el sistema no pueda sustentar.

| Dimensión de comunicación | Decisión para ICHU |
|---|---|
| Divertido – serio | Serio y práctico en las tareas operativas; no usar humor en alertas ni registros clínicos. |
| Formal – casual | Cercano y profesional, con frases directas y sin tecnicismos innecesarios. |
| Respetuoso – irreverente | Respetuoso en todos los productos y para ambos perfiles. |
| Entusiasta – sereno | Sereno en el uso diario; reservar mensajes positivos breves para confirmaciones de acciones completadas. |

Como criterio de diseño, se comprobará que el texto normal alcance una relación de contraste de 4.5:1 y el texto grande 3:1; los estados no dependerán únicamente del color y el foco de teclado permanecerá visible. En las pantallas táctiles se apuntará a controles principales de al menos 44 × 44 píxeles CSS, tomando como referencia el criterio mejorado de tamaño de objetivo de WCAG 2.2 [8]. Estas medidas son objetivos de diseño y requieren revisión en los mockups finales.

![Muestra de identidad visual y tokens de ICHU](assets/images/ichu-style-guidelines.svg)

*Figura 5.1.1. Paleta, jerarquía tipográfica y estados iniciales de ICHU. Elaboración propia a partir de los mockups de interfaz recibidos.*

> **Evidencia visual por incorporar al informe:** variantes del logotipo completo y del monograma sobre fondos claros y oscuros, con ejemplos de uso y tamaño reducido.

### 5.1.2. Web, Mobile and IoT Style Guidelines

Las reglas generales se adaptan al dispositivo y a la tarea. El diseño debe conservar la misma identidad y significado de los estados, aunque cambien la distribución, el tamaño de los controles y la forma de interacción.

| Experiencia | Guía visual y de interacción |
|---|---|
| **Web responsiva** | En pantallas amplias, conservar navegación lateral y paneles de trabajo; reorganizar la navegación en una franja compacta al reducir el ancho. En la referencia actual, los cambios de composición se activan en 1080, 720 y 560 px. En móvil, priorizar una columna y mantener tablas extensas en un área desplazable propia para evitar que se desborde toda la página. |
| **Aplicación móvil** | En el trabajo de campo, poner primero la acción y los datos necesarios para la tarea en curso; usar tarjetas de una columna, controles táctiles amplios y estados legibles con conectividad limitada. La página HTML disponible demuestra adaptación de una interfaz web, pero no sustituye los wireframes de una aplicación móvil nativa que se presentarán en 5.4. |
| **Interfaz digital de IoT** | Mostrar cada lectura con su unidad, hora de captura y estado de actualidad; diferenciar dispositivo en línea, sin señal, con lecturas almacenadas y sincronizado. Presentar batería y conectividad junto a la telemetría para que la persona pueda juzgar si el dato es reciente. Las acciones que cambian una asignación o configuración deben identificar el dispositivo y confirmar el resultado. |
| **Interfaz física de IoT** | Los indicadores y controles físicos deberán comunicar estados de manera inequívoca, con señal visual acompañada por etiqueta, patrón o instrucción cuando corresponda. La correspondencia concreta entre señal y estado debe ser la misma en la aplicación digital y en el dispositivo. No se asigna todavía significado a luces, botones o sonidos porque el diseño físico y de circuito se define en 5.6. |

El mockup HTML contiene vistas web del hato, monitoreo y telemetría, y reglas CSS de adaptación; no documenta aún una interfaz física para el collar o el controlador del abrevadero. Para evitar confundir una maqueta web con una aplicación móvil nativa, las capturas de cada producto se presentarán junto a sus wireframes y mockups en 5.3 y 5.4.

> **Evidencia visual por incorporar al informe:** capturas representativas de la interfaz web en escritorio y en un ancho móvil, tomadas del mockup HTML recibido; y una ilustración de la interfaz física del collar y del controlador del abrevadero, con sus controles e indicadores, una vez definidos en 5.6.

## 5.2. Information Architecture

### 5.2.1. Organization Systems

### 5.2.2. Labeling Systems

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
