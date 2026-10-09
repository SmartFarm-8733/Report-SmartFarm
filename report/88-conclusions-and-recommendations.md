# Conclusiones

## Conclusiones y recomendaciones

### 1\. Resultado frente al Problem Statement

El *Problem Statement* de **ICHU** plantea que la gestión ganadera de pastoreo extensivo depende de inspecciones visuales discontinuas, marcas físicas y registros manuales en cuadernos o hojas de cálculo. Esta situación dificulta el seguimiento individual del ganado, la detección temprana de anomalías de salud y la toma de decisiones cuando la cobertura de red es intermitente o nula en el campo. La solución propuesta combina dispositivos de telemetría IoT, servicios de borde (*Edge Services / Edge API*), una RESTful API centralizada en la nube, y aplicaciones web y móviles para centralizar la información, emitir alertas operativas y asegurar la continuidad del trabajo en zonas remotas.

La investigación realizada en el Capítulo II (*Requirements Elicitation &amp; Analysis*) brinda evidencia cualitativa y cuantitativa que respalda la **existencia y relevancia del problema**:

* En el segmento de **Medianos y Grandes Ganaderos (Propietarios/Administradores)**, las tres entrevistas describen registros dispersos y conectividad irregular. En el cuestionario complementario de dos respuestas, una persona utiliza hojas de cálculo y otra registros manuales; ambas califican la plataforma centralizada como muy útil y prefieren el pago anual con tarifa fija.
* En el segmento de **Zootecnistas y Médicos Veterinarios**, las tres entrevistas respaldan la necesidad de datos biométricos continuos, antecedentes individuales y alertas que apoyen la evaluación profesional. El cuestionario complementario reúne tres respuestas y refuerza esa necesidad; no mide una mejora diagnóstica atribuible al producto.

La investigación comprende seis entrevistas, tres por segmento, y cuestionarios con dos ganaderos y tres profesionales. Estos resultados describen esta muestra y no representan porcentajes de todo el mercado. Los capataces y operarios son actores operativos de la solución, no un tercer segmento entrevistado.

**Arquitectura propuesta:** El collar transmite por BLE al *Portable Edge Gateway*, que procesa y almacena las lecturas en SQLite y evalúa reglas locales. El Edge sincroniza con la RESTful API central cuando dispone de Internet; la presencia de Wi-Fi no garantiza esa conectividad. La aplicación móvil consulta y atiende alertas por la red local. Esta ruta se mantiene también cuando hay cobertura y no contempla que el collar invoque directamente la nube.

**Alcance de la evidencia:** Los hallazgos respaldan la relevancia del problema y el interés declarado por la propuesta dentro de la muestra. No demuestran todavía aceptación comercial ni resultados de negocio o impacto operativo en producción; esos resultados requieren mediciones en pilotos.

---

### 2\. Assumptions frente al comportamiento observado y Objetivos de Validación Futura

Los hallazgos cualitativos y estadísticos del *Needfinding* respaldan de manera inicial los **supuestos de usuario y de negocio** (*User Assumptions* y *Business Assumptions*) del *Lean UX Process*:

* Los participantes expresan interés por la suscripción; las dos respuestas del cuestionario ganadero prefieren el pago anual con tarifa fija.
* Ambos segmentos solicitan antecedentes centralizados por animal para apoyar al profesional y al propietario.
* Las entrevistas respaldan la necesidad de operación sin cobertura y alertas ante anomalías térmicas o reproductivas.

Por el contrario, **permanecen como propuestas e hipótesis no demostradas** todos aquellos supuestos que requieren mediciones técnicas de laboratorio, pruebas de carga o resultados longitudinales de uso en producción. **No deben presentarse como resultados logrados**, sino como **objetivos de validación futura** que deberán verificarse mediante pilotos instrumentados en campo:

1. **Objetivos de impacto biológico y comercial:**
  * La reducción del 15 % en la tasa de mortalidad del ganado.
  * La meta de alcanzar 150 suscripciones activas durante el primer año de operación comercial.
  * La tasa de renovación del software superior al 92 % anual.
  * La reducción proyectada en el Costo de Adquisición de Clientes (CAC).
2. **Objetivos de hardware e infraestructura IoT:**
  * La autonomía energética de 3 años en la batería del collar o arete inteligente.
  * La precisión de lectura y calibración de los sensores biométricos de temperatura y acelerometría en condiciones climáticas extremas.
3. **Objetivos de rendimiento de software y borde:**
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

### 4. Recomendaciones para el Roadmap del Producto Digital

1. **Instrumentación de Pilotos en Campo:** Desplegar prototipos físicos de los nodos IoT integrados con el *Edge Service* en un entorno ganadero controlado para evaluar el consumo de energía en transmisión, la estabilidad del almacenamiento local en SQLite y la resiliencia del software ante caídas de tensión o señal.
2. **Ejecución de Pruebas de Estrés y Sincronización:** Diseñar suites de pruebas automatizadas e integración continua para simular ráfagas masivas de datos hacia la RESTful API cuando múltiples servicios de borde entren en cobertura simultáneamente, asegurando que la tasa de fallas se mantenga por debajo del límite objetivo.
3. **Optimización del procesamiento en el borde (Edge Computing):** Evaluar la incorporación de algoritmos livianos en el *Edge Service* para clasificar patrones de comportamiento (reposo, rumia, celo) de forma local, reduciendo el volumen de datos a transmitir hacia la nube y optimizando el uso de ancho de banda en zonas rurales.

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
