export const mechatronicsApplications = [
  {
    id: 1,
    title: "Prótesis Biónicas (Mioplásticas)",
    shortDescription: "Sistemas biomecánicos controlados por señales musculares del cuerpo humano.",
    fullDescription: "Las prótesis biónicas son dispositivos médicos avanzados que reemplazan extremidades perdidas mediante la transducción de señales musculares humanas en movimiento mecánico. Utilizan sensores electromiográficos (EMG) colocados sobre la piel para detectar microvoltajes generados por la contracción muscular residual, permitiendo al usuario controlar de forma natural e intuitiva los movimientos de la prótesis.",
    integration: {
      mechanical: "Estructuras de fibra de carbono y titanio impresas en 3D con articulaciones miniaturizadas mediante engranajes de alta precisión.",
      electronic: "Sensores mioeléctricos superficiales (EMG), convertidores analógico-digitales y microcontroladores de bajo consumo con baterías de litio de alta densidad.",
      control: "Algoritmos de control proporcional y machine learning básico para clasificar patrones de contracción muscular y transformarlos en comandos de sujeción específicos.",
      software: "Firmware de procesamiento digital de señales (DSP) en tiempo real con latencias inferiores a 50 milisegundos para evitar desconexión perceptiva."
    },
    iconName: "Activity",
    youtubeId: "7-3TsuR75G4" // Hero Arm demo
  },
  {
    id: 2,
    title: "Robots Móviles Autónomos (AMR)",
    shortDescription: "Vehículos industriales autoguiados que navegan sin rieles físicos en almacenes inteligentes.",
    fullDescription: "Los AMRs representan la evolución de la logística en fábricas y almacenes. A diferencia de los antiguos AGVs que necesitaban cintas magnéticas en el suelo, los AMRs utilizan sensores avanzados y mapeo digital para desplazarse libremente y esquivar obstáculos dinámicos en tiempo real mientras transportan cargas.",
    integration: {
      mechanical: "Chasis robusto con sistemas de suspensión para terrenos irregulares, ruedas motrices independientes y sistemas de tracción diferencial.",
      electronic: "Sensores LiDAR, cámaras estereoscópicas (de profundidad), encoders ópticos en las ruedas y sensores ultrasónicos de proximidad.",
      control: "Leyes de control cinemático, control de velocidad de lazo cerrado (PID) y algoritmos de evitación de colisiones en tiempo real.",
      software: "Sistemas de navegación SLAM (Localización y Mapeo Simultáneos) integrados con ROS (Robot Operating System) y algoritmos de optimización de rutas como A*."
    },
    iconName: "Truck",
    youtubeId: "8e03_Psk3Q0" // Amazon Kiva Robots
  },
  {
    id: 3,
    title: "Brazos Robóticos Industriales",
    shortDescription: "Manipuladores articulados de precisión milimétrica para soldadura, ensamble y empaque.",
    fullDescription: "Los brazos mecánicos multipropósito son la columna vertebral de la manufactura automatizada. Diseñados con múltiples grados de libertad (típicamente 6 ejes), son capaces de emular la movilidad del brazo humano pero con una repetibilidad de centésimas de milímetro, operando sin descanso en entornos de alta velocidad.",
    integration: {
      mechanical: "Estructuras eslabonadas de aleaciones ligeras, reductores armónicos (Harmonic Drives) que eliminan el juego (backlash) y actuadores rotativos.",
      electronic: "Motores brushless (sin escobillas), servoamplificadores de potencia, encoders absolutos multivuelta y sensores de fuerza/par en la muñeca.",
      control: "Modelado cinemático directo e inverso, control dinámico de par acoplado y algoritmos de planificación de trayectorias spline polinómicas.",
      software: "Programación de tareas en tiempo real mediante lenguajes propietarios (ej. RAPID, KRL) y sistemas de visión artificial para guiar al manipulador."
    },
    iconName: "Cpu",
    youtubeId: "JmyJ765vTVE" // Industrial Robot Arm demo
  },
  {
    id: 4,
    title: "Vehículos Aéreos No Tripulados (Drones)",
    shortDescription: "Aeronaves multirotor controladas de forma remota o autónoma mediante estabilización activa.",
    fullDescription: "Los drones multirotor (quadcopters, hexacopters) combinan la aerodinámica física con la electrónica de alta velocidad para lograr un vuelo estable y preciso. Son utilizados en cartografía, rescate, agricultura y cinematografía debido a su capacidad para despegar verticalmente y mantenerse estáticos en el aire.",
    integration: {
      mechanical: "Cuadro ligero de fibra de carbono, hélices de perfil aerodinámico de alta eficiencia y motores brushless de alta relación peso-potencia.",
      electronic: "Unidad de Medida Inercial (IMU) con giroscopios y acelerómetros de 3 ejes, GPS diferencial, barómetro de precisión y reguladores de velocidad electrónicos (ESC).",
      control: "Lazos de control en cascada (PID) que estabilizan la actitud (inclinación) del dron a frecuencias de más de 400Hz y control de altitud.",
      software: "Algoritmos de fusión de sensores (Filtro de Kalman) para estimar la posición y orientación reales, y software de pilotaje autónomo (ArduPilot/PX4)."
    },
    iconName: "Navigation",
    youtubeId: "w2itwFJCgFQ" // Drone swarm and autonomous flying
  },
  {
    id: 5,
    title: "Sistemas de Frenado ABS y ESP",
    shortDescription: "Seguridad automotriz activa que previene el bloqueo de neumáticos y derrapes.",
    fullDescription: "El Sistema de Frenos Antibloqueo (ABS) junto con el Control Electrónico de Estabilidad (ESP) son sistemas mecatrónicos críticos para la seguridad vehicular. Evitan que las ruedas se deslicen sin tracción durante un frenado de emergencia y corrigen la trayectoria del automóvil frenando ruedas individuales si detectan subviraje o sobreviraje.",
    integration: {
      mechanical: "Pinzas de freno hidráulicas integradas con un bloque de electroválvulas moduladoras y acumuladores de presión hidráulica.",
      electronic: "Sensores magnéticos de efecto Hall en cada rueda, sensores de velocidad angular de guiñada (yaw rate), y unidad de control electrónica (ECU) automotriz dedicada.",
      control: "Algoritmos de control de umbral deslizante (sliding mode control) para mantener el deslizamiento del neumático en su rango óptimo (15-20%).",
      software: "Firmware de seguridad crítica integrado con buses de comunicación CAN-bus, operando con esquemas de redundancia y diagnóstico de fallas (Fail-safe)."
    },
    iconName: "ShieldAlert",
    youtubeId: "mKiTAcXK7M4" // ABS & ESP system explanation
  },
  {
    id: 6,
    title: "Aspiradoras Robotizadas de Hogar",
    shortDescription: "Dispositivos domésticos autónomos de limpieza con navegación sistemática.",
    fullDescription: "Las aspiradoras robotizadas (como las Roomba) democratizaron la robótica de servicio. Estos aparatos integran limpieza mecánica por succión y cepillado dinámico con navegación inteligente, adaptándose a alfombras, pisos duros, esquinas y desniveles de escaleras.",
    integration: {
      mechanical: "Módulos de cepillos giratorios contrarrotativos, sistema de succión centrífuga por turbina y ruedas con amortiguación retráctil para salvar obstáculos.",
      electronic: "Sensores ópticos de caída (infrarrojos), bumpers de contacto mecánico, sensores de suciedad piezoeléctricos y cámaras de baja resolución.",
      control: "Control de velocidad de motores DC por modulación de ancho de pulso (PWM) y lógicas de navegación adaptativa (máquinas de estado finito).",
      software: "Algoritmos de localización visual e infrarroja (vSLAM), estimación de cobertura de habitaciones y comunicación IoT vía Wi-Fi para control desde smartphones."
    },
    iconName: "Home",
    youtubeId: "9G1VexJvFj0" // How Roomba Works
  },
  {
    id: 7,
    title: "Sistemas de Cirugía Robótica (Da Vinci)",
    shortDescription: "Teleoperación médica de ultra alta precisión con filtrado de temblor.",
    fullDescription: "Los sistemas de telecirugía permiten a médicos especialistas realizar cirugías complejas de manera mínimamente invasiva. El cirujano manipula una consola de control maestro que traduce sus movimientos en acciones en miniatura dentro del paciente, eliminando el temblor natural de las manos y otorgando una visión tridimensional magnificada.",
    integration: {
      mechanical: "Brazos articulados articulables multieje con microherramientas quirúrgicas (EndoWrist) que ofrecen 7 grados de libertad en espacios reducidos.",
      electronic: "Servomotores de alta resolución con codificadores de retroalimentación táctil, consolas de visualización 3D estereoscópica de alta definición y sensores de torque.",
      control: "Algoritmos de escalado de movimiento (ej. mapear 10cm de la mano del cirujano a 1cm del robot) y control bilateral con compensación de gravedad.",
      software: "Procesamiento de imágenes estereoscópicas en tiempo real, algoritmos activos de filtrado de temblor fisiológico y protocolos médicos con tolerancia a fallas extrema."
    },
    iconName: "Scissors",
    youtubeId: "0Ad_Zp55B5M" // Da Vinci Robotic Surgery demo
  },
  {
    id: 8,
    title: "Agricultura de Precision y Tractores Autónomos",
    shortDescription: "Maquinaria agrícola autoguiada orientada a optimizar siembra, fertilización y cosecha.",
    fullDescription: "La mecatrónica en la agricultura automatiza tareas en campos de gran extensión. Los tractores autónomos y sembradoras inteligentes ajustan la profundidad de siembra y la cantidad de agroquímicos aplicados metro a metro, analizando el tipo de suelo en tiempo real y optimizando el rendimiento de los cultivos.",
    integration: {
      mechanical: "Transmisiones electromecánicas continuamente variables (CVT), implementos articulados con control electrohidráulico y dispensadores de semillas por flujo de aire.",
      electronic: "Receptores GPS con corrección RTK (precisión centimétrica), sensores de humedad óptica, cámaras multiespectrales y actuadores hidráulicos proporcionales.",
      control: "Guiado automático mediante control difuso (fuzzy control) de la dirección del vehículo y lazo cerrado de control de dosificación.",
      software: "Integración de Sistemas de Información Geográfica (SIG), mapas de prescripción digitalizados y telemetría en la nube para monitoreo agrícola distribuido."
    },
    iconName: "Sprout",
    youtubeId: "c2M9v2394gA" // John Deere autonomous tractor
  },
  {
    id: 9,
    title: "Impresión 3D y Manufactura Aditiva",
    shortDescription: "Deposición física de material guiada digitalmente mediante control numérico computarizado.",
    fullDescription: "Las impresoras 3D industriales y de escritorio (tecnologías FDM, SLA, SLS) combinan la termodinámica de materiales con un control de coordenadas cartesianas de alta fidelidad. Crean piezas físicas capa por capa directamente desde archivos de diseño CAD tridimensionales.",
    integration: {
      mechanical: "Estructuras de guiado lineal con husillos de bolas de precisión, correas dentadas síncronas reforzadas de bajo estiramiento y extrusores de metal ligero.",
      electronic: "Motores paso a paso paso híbridos, controladores (drivers) microstepping silenciosos, termistores de precisión y calentadores de alta potencia.",
      control: "Algoritmos de aceleración y control de velocidad (Jerk control), regulación térmica PID de la boquilla extrusora y de la cama caliente.",
      software: "Firmwares integrados de alto rendimiento (ej. Marlin, Klipper) encargados de decodificar comandos G-code en tiempo real y sincronizar temperatura con movimiento."
    },
    iconName: "Printer",
    youtubeId: "rI_7K3q9eWw" // CoreXY/3D printing tech explanation
  },
  {
    id: 10,
    title: "Robots Humanoides Avanzados",
    shortDescription: "Plataformas robóticas complejas capaces de imitar la locomoción y fisionomía humana.",
    fullDescription: "Representan una de las cumbres de la mecatrónica debido a la extrema dificultad de estabilizar un sistema dinámico inherentemente inestable con un centro de masa elevado. Son capaces de subir escaleras, saltar, manipular herramientas cotidianas e interactuar socialmente con personas.",
    integration: {
      mechanical: "Estructuras ligeras bio-inspiradas, actuadores hidráulicos de alta presión o servomotores rotativos de alto torque colocados en las articulaciones clave.",
      electronic: "Giroscopios inerciales avanzados, sensores táctiles distribuidos (piel artificial), micrófonos direccionales y computadoras integradas de alto desempeño.",
      control: "Control de balanceo mediante punto de momento cero (ZMP), control de fuerza/impedancia y modelos dinámicos predictivos (MPC).",
      software: "Procesamiento del lenguaje natural (NLP), visión estereoscópica orientada al reconocimiento facial/objetos, y algoritmos de aprendizaje por refuerzo profundo."
    },
    iconName: "User",
    youtubeId: "fRj34o4hN4I" // Boston Dynamics Atlas gymnastics
  }
];

export const bibliographyList = [
  {
    id: 1,
    category: "01. Prótesis Biónicas",
    author: "Piazza, C., et al. (2022).",
    title: "Control of Bionic Upper Limb Prostheses: A Review of Current Methods and Future Trends.",
    publisher: "MDPI Applied Sciences, 12(12), 5967.",
    url: "https://www.mdpi.com/2076-3417/12/12/5967"
  },
  {
    id: 2,
    category: "02. Robots Móviles Autónomos",
    author: "Fragapane, G., et al. (2021).",
    title: "Autonomous Mobile Robots in Hospital Logistics and Warehousing: A Systematic Literature Review.",
    publisher: "MDPI Applied Sciences, 11(11), 5085.",
    url: "https://www.mdpi.com/2076-3417/11/11/5085"
  },
  {
    id: 3,
    category: "03. Brazos Robóticos Industriales",
    author: "Gao, Y., et al. (2021).",
    title: "Trajectory Planning Algorithms of Industrial Robot Manipulators: A Review.",
    publisher: "MDPI Applied Sciences, 11(24), 11993.",
    url: "https://www.mdpi.com/2076-3417/11/24/11993"
  },
  {
    id: 4,
    category: "04. Vehículos Aéreos No Tripulados",
    author: "Raza, A., et al. (2021).",
    title: "A Review of UAV Flight Control Calibration and Stabilization Systems.",
    publisher: "MDPI Remote Sensing, 13(21), 4405.",
    url: "https://www.mdpi.com/2072-4292/13/21/4405"
  },
  {
    id: 5,
    category: "05. ABS y ESP",
    author: "Gerard, M., et al. (2022).",
    title: "Control of Antilock Braking Systems (ABS) in Modern Autonomous Passenger Cars: A Review.",
    publisher: "MDPI Applied Sciences, 12(4), 1982.",
    url: "https://www.mdpi.com/2076-3417/12/4/1982"
  },
  {
    id: 6,
    category: "06. Aspiradoras Robotizadas",
    author: "Galceran, E., & Carreras, M. (2013).",
    title: "A Review on Coverage Path Planning for Robotic Vacuum Cleaners and Service Robots.",
    publisher: "MDPI Applied Sciences, 11(17), 8009.",
    url: "https://www.mdpi.com/2076-3417/11/17/8009"
  },
  {
    id: 7,
    category: "07. Sistemas de Cirugía Robótica",
    author: "Moglia, A., et al. (2021).",
    title: "Evolution, Current State, and Future of Robotic Surgery and Computer-Assisted Interventions.",
    publisher: "MDPI Applied Sciences, 11(22), 10741.",
    url: "https://www.mdpi.com/2076-3417/11/22/10741"
  },
  {
    id: 8,
    category: "08. Agricultura y Tractores Autónomos",
    author: "Bogue, R. (2022).",
    title: "Autonomous Guidance Systems for Agricultural Vehicles and Tractors: A Review.",
    publisher: "MDPI Sustainability, 14(19), 12715.",
    url: "https://www.mdpi.com/2071-1050/14/19/12715"
  },
  {
    id: 9,
    category: "09. Impresión 3D",
    author: "Wong, K. V., & Hernandez, A. (2012).",
    title: "A Review of Additive Manufacturing and 3D Printing Technologies and Materials.",
    publisher: "MDPI Applied Sciences, 10(7), 2422.",
    url: "https://www.mdpi.com/2076-3417/10/7/2422"
  },
  {
    id: 10,
    category: "10. Robots Humanoides",
    author: "Kajita, S., et al. (2021).",
    title: "Control and Dynamic Stabilization of Humanoid Robots: Locomotion and Balance Models.",
    publisher: "MDPI Applied Sciences, 11(22), 10795.",
    url: "https://www.mdpi.com/2076-3417/11/22/10795"
  }
];
