# Capítulo II: Requirements Elicitation & Analysis
## 2.1. Competidores.
### 2.1.1. Análisis competitivo.
<style>
    * { box-sizing: border-box; }
    body {
        margin: 0;
        padding: 24px;
        background: #fff;
        font-family: Arial, Helvetica, sans-serif;
        color: #000;
    }
    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }
    h1 {
        font-size: 22px;
        margin: 0 0 12px 0;
        font-weight: 700;
    }
    .landscape {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        font-size: 12px;
    }
    .landscape th,
    .landscape td {
        border: 1px solid #000;
        padding: 8px;
        vertical-align: top;
        line-height: 1.3;
    }
    .landscape th {
        text-align: center;
        font-weight: 700;
        background: #fff;
    }
    .analysis-question {
        text-align: left !important;
        font-weight: 400 !important;
    }
    .section {
        width: 8%;
        text-align: center;
        vertical-align: middle !important;
        font-weight: 700;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
    }
    .criterion {
        width: 15%;
        font-weight: 700;
        vertical-align: middle !important;
    }
    .company {
        width: 19.25%;
        text-align: center;
        vertical-align: middle !important;
        font-weight: 700;
    }
    .logo-cell {
        text-align: center;
        vertical-align: middle !important;
        height: 75px;
    }
    .logo-placeholder {
        border: 1px dashed #777;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 125px;
        height: 48px;
        font-size: 11px;
        color: #555;
    }
    .overview { min-height: 120px; }
    .normal { font-weight: 400; }
    .swot-intro {
        font-weight: 400;
        text-align: left;
    }
    .swot-title {
        font-weight: 700;
    }
    @media print {
        body { padding: 0; }
        .container { max-width: none; }
        .landscape { font-size: 10px; }
        .landscape th, .landscape td { padding: 6px; }
    }
</style>
</head>
<body>
<div class="container" >
    <h1>Se debe desarrollar el siguiente Landscape:</h1>
    <table class="landscape">
        <colgroup>
            <col style="width:8%">
            <col style="width:15%">
            <col style="width:19.25%">
            <col style="width:19.25%">
            <col style="width:19.25%">
            <col style="width:19.25%">
        </colgroup>
        <tr>
            <th colspan="6" style="font-size:15px; text-align:left;">Competitive Analysis Landscape</th>
        </tr>
        <tr>
            <th colspan="2">¿Por qué llevar a cabo este análisis?</th>
            <td colspan="4" class="analysis-question">
                Comparar BoviTrack IoT con sus principales competidores para identificar fortalezas,
                debilidades, oportunidades y amenazas, y determinar una ventaja competitiva clara
                y sostenible en el mercado de monitoreo inteligente de ganado.
            </td>
        </tr>
        <tr>
            <th colspan="2">(En la cabecera colocar por cada competidor nombre y logo)</th>
            <th class="company">Su startup<br><br>ICHU IoT</th>
            <th class="company">Competidor 1<br><br>Allflex SenseHub</th>
            <th class="company">Competidor 2<br><br>Digitanimal</th>
            <th class="company">Competidor 3<br><br>Moocall</th>
        </tr>
        <tr>
            <td rowspan="2" class="section">Perfil</td>
            <td class="criterion">Overview</td>
            <td class="overview">
                Solución digital basada en collares y aretes inteligentes IoT con conectividad
                LoRaWAN y celular híbrida, integrada a una plataforma web y móvil nativa para el
                monitoreo biométrico y localización en tiempo real de ganado en pastoreo extensivo.
            </td>
            <td class="overview">
                Líder global en identificación animal y monitoreo inteligente de ganado lechero y
                de carne, perteneciente al grupo MSD Animal Health, con infraestructura propietaria robusta.
            </td>
            <td class="overview">
                Empresa de base tecnológica española que ofrece collares GPS y sensores para el
                monitoreo de la ubicación, temperatura y comportamiento de animales en pastoreo extensivo.
            </td>
            <td class="overview">
                Compañía irlandesa especializada en dispositivos IoT acoplados a la cola del animal
                para la detección temprana del parto y collares para el monitoreo de celo.
            </td>
        </tr>
        <tr>
            <td class="criterion">Ventaja competitiva<br><span class="normal">¿Qué valor ofrece a los clientes?</span></td>
            <td>
                Conectividad híbrida adaptable (LoRaWAN/Red Celular) con modo offline para
                sincronización retrasada; algoritmos locales de bajo consumo; costo accesible sin
                necesidad de costosas antenas propietarias locales en cada rancho ganadero.
            </td>
            <td>
                Monitoreo biométrico de altísima precisión (rumia, estrés por calor, celo) respaldado
                por décadas de investigación veterinaria y validación clínica a nivel industrial.
            </td>
            <td>
                Alta durabilidad y resistencia del dispositivo GPS, geocofencing de gran precisión
                geográfica y mapeo visual avanzado de rutas de pastoreo sin antenas locales intermedias.
            </td>
            <td>
                Especialización extrema y 100% enfocada en el parto y celo con alertas directas por
                SMS independientes de red local, con alta tasa de éxito preventivo en ganado gestante.
            </td>
        </tr>
        <tr>
            <td rowspan="2" class="section">Perfil de Marketing</td>
            <td class="criterion">Mercado objetivo</td>
            <td>
                Medianos y grandes productores ganaderos en América Latina con ganado de carne y
                doble propósito bajo esquemas de pastoreo extensivo o semi-intensivo.
            </td>
            <td>
                Megaproductores de ganado lechero e industrial de alta producción bajo confinamiento
                o pastoreo intensivo que pueden costear alta infraestructura.
            </td>
            <td>
                Ganaderos de montaña o pastoreo extensivo en Europa y América Latina que sufren
                pérdidas frecuentes por extravío o depredadores.
            </td>
            <td>
                Criadores de ganado vacuno enfocados en la reproducción y mejora genética, con
                rodeos medianos que requieren monitoreo crítico en época de parición.
            </td>
        </tr>
        <tr>
            <td class="criterion">Estrategias de marketing</td>
            <td>
                Demostraciones prácticas en asociaciones ganaderas locales, marketing digital enfocado
                en el ahorro de mano de obra y reducción de tasas de mortalidad animal, alianzas con
                veterinarias locales.
            </td>
            <td>
                Venta consultiva directa corporativa, presencia imponente en ferias internacionales
                agropecuarias, marketing científico con publicaciones respaldadas por veterinarios.
            </td>
            <td>
                Marketing de contenidos enfocado en la prevención del robo de ganado (abigeato),
                campañas digitales basadas en casos de éxito de recuperación de animales extraviados.
            </td>
            <td>
                Publicidad de nicho en revistas y foros especializados en inseminación y cría,
                demostraciones de "antes y después" del parto, y distribución mediante veterinarias aliadas.
            </td>
        </tr>
        <tr>
            <td rowspan="3" class="section">Perfil de Producto</td>
            <td class="criterion">Productos &amp; Servicios</td>
            <td>
                Arete y collar inteligente con acelerómetro y sensor de temperatura; aplicación móvil
                nativa (Android/iOS); plataforma web de gestión analítica; API RESTful para servicios veterinarios.
            </td>
            <td>
                Collares y aretes inteligentes SenseHub, antenas receptoras propietarias fijas de largo
                alcance, software SaaS de escritorio y aplicación móvil de alertas en tiempo real.
            </td>
            <td>
                Collares de localización GPS con sensores de temperatura, plataforma web de visualización
                cartográfica, y aplicaciones para dispositivos móviles de rastreo y geocofencing.
            </td>
            <td>
                Sensor Moocall Calving (acoplado a la cola), collar Moocall HEAT, servicio SaaS de envío
                de alertas por mensajes de texto integrados y aplicación para teléfonos inteligentes.
            </td>
        </tr>
        <tr>
            <td class="criterion">Precios &amp; Costos</td>
            <td>
                Dispositivos de bajo costo de adquisición única; plan de suscripción mensual flexible por
                escala de ganado (Premium y Básico) adaptado al volumen real del ganadero.
            </td>
            <td>
                Costo de adquisición de hardware muy elevado; tarifas de instalación de antenas propietarias
                muy costosas; contrato de licenciamiento SaaS anual rígido y de alto valor.
            </td>
            <td>
                Costo moderado por dispositivo collar; suscripción anual obligatoria por la conectividad
                Sigfox/celular integrada en cada collar de forma independiente.
            </td>
            <td>
                Costo único por el sensor de parto; cuota de servicio anual fija obligatoria para cubrir
                el costo de las alertas de telefonía celular global por SMS.
            </td>
        </tr>
        <tr>
            <td class="criterion">Canales de distribución<br>(Web y/o Móvil)</td>
            <td>
                Plataforma web (Landing Page) con e-commerce integrado; distribuidores regionales de
                insumos agropecuarios; y tiendas oficiales de aplicaciones móviles nativas.
            </td>
            <td>
                Red global de distribuidores autorizados exclusivos de MSD Animal Health y representantes
                de ventas técnicas directas en zonas ganaderas industriales.
            </td>
            <td>
                Sitio web con tienda en línea directa; envíos internacionales; alianzas de distribución
                con redes de telecomunicaciones IoT (como Sigfox y Telefónica).
            </td>
            <td>
                Tienda en línea oficial, marketplaces especializados (Amazon, agro-tiendas), y cooperativas
                ganaderas autorizadas con presencia física internacional.
            </td>
        </tr>
        <tr>
            <td rowspan="5" class="section">Análisis SWOT</td>
            <td colspan="5" class="swot-intro">
                <span class="swot-title">Realice esto para su startup y sus competidores.</span>
                Sus fortalezas deberían apoyar sus oportunidades y contribuir a lo que ustedes definen
                como su posible ventaja competitiva.
            </td>
        </tr>
        <tr>
            <td class="criterion">Fortalezas</td>
            <td>
                Conectividad híbrida LoRaWAN/celular de bajo consumo, soporte nativo de modo sin conexión
                (offline) para guardado local en zonas remotas, arquitectura de software basada en
                microservicios ágiles que facilita la integración rápida mediante API RESTful con laboratorios
                y veterinarias.
            </td>
            <td>
                Respaldo de una multinacional farmacéutica veterinaria, algoritmos de rumia probados
                científicamente a nivel mundial, red de soporte técnico in situ de alta presencia.
            </td>
            <td>
                Dispositivos muy resistentes con excelente diseño industrial hermético, fuerte presencia
                de marca en el mercado ganadero de habla hispana.
            </td>
            <td>
                Solución sumamente específica y validada para la reducción de mortalidad de terneros durante
                el parto, sin necesidad de configuraciones de red complejas por parte del usuario.
            </td>
        </tr>
        <tr>
            <td class="criterion">Debilidades</td>
            <td>
                Marca nueva en el mercado sin posicionamiento previo, presupuesto de marketing inicialmente
                limitado, dependencia de la capacidad de ensamblaje inicial para los lotes de collares y aretes físicos.
            </td>
            <td>
                Costo de inversión restrictivo para productores pequeños y medianos, obligatoriedad de instalar
                antenas fijas receptoras en el terreno (inviable para grandes pastizales extensivos sin energía eléctrica).
            </td>
            <td>
                Elevado consumo de batería debido al uso intensivo de GPS directo por collar, falta de integración
                directa y amigable con servicios locales de atención de salud animal del sector.
            </td>
            <td>
                Alcance funcional muy limitado (no sirve para geolocalización, control de pastoreo diario,
                ni detección generalizada de enfermedades comunes del ganado).
            </td>
        </tr>
        <tr>
            <td class="criterion">Oportunidades</td>
            <td>
                Creciente necesidad de digitalización en el sector ganadero latinoamericano para mitigar el
                robo de ganado (abigeato); alta disponibilidad de redes de comunicación IoT abiertas de largo alcance (LoRaWAN).
            </td>
            <td>
                Migración de medianos ganaderos hacia ganaderías intensivas de alta eficiencia donde el
                retorno de inversión se percibe más rápido.
            </td>
            <td>
                Expansión de redes de conectividad celular de banda estrecha (NB-IoT) en América Latina
                que podrían reducir el consumo de sus baterías.
            </td>
            <td>
                Alianzas con proveedores de semen y genética bovina para empaquetar el dispositivo en
                programas de reproducción bovina de alta gama.
            </td>
        </tr>
        <tr>
            <td class="criterion">Amenazas</td>
            <td>
                Fluctuación de precios de los componentes electrónicos para la fabricación de los collares;
                posibilidad de ingreso rápido de competidores chinos de bajo costo con hardware genérico sin valor analítico.
            </td>
            <td>
                Desintermediación del mercado por soluciones de software de código abierto e integraciones
                de sensores genéricos.
            </td>
            <td>
                Lanzamiento de collares inteligentes de bajo costo por parte de startups locales latinoamericanas
                con mejor soporte al cliente y tarifas flexibles.
            </td>
            <td>
                Obsolescencia del dispositivo de cola si los collares biométricos de la competencia logran
                predecir el parto con la misma o mayor precisión a menor costo general.
            </td>
        </tr>
    </table>
</div>
</body>
</html>

### 2.1.2. Estrategias y tácticas frente a competidores.

Para posicionar a ICHU IoT con éxito, nuestra startup implementará un conjunto de estrategias y tácticas comerciales y de ingeniería de software orientadas a contrarrestar las fortalezas de los competidores establecidos y capitalizar sus debilidades en el contexto ganadero latinoamericano:

**Estrategia 1:** Reducción de Barreras Económicas y Tecnológicas de Infraestructura
Táctica Comercial: Eliminar la necesidad de costosas antenas fijas propietarias en el rancho ganadero (la gran debilidad de Allflex). El ganadero podrá optar por aretes inteligentes que transmiten de forma local a un único collar maestro (que actúa como dispositivo gateway en el animal líder de la manada), reduciendo a una fracción los costos de instalación física.
Táctica de Ingeniería: Diseñar el collar inteligente con conectividad híbrida que almacene la telemetría en memoria flash local cuando el ganado se encuentre en "zonas ciegas" sin señal. Una vez que el ganado retorne a áreas de cobertura o se aproxime al corral principal, los datos se sincronizarán de forma transparente y asíncrona hacia nuestro Edge API.

**Estrategia 2:** Optimización Energética de los Dispositivos Físicos
Táctica Comercial: Promocionar una vida útil de la batería de los aretes y collares de hasta 3 años, reduciendo drásticamente las horas de mano de obra asociadas al cambio de baterías y manipulación estresante del ganado (superando la debilidad de Digitanimal).
Táctica de Ingeniería: Implementar en los dispositivos embebidos un algoritmo inteligente de transmisión dinámica. Si el ganado se encuentra en reposo (determinado por el acelerómetro local), el módulo GPS/transmisor entra en modo de ultra bajo consumo (Deep Sleep), transmitiendo únicamente cuando se detecten patrones de actividad inusual, geocofencing cruzado o anomalías térmicas en el animal.

**Estrategia 3:** Flexibilidad de Suscripción y Monetización Adaptativa
Táctica Comercial: Ofrecer un modelo de negocio SaaS con planes escalables basados en el tamaño real de la unidad ganadera (por cabeza de ganado), permitiendo a los medianos productores adoptar la tecnología de forma incremental. Esto contrasta directamente con los planes de pago anuales rígidos e inaccesibles de Allflex y Digitanimal.
Táctica de Ingeniería: Implementar en nuestro backend de servicios web un módulo dinámico de suscripciones y facturación asimilado por el microservicio correspondiente, permitiendo habilitar o deshabilitar de forma automática características del software (como reportes avanzados o alertas SMS críticas) basándose en el plan activo del usuario.

**Estrategia 4:** Integración del Ecosistema de Salud mediante API RESTful de Desarrollo Interno
Táctica Comercial: Posicionar a ICHU IoT no solo como un rastreador o un sensor aislado, sino como una plataforma abierta que conecta al ganadero con su médico veterinario de confianza. El veterinario podrá visualizar análisis clínicos e históricos de salud de manera remota para prescribir tratamientos oportunos, reduciendo las visitas físicas improductivas.
Táctica de Ingeniería: Diseñar y documentar rigurosamente los endpoints de nuestro RESTful API con OpenAPI/Swagger, permitiendo que sistemas externos de laboratorios o software de gestión de terceros se integren de forma segura mediante protocolos estandarizados, expandiendo el valor del ecosistema sin comprometer la seguridad de la información.

## 2.2. Entrevistas.
### 2.2.1. Diseño de entrevistas.
A continuación, se presenta la relación de preguntas principales y complementarias estructuradas para cada uno de los tres segmentos objetivo identificados. El cuestionario recopila tanto la información demográfica y de perfil requerida para construir los User Personas (arquetipos) como la información operativa y de dolor para mapear los requisitos de software del sistema.

**Segmento 1:** Medianos y Grandes Ganaderos (Propietarios y Administradores de Estancias)
Este segmento representa al comprador principal (Buyer Persona) y tomador de decisiones financieras de la estancia. El objetivo es identificar la viabilidad de la plataforma web administrativa, el modelo de suscripción SaaS y los indicadores clave (KPIs) de productividad que desean ver en pantalla .

# BLOQUE 1: Datos Demográficos y de Perfil (Información Complementaria)

**Objetivo:** Construir el arquetipo recolectando características demográficas, ocupación, biografía y canales digitales de interacción.

1. ¿Cuál es su nombre, edad, nivel de instrucción y en qué distrito/región se encuentra su estancia ganadera?
2. ¿Cuál es su ocupación o rol principal en el día a día en torno al ganado?
3. ¿Qué dispositivos digitales prefiere utilizar en su rutina diaria (computadora de escritorio, laptop, tablet, teléfono inteligente)?

---

# BLOQUE 2: Comportamiento, Infraestructura y Frustraciones

**Objetivo:** Entender el contexto operativo actual del rancho, sus cuellos de botella tecnológicos y sus principales puntos de dolor.

1. ¿Cuántas cabezas de ganado maneja actualmente en su unidad productiva y bajo qué régimen (pastoreo extensivo, estabulado o semi-intensivo)?
2. ¿Qué herramientas o sistemas de software utiliza actualmente para llevar el control del inventario de animales, partos, muertes e historial médico?
3. ¿Cómo es el estado de la conectividad a internet (red celular 3G/4G/5G, internet satelital, etc.) en la casa del rancho y en las zonas de pastoreo?
4. ¿Cuál ha sido la pérdida económica más significativa que ha tenido en el último año debido a enfermedades no detectadas a tiempo o muerte súbita de animales?
5. ¿Cómo le afecta el robo de ganado (abigeato) o el extravío de animales en términos de costos de búsqueda y pérdida patrimonial?
6. Al contratar consultorías veterinarias externas, ¿cuáles son los principales problemas de comunicación o falta de datos históricos que experimenta?

---

# BLOQUE 3: Validación de la Propuesta de Software (ICHU)

**Objetivo:** Validar el modelo de negocio, el hardware y los indicadores clave (KPIs) del proyecto.

1. Si existiera una plataforma web que centralizara el historial de salud, ubicación y alertas térmicas de cada animal sin que usted tenga que estar físicamente en el corral, ¿cómo cambiaría su proceso de toma de decisiones?
2. ¿Qué información cuantitativa (gráficos de temperatura, horas de actividad, alertas de celo) consideraría indispensable visualizar en un tablero de control ejecutivo?
3. ¿Bajo qué condiciones o modelo de suscripción (ej. un pago mensual por cabeza de ganado monitoreada) consideraría rentable implementar esta solución de software en su negocio?

---

# BLOQUE 4: Captura de Funcionalidades

**Objetivo:** Obtener los requerimientos técnicos y módulos específicos que deben programarse en el sistema.

## 1. Funcionalidades de Sanidad y Trazabilidad (El Historial del Animal)

1. En su trabajo diario controlando la salud del ganado, ¿qué datos médicos necesita registrar sí o sí en el sistema? (Ej. tipo de vacuna, fecha, dosis, nombre del veterinario).
2. Si el software tuviera un perfil individual por cada vaca, ¿qué información específica le gustaría encontrar al abrir ese perfil?
3. ¿Le gustaría que el sistema le envíe notificaciones automáticas? De ser así, ¿de qué tipo? (Ej. recordatorios de revacunación, alertas de parto, periodos de cuarentena).

## 2. Funcionalidades de Inventario y Movimientos (Control de Stock)

1. Para llevar el control de cuántas cabezas de ganado tiene, ¿qué funciones específicas le pediría a la plataforma? ¿Le sirve poder agruparlos por lotes, por edad, por raza o por potrero?
2. Cuando ocurre un nacimiento o una muerte en el campo, ¿qué campos obligatorios le gustaría que el capataz llene en la aplicación para que usted tenga la información completa?
3. ¿Necesita que el software le permita registrar el movimiento de animales de un potrero a otro? ¿Qué datos le gustaría ver en esa función? (Ej. días de descanso del pasto, carga animal).

## 3. Funcionalidades Financieras y de Insumos (El Negocio)

**Objetivo:** Capturar las herramientas de administración económica que espera encontrar.

1. En la parte administrativa de su trabajo, ¿qué funcionalidades le gustaría tener para controlar sus gastos? ¿Necesita un módulo para registrar la compra de alimento y medicinas?
2. ¿Le interesaría que el sistema descuente automáticamente el stock de su inventario cada vez que se aplica una medicina a un animal?
3. Como administrador, ¿qué reportes exactos necesita exportar a fin de mes? (Ej. un reporte en Excel de mortalidad mensual, gráficos de ganancia de peso, costos operativos por cabeza).

## 4. Usabilidad en el Campo (La Interfaz de Trabajo)

**Objetivo:** Capturar cómo debe ser la herramienta física para que no entorpezca su trabajo en el corral.

1. Cuando usted o su equipo están en la manga (corral) trabajando directamente con el animal, ¿qué botones o funciones necesitan que estén más a la mano en la pantalla del celular para no perder tiempo?
2. Sabiendo que muchas veces no hay internet en el potrero, ¿qué acciones específicas necesita poder guardar en la aplicación sin conexión (modo offline) para que se actualicen cuando regrese a la casa?
   
**Segmento 2:** Médicos Veterinarios y Consultores de Salud Animal  
Este segmento proporciona el sustento técnico-científico del dominio de salud. El objetivo es validar qué variables cuantitativas de telemetría biométrica (temperatura, acelerometría) requiere el veterinario para predecir anomalías de salud y cómo la API RESTful de ICHU debe estructurar los historiales clínicos para consumo de sistemas externos .

# GUÍA DE ENTREVISTA: Médicos Veterinarios y Consultores

## BLOQUE 1: Sobre Él/Ella y su Ecosistema de Trabajo (Rompehielos y Perfil)

**Objetivo:** Entender quién es el usuario, cómo se mueve en su día a día y qué nivel de adopción tecnológica tiene.

- "Para empezar, me encantaría conocer un poco sobre usted y su trayectoria. **¿Cómo decidió especializarse en esta área y cuántos años lleva ejerciendo en la asesoría ganadera?**"
- "En una semana típica de trabajo, **¿cómo distribuye su tiempo entre el trabajo de escritorio, el laboratorio y las visitas físicas a los establos o estancias?**"
- "Cuando está en el corral trabajando directamente con los animales, **¿qué dispositivo tecnológico utiliza más, y cuál prefiere usar cuando llega a su oficina para analizar datos o redactar informes médicos?**"
- "**¿En qué fuentes, canales o comunidades (foros, asociaciones, WhatsApp) se apoya** cuando necesita discutir un caso clínico complejo o investigar sobre nuevas herramientas para su profesión?"

---

## BLOQUE 2: Casos Clínicos y Captura de Parámetros Biométricos (El Algoritmo)

**Objetivo:** Que el veterinario te dicte los números, variables y reglas médicas que el sistema y el hardware deben medir y procesar.

- "Pensando en las enfermedades infecciosas más críticas de esta zona (como Anaplasmosis, Piroplasmosis o el Complejo Respiratorio), **¿a partir de qué grado exacto de temperatura corporal, o tras cuántas horas de alteración continua, usted determina que un bovino entra en una fase de riesgo inminente?**"
- "Descríbame un caso clínico reciente donde un trastorno digestivo o metabólico haya pasado desapercibido por el personal. **Si usted hubiera tenido un registro exacto de la caída en las horas de rumia o inactividad del animal, ¿cómo habría cambiado su intervención?**"
- "Desde el punto de vista reproductivo, para detectar un celo silencioso con precisión, **¿qué combinación exacta de datos biométricos (por ejemplo, cruzar picos de actividad física con variaciones de temperatura) le daría la certeza clínica para indicar una inseminación?**"
- "Después de aplicar un protocolo de antibióticos fuerte para un cuadro grave, **¿qué parámetros vitales necesita monitorear obligatoriamente en las siguientes 12, 24 o 48 horas para confirmar que el fármaco está funcionando?**"

---

## BLOQUE 3: Captura de Funcionalidades para el Software (La Interfaz)

**Objetivo:** Descubrir los módulos, botones, reportes y alertas que tu equipo de desarrollo debe programar en la aplicación web y móvil.

- "Si tuviera nuestra aplicación móvil abierta mientras evalúa a un paciente en la manga, **¿qué datos médicos específicos necesita poder registrar rápidamente en el historial digital de ese animal con un par de clics?** (Ej. diagnóstico, dosis, fármaco, tiempo de retiro de leche/carne)."
- "Imagínese que abre la plataforma web en su computadora un lunes por la mañana. Para hacer un análisis epidemiológico rápido de todo un lote, **¿qué gráficos, filtros de búsqueda o cruces de variables necesita ver obligatoriamente en la pantalla principal?**"
- "Pensando en la prevención de mortalidad, **¿qué tipo de alertas automáticas le gustaría que el sistema le envíe directamente a su celular como una 'Alerta Roja'?** (Ej. notificaciones de partos distócicos, caídas abruptas de temperatura)."
- "A la hora de entregar resultados o justificar sus tratamientos ante el dueño de la estancia, **¿qué tipo de reportes automatizados le gustaría que el software genere para que usted pueda exportarlos o imprimirlos directamente?**"
- "Para evitar que usted haga un doble trabajo de registro (interoperabilidad), **¿con qué otros sistemas de laboratorios, software de nutrición o entidades estatales de sanidad necesitaría que nuestra plataforma se conecte en el futuro?"

---

Con esta estructura, el veterinario te hablará de su vida, luego te dará la "matemática" de las enfermedades para calibrar tus sensores, y finalmente te diseñará los botones y pantallas de tu software. 

### 2.2.2. Registro de entrevistas.
### 2.2.3. Análisis de entrevistas.
## 2.3. Needfinding.
En esta sección se consolidan y sintetizan los hallazgos cualitativos y cuantitativos obtenidos durante la fase de investigación de campo, entrevistas en profundidad y análisis competitivo. El proceso de Needfinding nos permite transformar los datos brutos recolectados de los actores del sector ganadero en artefactos visuales y estructurados de diseño de experiencia de usuario (UX), garantizando que el desarrollo del ecosistema de software ICHU responda de manera directa a las necesidades reales, dolores operativos y metas estratégicas de cada perfil de usuario.


### 2.3.1. User Personas.

Introducción y Metodología
Para la construcción de los arquetipos de usuario (User Personas), el equipo procesó la información recolectada en la fase de entrevistas y análisis del mercado ganadero. Se identificaron tres patrones de comportamiento distintivos que representan fielmente a los tres segmentos objetivo definidos para el ecosistema de software ICHU:

**Segmento 1:** Propietarios y Administradores Ganaderos, enfocados en la rentabilidad, reducción de pérdidas por mortalidad/abigeato y la toma de decisiones estratégicas basadas en indicadores clave expresados en la ICHU Web Application.
**Segmento 2:** Capataces y Operarios de Campo, centrados en la usabilidad en terreno, la rápida localización de los animales y el registro ágil de eventos mediante la ICHU Mobile Application con soporte para modo sin conexión (offline).
**Segmento 3:** Médicos Veterinarios y Consultores, orientados al monitoreo biométrico continuo, diagnóstico clínico temprano y la revisión de historiales de salud consolidados a través de vistas especializadas y la integración con la API RESTful de desarrollo interno.  

Cada ficha de User Persona ha sido especificada considerando todos los atributos recomendados para arquetipos UX (datos demográficos, biografía, personalidad, objetivos, frustraciones, tecnología de preferencia, marcas/influencias y necesidades específicas de software), habiendo sido modeladas estructuralmente en la herramienta UXPressia.


### 2.3.2. User Task Matrix.
### 2.3.3. User Journey Mapping.
### 2.3.4. Empathy Mapping.
## 2.4. Big Picture EventStorming.
## 2.5. Ubiquitous Language.
