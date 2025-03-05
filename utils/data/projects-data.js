// utils/data/projects-data.js
export const selectedProjects = [
  {
    title: "Smart Wearable for ACL Injury Prevention and Rehabilitation",
    description: "The system utilises MPU6050 sensors for joint angle measurement, EMG sensor for muscle activity monitoring. It leverages ESP32 for real-time data processing and IoT for communication  with a user-friendly Android Application featuring real-time feedback and injury risk alert system.",
    url: "https://ieeexplore.ieee.org/document/10730969",
    image: "/assets/projects/acl.png"
  },
  {
    title: "Crop Specific Smart Irrigation System with IoT",
    description: "This project implements a smart irrigation system using ESP32 microcontrollers to measure soil moisture, temperature, and rain detection data in real-time. The system sends data to a Firebase Realtime Database and adjusts water output based on predefined crop categories and moisture levels, ensuring efficient and automated irrigation.",
    url: "https://github.com/pratz222/Crop-Specific-Smart-Irrigation-System-with-IoT",
    image: "/assets/projects/irrigation.png"
  },
  {
    title: "IoT-Powered Medical Suit for Coma Patients",
    description: "This innovative suit seamlessly integrates an array of sensors to gather vital data on a patient's heart rate, brain activity, SPO2, muscle movement, body temperature, and even position. This real-time information is securely transmitted to a cloud platform for remote access and then is displayed on an Android App.",
    url: "https://github.com/pratz222/IoT-powered-Medical-Suit-for-Coma-Patients",
    image: "/assets/projects/coma.jpeg"
  },
  {
    title: "IoT-Enabled Mini Pollution Monitoring System",
    description: "The prototype uses the sensors MQ135, BMP280, DHT11 and an ESP32. It sends the data to a Real-time cloud database, which is then accessed by an Android app and a website. The entire hardware is compressed to the size of an iPod. The app provides real-time updates and alerts on air quality in a user-friendly interface: website and Smart home integration.",
    url: "https://github.com/pratz222/IoT-Enabled-Mini-Pollution-Monitoring-System-with-App-Website",
    image: "/assets/projects/pollution.png"
  },
  {
    title: "Dual-Axis Solar Tracker",
    description: "Dual-Axis Solar Tracker is a project that optimizes the energy output of solar panels by aligning them to face the sun directly throughout the day. The system rotates the solar panels both horizontally and vertically to ensure maximum exposure to sunlight, thereby maximizing energy generation. The tracker uses Light Dependent Resistors (LDRs) to detect the direction of the sun and adjusts the panel accordingly using servo motors.",
    url: "https://github.com/pratz222/Dual-Axis-Solar-Tracker-using-Arduino",
    image: "/assets/projects/solar_tracker.png"
  },
  {
    title: "CAN-based Advanced Driver Assistance System (ADAS)",
    description: "This system utilizes various sensors like LDR, temperature, ultrasonic, raindrop to collect real-time data and communicates via CAN bus at 500kbps between CAN nodes to activate appropriate actuators like DC fan, Servo motor, LED, OLED display for actions like automatic climate control, wipers, headlights, etc.",
    url: "https://github.com/pratz222/AutoMate-CAN-based-Advanced-Driver-Assistance-System-ADAS",
    image: "/assets/projects/can.png"
  }
];

