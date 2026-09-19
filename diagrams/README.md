# Diagramas del informe

Código fuente de los diagramas del Capítulo IV, elaborados bajo el enfoque Diagram-as-Code. Las imágenes generadas se publican en `images/diagrams/`.

## Estructura

```
diagrams/
├── puml/           16 diagramas UML y ERD en PlantUML
└── structurizr/    modelo C4 completo en Structurizr DSL
```

## PlantUML

Contiene los siete diagramas de clases del Domain Layer, los siete diagramas de base de datos y los dos Context Map.

| Archivo | Diagrama | Imagen generada |
|---|---|---|
| `class-iam.puml` | Domain Layer de Identity & Access Management | `images/diagrams/class-iam.png` |
| `class-cattle.puml` | Domain Layer de Cattle Information | `images/diagrams/class-cattle.png` |
| `class-iot.puml` | Domain Layer de IoT Assets | `images/diagrams/class-iot.png` |
| `class-monitoring.puml` | Domain Layer de Operations & Monitoring | `images/diagrams/class-monitoring.png` |
| `class-planning.puml` | Domain Layer de Planning | `images/diagrams/class-planning.png` |
| `class-analytics.puml` | Domain Layer de Dashboard & Analytics | `images/diagrams/class-analytics.png` |
| `class-subscription.puml` | Domain Layer de Subscription Plans | `images/diagrams/class-subscription.png` |
| `db-iam.puml` … `db-subscription.puml` | Diagramas de base de datos, uno por esquema | `images/diagrams/db-*.png` |
| `context-map.puml` | Relaciones entre Bounded Contexts | `images/diagrams/context-map.png` |
| `context-map-external.puml` | Integraciones con el borde y servicios externos | `images/diagrams/context-map-external.png` |

### Cómo regenerar las imágenes

Requiere Java 17 o superior y `plantuml.jar`, que se descarga desde el sitio oficial de PlantUML.

```
java -jar plantuml.jar -charset UTF-8 -tpng -o ../../images/diagrams diagrams/puml/*.puml
```

El parámetro `-charset UTF-8` es obligatorio: sin él, PlantUML lee los archivos con la codificación por defecto del sistema y las tildes de las etiquetas en español se corrompen.

Los archivos incluyen la directiva `!pragma layout smetana`, que usa el motor de trazado interno de PlantUML y evita tener que instalar Graphviz.

### Alternativa sin instalar nada

El código de cualquiera de los archivos puede pegarse en el editor en línea de PlantUML para obtener la misma imagen.

## Structurizr

`workspace-smartfarm-c4.dsl` contiene el modelo C4 completo de la solución: cuatro personas, seis sistemas externos, nueve containers, setenta y tres componentes y veinticinco vistas.

### Cómo regenerar las imágenes

El contenido del archivo se pega en el editor en línea de Structurizr DSL. Cada vista se exporta como PNG y se guarda en `images/diagrams/c4/` respetando los nombres que ya usa el Capítulo IV.

| Vista en el DSL | Archivo esperado |
|---|---|
| `SystemLandscape` | `c4-system-landscape.png` |
| `SystemContext` | `c4-system-context.png` |
| `ContainerDiagram` | `c4-container.png` |
| `ProductionDeployment` | `c4-deployment.png` |
| `IdentityComponents` | `c4-components-identity.png` |
| `CattleComponents` | `c4-components-cattle.png` |
| `IoTAssetsComponents` | `c4-components-iot-assets.png` |
| `MonitoringComponents` | `c4-components-monitoring.png` |
| `PlanningComponents` | `c4-components-planning.png` |
| `AnalyticsComponents` | `c4-components-analytics.png` |
| `SubscriptionComponents` | `c4-components-subscription.png` |
| `CattleBandComponents` | `c4-components-cattle-band.png` |
| `EdgeGatewayComponents` | `c4-components-edge-gateway.png` |
| `WaterControllerComponents` | `c4-components-water-controller.png` |
| Vistas dinámicas | `c4-flow-*.png` |

Las imágenes con sufijo `-key` son las leyendas de notación que Structurizr genera junto a cada diagrama.

## Convenciones

Los **nombres de elementos** se mantienen en inglés, por corresponder a los Bounded Contexts y a los términos del Ubiquitous Language definidos en el Capítulo II.

Las **descripciones y etiquetas de relación** se redactan en español, por dirigirse al mismo público que lee el informe.

Cada descripción del workspace se mantiene en una sola línea y por debajo de los noventa caracteres, para que el texto no desborde las cajas al renderizar.
