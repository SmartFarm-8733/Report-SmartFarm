# Conclusiones

## Conclusiones y recomendaciones

### 1\. Resultado frente al Problem Statement

El *Problem Statement* de **ICHU** plantea que la gestión ganadera de pastoreo extensivo depende de inspecciones visuales discontínuas, marcas físicas y registros manuales en cuadernos o hojas de cálculo. Esta situación dificulta el seguimiento individual del ganado, la detección temprana de anomalías de salud y la toma de decisiones cuando la cobertura de red es intermitente o nula en el campo. La solución propuesta combina dispositivos de telemetría IoT, servicios de borde (*Edge Services / Edge API*), una RESTful API centralizada en la nube, y aplicaciones web y móviles para centralizar la información, emitir alertas operativas y asegurar la continuidad del trabajo en zonas remotas.

La investigación realizada en el Capítulo II (*Requirements Elicitation &amp; Analysis*) brinda evidencia cualitativa y cuantitativa que respalda la **existencia y relevancia del problema**:

* En el segmento de **Medianos y Grandes Ganaderos (Propietarios/Administradores)**, el 100 % de los entrevistados utiliza registros manuales o hojas de cálculo tradicionales, reporta conectividad celular intermitente en sus predios, sufre pérdidas del 5 % al 10 % del valor del hato por detección tardía de enfermedades o extravíos, y califica como altamente útil una plataforma centralizada bajo modelo de suscripción.
* En el segmento de **Capataces y Operarios de Campo**, el 100 % requiere conocer de forma continua variables biométricas y de comportamiento que no puede medir manualmente (actividad, temperatura, rumia) y demanda de forma prioritaria que la aplicación móvil opere sin conexión a internet (*offline*).
* En el segmento de **Médicos Veterinarios**, el 100 % confirma que la ausencia de un historial biológico continuo reduce la efectividad del diagnóstico temprano en al menos un 40 %, valorando la disponibilidad de expedientes clínicos digitales y datos consolidados.

**Precisión en la Arquitectura:** Es importante precisar que la arquitectura de la solución **no establece una conexión directa e inmediata del collar o arete inteligente hacia la nube**. El flujo de datos contempla que los dispositivos embebidos (*Embedded Applications*) transmitan la telemetría localmente hacia los **Servicios de Borde (** **Edge Services / Edge API** **)**, los cuales realizan el procesamiento inicial, filtrado de eventos y almacenamiento en caché/base de datos local (SQLite) en el terreno. Únicamente cuando existe disponibilidad de red, los servicios de borde sincronizan los datos de forma asíncrona hacia la **RESTful API central** en la nube para alimentar a la **ICHU Web Application** y **ICHU Mobile Application**.

**Aclaración sobre el alcance de la validación:** Los hallazgos del informe validan la relevancia del problema y la aceptación de la estrategia del producto digital. Sin embargo, la investigación realizada no demuestra aún que la solución implementada alcance los resultados cuantitativos de negocio e impacto operativo previstos en producción real, los cuales permanecen como propuestas a verificar en fases posteriores.

---

### 2\. Assumptions frente al comportamiento observado y Objetivos de Validación Futura

Los hallazgos cualitativos y estadísticos del *Needfinding* respaldan de manera inicial los **supuestos de usuario y de negocio** (*User Assumptions* y *Business Assumptions*) del *Lean UX Process*:

* Se confirma la preferencia del mercado por planes de suscripción flexibles con tarifa fija por cabeza de ganado.
* Se valida la necesidad de una ficha clínica centralizada por animal accesible para el veterinario y el propietario.
* Se ratifica la exigencia de operación en zonas sin cobertura de red y la demanda de alertas automáticas ante anomalías térmicas o reproductivas.

Por el contrario, **permanecen como propuestas e hipótesis no demostradas** todos aquellos supuestos que requieren mediciones técnicas de laboratorio, pruebas de carga o resultados longitudinales de uso en producción. **No deben presentarse como resultados logrados**, sino como **objetivos de validación futura** que deberán verificarse mediante pilotos instrumentados en campo:

1. **Métricas de Impacto Biológico y Comercial (Pendientes de validación en campo):**
  * La reducción del 15 % en la tasa de mortalidad del ganado.
  * La meta de alcanzar 150 suscripciones activas durante el primer año de operación comercial.
  * La tasa de renovación del software superior al 92 % anual.
  * La reducción proyectada en el Costo de Adquisición de Clientes (CAC).
2. **Métricas de Hardware e Infraestructura IoT (Pendientes de validación física):**
  * La autonomía energética de 3 años en la batería del collar o arete inteligente.
  * La precisión de lectura y calibración de los sensores biométricos de temperatura y acelerometría en condiciones climáticas extremas.
3. **Métricas de Rendimiento de Software y Borde (Pendientes de pruebas de estrés y monitoreo):**
  * Una tasa de fallas del sistema informático inferior al 2 %.
  * Los tiempos de latencia en la entrega de notificaciones push de emergencia.
  * La tasa de éxito e integridad en la sincronización asíncrona entre el *Edge API* y la *RESTful API* central tras periodos prolongados de desconexión.

---

### 3. Hypothesis Statements y criterios de éxito

Las cuatro hipótesis definidas en el Capítulo I mantienen trazabilidad con las características priorizadas en los Capítulos II, III y IV:

| Hipótesis | Característica relacionada | Estado de la evidencia en AV1 |
|---|---|---|
| Biometric and GPS Tracking | Collar inteligente de bajo consumo con temperatura, actividad y posición | El problema y la necesidad fueron respaldados por entrevistas; la precisión, autonomía y utilidad aún no fueron probadas con un prototipo funcional. |
| Real-Time Alerts | Motor de alertas móviles y por mensaje de texto | La demanda de alertas fue recurrente en ambos segmentos; aún no se midieron tiempo de entrega, falsos positivos ni reducción de mortalidad. |
| Analytics Dashboard | Panel de indicadores, tendencias e historial biométrico | Se identificó la necesidad de reportes comparativos y datos continuos; aún no existe validación de tareas sobre un panel implementado. |
| Offline Operation | Almacenamiento local y sincronización al recuperar la señal | La conectividad irregular fue confirmada; aún faltan pruebas de campo sobre registros offline, conflictos y sincronizaciones exitosas. |

Por tanto, los criterios de éxito iniciales - uso frecuente de la aplicación, respuesta oportuna ante alertas críticas y reducción de pérdidas del ganado - deben considerarse objetivos de validación y no resultados alcanzados. AV1 entrega la especificación del problema, los requisitos y el diseño; no contiene todavía evidencia suficiente para declarar aceptadas o rechazadas las hipótesis.

### 3\. Recomendaciones para el Roadmap del Producto Digital

1. **Instrumentación de Pilotos en Campo:** Desplegar prototipos físicos de los nodos IoT integrados con el *Edge Service* en un entorno ganadero controlado para evaluar el consumo de energía en transmisión, la estabilidad del almacenamiento local en SQLite y la resiliencia del software ante caídas de tensión o señal.
2. **Ejecución de Pruebas de Estrés y Sincronización:** Diseñar suites de pruebas automatizadas e integración continua para simular ráfagas masivas de datos hacia la RESTful API cuando múltiples servicios de borde entren en cobertura simultáneamente, asegurando que la tasa de fallas se mantenga por debajo del límite objetivo.
3. **Optimización de Procesamiento en el Borde (** **Edge Computing** **):** Evaluar la incorporación de algoritmos livianos en el *Edge Service* para clasificar patrones de comportamiento (reposo, rumia, celo) de forma local, reduciendo el volumen de datos a transmitir hacia la nube y optimizando el uso de ancho de banda en zonas rurales.

### TB1

#### Conclusiones

#### Recomendaciones

## Video About-the-Team

### Propósito y contenido requerido

El video presenta la startup, el problema investigado, los artefactos de requisitos y diseño, la organización del trabajo colaborativo y las conclusiones del equipo.

### Pauta de secuencias

| Secuencia | Inicio sugerido | Contenido |
|---|---:|---|
| Presentación del equipo | 00:00:00 | Startup, producto ICHU, integrantes y roles |
| Proceso de investigación | 00:01:00 | Entrevistas, cuestionarios, Needfinding y hallazgos |
| Requisitos y diseño | 00:03:00 | User Stories, Impact Mapping, Bounded Contexts y arquitectura |
| Trabajo colaborativo | 00:05:00 | GitFlow, revisión de artefactos y organización del repositorio |
| Testimonios individuales | 00:07:00 | Actividades, Student Outcome y competencias de cada integrante |
| Cierre y próximos pasos | 00:13:00 | Roadmap, validaciones y aprendizajes del equipo |
