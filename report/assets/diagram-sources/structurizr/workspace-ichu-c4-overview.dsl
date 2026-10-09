workspace "ICHU" "C4 model of ICHU, the livestock IoT platform by SmartFarm" {

    !impliedRelationships false

    model {

        ranchManager = person "Ranch Manager" {
            description "Owner or manager of a cattle farm"
            tags "Person"
        }

        fieldOperator = person "Field Operator" {
            description "Person who performs livestock tasks in the field"
            tags "Person"
        }

        veterinarian = person "Veterinarian / Zootechnist" {
            description "Professional who advises authorized herds"
            tags "Person"
        }

        visitor = person "Prospective Customer" {
            description "Visitor who evaluates the platform and its plans"
            tags "Visitor"
        }

        cattleBandHardware = softwareSystem "Cattle Band Hardware" {
            description "ESP32 collar with temperature, motion and GPS sensors, Wi-Fi and BLE"
            tags "External,Hardware"
        }

        waterControllerHardware = softwareSystem "Water Temperature Controller Hardware" {
            description "ESP32 water-temperature sensor and heating actuator"
            tags "External,Hardware"
        }

        firebaseAuth = softwareSystem "Firebase Authentication" {
            description "External user authentication service"
            tags "External"
        }

        firebaseMessaging = softwareSystem "Firebase Cloud Messaging" {
            description "External push notification service"
            tags "External"
        }

        mapProvider = softwareSystem "Map Provider" {
            description "External map and geofence service"
            tags "External"
        }

        paymentProvider = softwareSystem "Payment Provider" {
            description "External subscription payment service"
            tags "External"
        }

        ichu = softwareSystem "ICHU" {
            description "Livestock management IoT platform"

            landingPageClient = container "Landing Page Browser Client" {
                technology "HTML + CSS + JavaScript"
                description "Renders the public website in the customer's browser"
                tags "BrowserClient"
            }

            webApplicationHosting = container "Web Application Hosting" {
                technology "Static Web Hosting"
                description "Serves the compiled Angular HTML, CSS and JavaScript files"
                tags "StaticHosting"
            }

            landingPage = container "Landing Page" {
                technology "HTML + CSS + JavaScript"
                description "Hosts the public website files, value proposition and plans"
                tags "StaticHosting"
            }

            webApplication = container "Web Application" {
                technology "Angular + TypeScript"
                description "Cattle-management SPA executed in the user's web browser"
                tags "BrowserClient"
            }

            mobileApplication = container "Mobile Application" {
                technology "Flutter + Dart"
                description "Monitoring, alerts and offline field operations"
                tags "Mobile"
            }

            cattleBandEmbeddedApp = container "Cattle Band Embedded Application" {
                technology "C++ on ESP32"
                description "Collar firmware that captures and transmits telemetry"
                tags "IoT"

            }

            waterControllerEmbeddedApp = container "Water Controller Embedded Application" {
                technology "C++ on ESP32"
                description "Water-trough firmware for measurement and heating"
                tags "IoT"

            }

            edgeGateway = container "Portable Edge Gateway" {
                technology "Flask + Peewee ORM on Python, running on Raspberry Pi or similar Edge Device"
                description "Portable offline gateway with later cloud synchronization"
                tags "Edge"

            }

            edgeDatabase = container "Edge Database" {
                technology "SQLite"
                description "Local telemetry, synchronization state and cached configuration"
                tags "Database,Edge"
            }

            backend = container "ICHU Web Service" {
                technology "ASP.NET Core Web API"
                description "Cloud REST API implemented as a modular monolith"
                tags "Monolith,API"

            }

            cloudDatabase = container "ICHU Cloud Database" {
                technology "PostgreSQL"
                description "Relational database with one schema per bounded context"
                tags "Database"
            }
        }

        ranchManager -> ichu "Manages cattle, devices, planning and subscriptions"

        fieldOperator -> ichu "Supervises cattle and records field tasks"

        veterinarian -> ichu "Reviews authorized animal health and history"

        visitor -> ichu "Reviews the value proposition and plans"

        cattleBandHardware -> ichu "Provides temperature, movement and position"

        waterControllerHardware -> ichu "Provides water temperature and actuator status"

        ichu -> firebaseAuth "Authenticates users"

        ichu -> firebaseMessaging "Sends push notifications"

        ichu -> mapProvider "Displays positions and geofences"

        ichu -> paymentProvider "Processes subscription payments"

        visitor -> landingPageClient "Browses the public website" "HTTPS"

        ranchManager -> webApplication "Manages cattle and reviews indicators" "HTTPS"
        ranchManager -> mobileApplication "Reviews cattle and receives alerts" "HTTPS"

        fieldOperator -> mobileApplication "Performs field tasks" "HTTPS / Local Network"

        veterinarian -> webApplication "Reviews authorized information" "HTTPS"
        veterinarian -> mobileApplication "Reviews information during a farm visit" "HTTPS"

        webApplication -> firebaseAuth "Authenticates the user" "HTTPS"
        mobileApplication -> firebaseAuth "Authenticates the user" "HTTPS"

        webApplication -> mapProvider "Displays positions and geofences" "HTTPS"
        mobileApplication -> mapProvider "Displays positions and geofences" "HTTPS"

        landingPageClient -> landingPage "Downloads public website files" "HTTPS"
        webApplication -> webApplicationHosting "Downloads the Angular SPA bundle" "HTTPS"
        landingPageClient -> webApplicationHosting "Opens the application URL" "HTTPS"

        landingPageClient -> backend "Requests plans and public content" "HTTPS / JSON"
        webApplication -> backend "Calls the REST API" "HTTPS / JSON"
        mobileApplication -> backend "Calls the REST API" "HTTPS / JSON"

        cattleBandEmbeddedApp -> cattleBandHardware "Reads sensors and position"

        cattleBandEmbeddedApp -> backend "Sends telemetry when Internet is available" "HTTPS / JSON"

        cattleBandEmbeddedApp -> edgeGateway "Sends offline telemetry over BLE" "Bluetooth Low Energy"

        edgeGateway -> edgeDatabase "Stores local telemetry and configuration" "SQLite"

        edgeGateway -> backend "Synchronizes when connectivity returns" "HTTPS / JSON"

        edgeGateway -> mobileApplication "Delivers local alerts without Internet" "Local Wi-Fi"

        waterControllerEmbeddedApp -> waterControllerHardware "Measures water and controls the heater"

        waterControllerEmbeddedApp -> backend "Reports temperature and actuator events" "HTTPS / JSON"

        backend -> cloudDatabase "Reads and writes cloud data" "Entity Framework Core / Npgsql"

        backend -> firebaseAuth "Validates user identity" "Firebase Admin SDK"

        backend -> firebaseMessaging "Requests push notifications" "Firebase Admin SDK"

        backend -> paymentProvider "Requests subscription payment" "HTTPS"

        firebaseMessaging -> mobileApplication "Delivers the notification to the device" "Push Notification"

        production = deploymentEnvironment "Production" {
            deploymentNode "Ranch / Grazing Environment" {
                deploymentNode "Cattle Band Device" {
                    technology "ESP32 + Wi-Fi + Bluetooth Low Energy"
                    containerInstance cattleBandEmbeddedApp
                }
                deploymentNode "Water Temperature Controller Device" {
                    technology "ESP32 + Wi-Fi"
                    containerInstance waterControllerEmbeddedApp
                }
                deploymentNode "Portable Edge Gateway Device" {
                    technology "Raspberry Pi or similar portable Edge computer with BLE and Wi-Fi"
                    containerInstance edgeGateway
                    containerInstance edgeDatabase
                }
                deploymentNode "Field Operator Mobile Device" {
                    technology "Android / iOS"
                    containerInstance mobileApplication
                }
            }

            deploymentNode "User Computer" {
                deploymentNode "Web Browser" {
                    technology "HTML, CSS and JavaScript execution"
                    containerInstance landingPageClient
                    containerInstance webApplication
                }
            }

            deploymentNode "Cloud Platform" {
                deploymentNode "Landing Page Web Hosting" {
                    technology "HTTPS static file hosting"
                    containerInstance landingPage
                }
                deploymentNode "Angular Application Web Hosting" {
                    technology "HTTPS static file hosting"
                    containerInstance webApplicationHosting
                }
                deploymentNode ".NET Application Runtime" {
                    technology ".NET / ASP.NET Core"
                    containerInstance backend
                }
                deploymentNode "PostgreSQL Database Host" {
                    technology "PostgreSQL"
                    containerInstance cloudDatabase
                }
            }

            deploymentNode "External Service Providers" {
                deploymentNode "Firebase Services" {
                    technology "Google Firebase"
                    softwareSystemInstance firebaseAuth
                    softwareSystemInstance firebaseMessaging
                }
                deploymentNode "Map Service Provider" {
                    technology "Managed HTTPS service"
                    softwareSystemInstance mapProvider
                }
                deploymentNode "Payment Service Provider" {
                    technology "Managed HTTPS service"
                    softwareSystemInstance paymentProvider
                }
            }
        }
    }

    views {

        systemLandscape "SystemLandscape" {
            title "ICHU - System Landscape"
            description "People, devices and external services surrounding the solution"

            include *

            autoLayout lr
        }

        systemContext ichu "SystemContext" {
            title "ICHU - System Context"
            description "Users, IoT hardware and external services interacting with ICHU"

            include ichu

            include ranchManager
            include fieldOperator
            include veterinarian
            include visitor

            include cattleBandHardware
            include waterControllerHardware

            include firebaseAuth
            include firebaseMessaging
            include mapProvider
            include paymentProvider

            autoLayout lr
        }

        container ichu "ContainerDiagram" {
            title "ICHU - Container Diagram"
            description "Browser clients, static hosting, mobile, IoT, Edge, Web Service and databases"

            include *

            autoLayout lr
        }

        deployment * production "ProductionDeployment" {
            title "ICHU - Production Deployment"
            description "Static hosting is separated from browser execution, Edge and cloud services"

            include *

            autoLayout lr
        }

        styles {

            element "Element" {
                shape RoundedBox
            }

            element "Person" {
                shape Person
                background #08427b
                color #ffffff
            }

            element "Visitor" {
                shape Person
                background #777777
                color #ffffff
            }

            element "Software System" {
                background #1168bd
                color #ffffff
            }

            element "Container" {
                background #438dd5
                color #ffffff
            }

            element "Monolith" {
                background #277da1
                color #ffffff
            }

            element "Database" {
                shape Cylinder
                background #f4a261
                color #000000
            }

            element "Hardware" {
                background #666666
                color #ffffff
            }

            element "External" {
                background #999999
                color #ffffff
            }

            element "IoT" {
                background #168aad
                color #ffffff
            }

            element "Edge" {
                background #2a9d8f
                color #ffffff
            }

            element "BrowserClient" {
                shape WebBrowser
            }

            element "StaticHosting" {
                shape Box
                background #35689c
                color #ffffff
            }

            element "Mobile" {
                shape MobileDeviceLandscape
            }

            element "Component" {
                background #85bbf0
                color #000000
            }

            element "Interface" {
                background #fff2cc
                color #000000
            }

            element "Application" {
                background #cfe2f3
                color #000000
            }

            element "DomainAggregate" {
                background #d9ead3
                color #000000
            }

            element "DomainService" {
                background #d0e0e3
                color #000000
            }

            element "Infrastructure" {
                background #f4cccc
                color #000000
            }

            element "ACL" {
                shape Component
                background #f8f8f8
                stroke #cccccc
                color #000000
            }
        }
    }
}
