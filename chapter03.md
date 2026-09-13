# Capítulo III: Requirements Specification

Este capítulo transforma los problemas, objetivos y necesidades identificados en los capítulos I y II en requisitos organizados para SmartFarm. La especificación considera los tres segmentos objetivo, la Landing Page, las aplicaciones de usuario, los servicios internos y el dispositivo IoT.

## 3.1. User Stories

Las User Stories se organizan en siete Epics relacionados con el monitoreo del ganado, la prevención de riesgos, la operación de campo, la atención veterinaria, el análisis de información, la plataforma IoT y la Landing Page. Cada historia se relaciona con una necesidad identificada en los capítulos I y II y contiene criterios de aceptación verificables.

Las historias dirigidas a usuarios se redactan desde la perspectiva del administrador ganadero, el operario de campo, el médico veterinario o el visitante. Las historias técnicas se redactan desde la perspectiva del desarrollador y representan capacidades necesarias para conectar los dispositivos, los servicios y las aplicaciones.

**Epics y User Stories**

| Epic / Story ID | Título | Descripción | Criterios de aceptación | Relacionado con (Epic ID) |
| --- | --- | --- | --- | --- |
| EP-01 | Monitoreo individual del ganado | Agrupa las capacidades para consultar la identidad, el estado y la telemetría de cada animal. | No aplica. Es una agrupación de User Stories. | — |
| US-01 | Consultar el perfil de un animal | Como administrador ganadero, deseo consultar el perfil de un animal, para conocer su identificación y estado actual. | Given que el animal está registrado en SmartFarm<br>When el administrador consulta su perfil<br>Then el sistema muestra su identificación, estado, dispositivo asociado y fecha de la última lectura. | EP-01 |
| US-02 | Consultar la telemetría reciente | Como administrador ganadero, deseo consultar la temperatura, actividad y ubicación reciente de un animal, para detectar oportunamente posibles anomalías. | Given que el dispositivo del animal ha enviado datos válidos<br>When el administrador consulta la telemetría reciente<br>Then el sistema muestra la temperatura, el nivel de actividad, la ubicación y la fecha de cada lectura.<br><br>Given que no existe una lectura reciente<br>When el administrador consulta la telemetría<br>Then el sistema informa la fecha de la última lectura disponible. | EP-01 |
| US-03 | Consultar el historial individual | Como médico veterinario, deseo consultar el historial de telemetría y eventos de un animal, para apoyar el diagnóstico y el seguimiento de su salud. | Given que el médico veterinario tiene autorización para consultar el animal<br>When selecciona un periodo de consulta<br>Then el sistema muestra las lecturas y eventos registrados durante ese periodo.<br><br>Given que no existen datos para el periodo seleccionado<br>When se realiza la consulta<br>Then el sistema informa que no hay registros disponibles. | EP-01 |
| EP-02 | Alertas preventivas y seguridad | Agrupa las capacidades para detectar anomalías de salud, cambios de comportamiento y riesgos de robo o extravío. | No aplica. Es una agrupación de User Stories. | — |
| US-04 | Recibir una alerta de salud | Como administrador ganadero, deseo recibir una alerta cuando la temperatura o la actividad de un animal se desvíe de los valores definidos, para actuar antes de que el problema se agrave. | Given que existe un umbral de alerta configurado<br>When una lectura supera el umbral definido<br>Then el sistema genera una alerta asociada al animal y registra la fecha, el valor detectado y el tipo de anomalía.<br><br>Given que una alerta ya fue generada para el mismo evento<br>When se reciben nuevas lecturas dentro del mismo periodo de alerta<br>Then el sistema evita crear alertas duplicadas sin modificar el historial del evento. | EP-02 |
| US-05 | Detectar una salida del área permitida | Como administrador ganadero, deseo recibir una alerta cuando un animal salga del área permitida, para reducir el riesgo de robo o extravío. | Given que el animal tiene un área geográfica configurada<br>When su ubicación registrada se encuentra fuera del área permitida<br>Then el sistema genera una alerta de seguridad con la ubicación y la hora del evento.<br><br>Given que el animal se encuentra dentro del área permitida<br>When se recibe una nueva ubicación<br>Then el sistema no genera una alerta de salida. | EP-02 |
| US-06 | Consultar indicadores reproductivos | Como administrador ganadero, deseo consultar cambios de temperatura y actividad asociados al ciclo reproductivo, para identificar situaciones que requieran revisión. | Given que el sistema dispone de lecturas suficientes de temperatura y actividad<br>When se detecta un patrón compatible con una variación reproductiva<br>Then el sistema muestra el indicador y lo relaciona con el animal correspondiente.<br><br>Given que las lecturas disponibles son insuficientes<br>When se analiza el patrón reproductivo<br>Then el sistema informa que no existe evidencia suficiente para generar un indicador. | EP-02 |
| EP-03 | Operación de campo sin conexión | Agrupa las capacidades que permiten al operario consultar y registrar información durante sus actividades en zonas con conectividad intermitente. | No aplica. Es una agrupación de User Stories. | — |
| US-07 | Localizar un animal extraviado | Como operario de campo, deseo consultar en un mapa la última ubicación registrada de un animal, para reducir el tiempo de búsqueda. | Given que el animal tiene al menos una ubicación registrada<br>When el operario consulta su última ubicación<br>Then la aplicación muestra el punto de ubicación, la fecha y la hora de la lectura.<br><br>Given que el animal no tiene una ubicación registrada<br>When el operario realiza la consulta<br>Then la aplicación informa que no existe una ubicación disponible. | EP-03 |
| US-08 | Registrar un evento de salud en campo | Como operario de campo, deseo registrar un evento de salud del animal, para comunicarlo oportunamente al administrador y al médico veterinario. | Given que el operario identifica un evento de salud<br>When registra el animal, el tipo de evento, la fecha y una observación<br>Then la aplicación almacena el evento y muestra una confirmación.<br><br>Given que falta la identificación del animal o el tipo de evento<br>When el operario intenta guardar el registro<br>Then la aplicación solicita completar la información obligatoria. | EP-03 |
| US-09 | Trabajar sin conexión | Como operario de campo, deseo consultar perfiles y registrar eventos sin cobertura celular, para mantener la continuidad de mis actividades. | Given que el dispositivo móvil no tiene conexión<br>When el operario consulta información previamente disponible o registra un evento<br>Then la aplicación permite continuar la operación y almacena localmente los cambios.<br><br>Given que el dispositivo recupera la conexión<br>When se ejecuta la sincronización<br>Then la aplicación envía los cambios pendientes y muestra el resultado de cada operación. | EP-03 |
| EP-04 | Historial y atención veterinaria | Agrupa las capacidades para centralizar información clínica y facilitar la colaboración con médicos veterinarios. | No aplica. Es una agrupación de User Stories. | — |
| US-10 | Registrar información clínica | Como médico veterinario, deseo registrar vacunaciones, tratamientos e inseminaciones, para mantener actualizado el historial clínico del animal. | Given que el médico veterinario tiene autorización para modificar el historial<br>When registra un procedimiento con fecha, tipo y observación<br>Then el sistema guarda el registro y lo relaciona con el animal.<br><br>Given que falta la fecha o el tipo de procedimiento<br>When intenta guardar el registro<br>Then el sistema solicita completar los datos obligatorios. | EP-04 |
| US-11 | Revisar información antes de una atención | Como médico veterinario, deseo revisar de forma remota la telemetría y los eventos recientes de un animal, para preparar una atención basada en información histórica. | Given que existe un historial disponible<br>When el médico veterinario consulta un animal con una alerta<br>Then el sistema muestra sus lecturas, alertas y eventos del periodo seleccionado.<br><br>Given que el médico veterinario no tiene autorización<br>When intenta consultar la información clínica<br>Then el sistema rechaza la operación e informa que no cuenta con permisos suficientes. | EP-04 |
| US-12 | Compartir información clínica mediante servicios seguros | Como médico veterinario, deseo exportar o consultar información clínica mediante servicios seguros, para integrarla con laboratorios u otros sistemas autorizados. | Given que el médico veterinario está autorizado<br>When solicita información clínica en un formato disponible<br>Then el sistema entrega únicamente los datos permitidos y registra la solicitud.<br><br>Given que la solicitud no cumple las reglas de autorización<br>When se procesa la solicitud<br>Then el servicio rechaza el acceso y registra el motivo. | EP-04 |
| EP-05 | Análisis para la toma de decisiones | Agrupa las capacidades para visualizar indicadores individuales y colectivos del ganado. | No aplica. Es una agrupación de User Stories. | — |
| US-13 | Consultar indicadores del hato | Como administrador ganadero, deseo consultar indicadores agrupados de salud y actividad, para tomar decisiones sobre la unidad ganadera. | Given que existen datos de varios animales<br>When el administrador consulta el panel de indicadores<br>Then el sistema muestra los valores agrupados y el periodo utilizado para calcularlos.<br><br>Given que el periodo seleccionado no tiene datos suficientes<br>When se solicita el cálculo<br>Then el sistema informa la limitación de los resultados. | EP-05 |
| US-14 | Consultar tendencias y distribución de datos | Como médico veterinario, deseo consultar tendencias de temperatura, actividad y distribución de alertas, para analizar el comportamiento del hato. | Given que existen lecturas históricas válidas<br>When el médico veterinario selecciona un indicador y un periodo<br>Then el sistema muestra la tendencia y los valores utilizados para su cálculo.<br><br>Given que existen animales con datos incompletos<br>When se genera el análisis grupal<br>Then el sistema identifica la cantidad de registros faltantes. | EP-05 |
| EP-06 | Plataforma IoT e integración de datos | Agrupa las capacidades técnicas necesarias para capturar, transmitir, almacenar y distribuir la telemetría. | No aplica. Es una agrupación de Technical Stories. | — |
| TS-01 | Enviar telemetría desde el dispositivo | Como desarrollador, deseo recibir desde el dispositivo IoT la temperatura, la actividad, la ubicación, la identificación del animal y la fecha de lectura, para procesar la telemetría. | Given que el dispositivo está configurado y conectado con el servicio de borde<br>When realiza una lectura válida<br>Then envía los valores del animal, la fecha y la hora de la medición.<br><br>Given que la lectura no contiene la identificación del animal o la fecha<br>When el servicio recibe el mensaje<br>Then rechaza el mensaje e informa el dato faltante. | EP-06 |
| TS-02 | Almacenar y sincronizar datos en el servicio de borde | Como desarrollador, deseo almacenar temporalmente la telemetría cuando no exista conexión, para sincronizarla posteriormente con el servicio central. | Given que el servicio de borde no puede comunicarse con el servicio central<br>When recibe una lectura válida<br>Then almacena la lectura localmente con su fecha y estado de sincronización.<br><br>Given que la comunicación con el servicio central se restablece<br>When se ejecuta la sincronización<br>Then envía las lecturas pendientes y actualiza su estado. | EP-06 |
| TS-03 | Optimizar el consumo energético | Como desarrollador, deseo ajustar la frecuencia de transmisión según la actividad y las anomalías detectadas, para prolongar la autonomía del dispositivo. | Given que el animal se encuentra en reposo y no presenta anomalías<br>When el dispositivo evalúa la siguiente transmisión<br>Then aplica un intervalo de bajo consumo definido para ese estado.<br><br>Given que detecta actividad inusual, una anomalía térmica o una salida del área permitida<br>When evalúa la siguiente transmisión<br>Then prioriza el envío de la lectura y conserva el evento generado. | EP-06 |
| TS-04 | Validar y almacenar la telemetría central | Como desarrollador, deseo validar y almacenar las lecturas recibidas por el servicio central, para que las aplicaciones consulten información consistente. | Given que el servicio central recibe una lectura con estructura válida<br>When valida sus datos y referencias<br>Then almacena la telemetría y responde confirmando la operación.<br><br>Given que la lectura tiene datos inválidos o una referencia inexistente<br>When se ejecuta la validación<br>Then el servicio rechaza la operación e informa el motivo. | EP-06 |
| TS-05 | Enviar notificaciones de alerta | Como desarrollador, deseo integrar un servicio de mensajería, para notificar eventos críticos a los usuarios responsables. | Given que se genera una alerta crítica y existe un destinatario configurado<br>When el sistema solicita el envío de la notificación<br>Then el servicio registra la solicitud, el destinatario y su estado de entrega.<br><br>Given que el servicio externo no está disponible<br>When se intenta enviar la notificación<br>Then el sistema registra el error y conserva la alerta para su consulta posterior. | EP-06 |
| EP-07 | Landing Page y suscripciones | Agrupa las capacidades para comunicar la propuesta de valor, orientar a los segmentos y presentar el modelo de suscripción. | No aplica. Es una agrupación de User Stories. | — |
| US-15 | Conocer la propuesta de SmartFarm | Como visitante, deseo conocer el problema que resuelve SmartFarm, sus productos y sus beneficios, para evaluar si la solución es adecuada para mi unidad ganadera. | Given que el visitante ingresa a la Landing Page<br>When recorre sus secciones principales<br>Then encuentra información sobre el problema, la solución IoT, los beneficios y los productos digitales.<br><br>Given que el visitante utiliza un dispositivo móvil<br>When consulta la Landing Page<br>Then el contenido se adapta a las dimensiones de su pantalla. | EP-07 |
| US-16 | Acceder a una acción según el segmento | Como visitante, deseo encontrar una acción relacionada con mi perfil, para acceder al punto de contacto o producto digital correspondiente. | Given que el visitante identifica su segmento<br>When selecciona la acción correspondiente<br>Then la Landing Page lo dirige al destino definido para ese segmento.<br><br>Given que el destino aún no está disponible<br>When el visitante selecciona la acción<br>Then la Landing Page muestra una alternativa de contacto válida. | EP-07 |
| US-17 | Consultar planes de suscripción | Como administrador ganadero, deseo consultar planes de suscripción relacionados con el tamaño de mi unidad ganadera, para evaluar la viabilidad económica de SmartFarm. | Given que el visitante consulta la sección de planes<br>When revisa una opción de suscripción<br>Then el sistema muestra su alcance, modalidad de cobro y condiciones principales.<br><br>Given que el visitante desea solicitar información<br>When selecciona la acción de contacto<br>Then la Landing Page dirige la solicitud al canal definido. | EP-07 |
| US-18 | Consultar términos y condiciones | Como visitante, deseo acceder a los términos y condiciones del servicio, para conocer las responsabilidades y condiciones de uso de SmartFarm. | Given que el visitante se encuentra en la Landing Page<br>When consulta el pie de página<br>Then encuentra un enlace visible hacia los términos y condiciones.<br><br>Given que el visitante selecciona el enlace<br>When se carga el documento legal<br>Then puede consultar su contenido sin perder el contexto del sitio. | EP-07 |

**Criterios de calidad de las User Stories**

- Cada historia tiene un identificador único.
- Cada historia representa una necesidad o una capacidad técnica concreta.
- Los criterios de aceptación describen comportamientos verificables.
- Los criterios de aceptación no dependen de colores, posiciones o componentes visuales específicos.
- Las historias técnicas se mantienen separadas de las historias dirigidas a usuarios.
- Las historias de la Landing Page forman parte del alcance inicial.
- La validación definitiva se realizará cuando se incorporen los resultados de las entrevistas.

## 3.2. Impact Mapping

El Impact Mapping relaciona las metas de negocio de SmartFarm con los cambios de comportamiento esperados en los actores, los entregables de la solución y las User Stories que permitirán implementarlos. Los objetivos numéricos se toman del Capítulo I como metas iniciales; no representan resultados comprobados mientras no se realice la validación correspondiente.

### Primer segmento objetivo

### Segundo segmento objetivo

## 3.3. Product Backlog

El Product Backlog contiene las User Stories y Technical Stories priorizadas según su valor para el negocio, el impacto en los usuarios y la dependencia técnica necesaria para habilitar la solución. La priorización es inicial y debe revisarse con el equipo después de validar las entrevistas y definir la capacidad del Sprint.

**Criterios de priorización y estimación**

La prioridad se determinó considerando los siguientes criterios:

1. Impacto directo en la detección de problemas de salud y seguridad.
2. Valor para los tres segmentos objetivo.
3. Dependencias necesarias para habilitar las aplicaciones.
4. Viabilidad de validación durante el primer ciclo de desarrollo.
5. Contribución a los Business Goals definidos en el Impact Map.

La estimación utiliza únicamente los valores permitidos por la guía: 1, 2, 3, 5 y 8 Story Points.

**Product Backlog priorizado**

| Orden | User Story ID | Título | Descripción | Story Points |
| --- | --- | --- | --- | --- |
| 1 | US-02 | Consultar la telemetría reciente | Visualizar temperatura, actividad y ubicación reciente de un animal. | 5 |
| 2 | US-04 | Recibir una alerta de salud | Generar alertas cuando una lectura supere un umbral definido. | 8 |
| 3 | TS-01 | Enviar telemetría desde el dispositivo | Recibir telemetría identificada y fechada desde el dispositivo IoT. | 8 |
| 4 | TS-04 | Validar y almacenar la telemetría central | Validar y persistir las lecturas recibidas por el servicio central. | 8 |
| 5 | US-01 | Consultar el perfil de un animal | Consultar identificación, estado y dispositivo asociado de un animal. | 3 |
| 6 | US-07 | Localizar un animal extraviado | Visualizar la última ubicación registrada en un mapa. | 5 |
| 7 | US-09 | Trabajar sin conexión | Consultar y registrar información sin cobertura celular. | 8 |
| 8 | TS-02 | Almacenar y sincronizar datos en el servicio de borde | Conservar la telemetría localmente y sincronizarla al recuperar la conexión. | 5 |
| 9 | US-08 | Registrar un evento de salud en campo | Registrar eventos observados por el operario y comunicarlos al equipo. | 3 |
| 10 | US-05 | Detectar una salida del área permitida | Generar alertas cuando un animal abandone su área geográfica. | 5 |
| 11 | US-13 | Consultar indicadores del hato | Visualizar indicadores agrupados de salud y actividad. | 5 |
| 12 | US-03 | Consultar el historial individual | Revisar lecturas y eventos de un animal durante un periodo. | 5 |
| 13 | US-11 | Revisar información antes de una atención | Consultar información histórica para preparar una atención veterinaria. | 5 |
| 14 | US-10 | Registrar información clínica | Registrar vacunaciones, tratamientos e inseminaciones. | 5 |
| 15 | US-14 | Consultar tendencias y distribución de datos | Analizar tendencias y distribución de alertas del hato. | 5 |
| 16 | TS-05 | Enviar notificaciones de alerta | Integrar un servicio externo de mensajería para alertas críticas. | 3 |
| 17 | TS-03 | Optimizar el consumo energético | Ajustar la frecuencia de transmisión según el estado del animal. | 5 |
| 18 | US-06 | Consultar indicadores reproductivos | Mostrar variaciones de temperatura y actividad que requieran revisión. | 5 |
| 19 | US-12 | Compartir información clínica mediante servicios seguros | Exportar o consultar información autorizada mediante servicios seguros. | 5 |
| 20 | US-15 | Conocer la propuesta de SmartFarm | Comunicar el problema, la solución, los productos y los beneficios. | 3 |
| 21 | US-16 | Acceder a una acción según el segmento | Dirigir al visitante al canal o producto digital adecuado. | 2 |
| 22 | US-17 | Consultar planes de suscripción | Presentar planes relacionados con el tamaño de la unidad ganadera. | 5 |
| 23 | US-18 | Consultar términos y condiciones | Permitir el acceso a las condiciones legales y responsabilidades del servicio. | 2 |

**Evidencia del Product Backlog**

La evidencia debe incluir una captura del Product Backlog en la herramienta de gestión seleccionada por el equipo. La captura debe permitir verificar el orden, los identificadores, los títulos, la prioridad y el estado de las historias.

**Evidencia:**

**URL pública del Product Backlog**

**URL:** 
