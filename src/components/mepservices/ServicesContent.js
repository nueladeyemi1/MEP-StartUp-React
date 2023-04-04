import mechanicalIcon from './ServiceImg/icons8-gear-100.png'
import electricalIcon from './ServiceImg/icons8-electrical-80.png'
import pipingIcon from './ServiceImg/icons8-pipe-60.png'

export const serviceContents = [
  {
    id: 0,
    serviceTitle: "Mechanical",
    serviceText: `We have in depth knowledge in the field of Mechanical Engineering in the construction industry.  As mechanical consulting engineers, we offer the following services:
`,
    serviceList: [
      "Air conditioning & ventilation",
      "Lifts, Hoists and Escalators",
      "Building Audit & Specialists Reports",
      "Refrigeration Design and Supervision",
      "Smoke Ventilation and Extraction System",
      "Value Engineering",
    ],
    serviceIcon: `${mechanicalIcon}`,
    serviceDelay: "0",
    buttons: ["Plumbing", "HVAC", "Fire Fighting", "Gas Layout", "BMS"],
    serviceList1: [
      ["Air conditioning & ventilation"],
      ["Lifts, Hoists and Escalators"],
      ["Building Audit & Specialists Reports"],
      ["Refrigeration Design and Supervision"],
      ["Smoke Ventilation axxxxon System"],
    ],
    mechanical: [
      {
        id: 1,
        title: "HVAC",
        serviceListContent: [
          "Chilled water system (Water cooled chillers, air cooled chillers, primary and secondary closed loop system) Variable Refrigerants Flow (VRF)",
          "Variable Air Volume (VAV)",
          "Air handling units, fan coil units (Two or four pipes system)",
          "Energy recovery wheel system",
          "DX-Split units systems",
          "Under floor treatment systems",
          "Totally fresh air cooling system",
          "Low temperature/humidity system",
          "Hot water boilers, steam boilers, heat exchangers",
        ],
      },
      {
        id: 2,
        title: "Plumbing",
        serviceListContent: [
          "Gravity/direct boosting domestic water distribution",
          "Centralized/decentralized hot water systems",
          "Solar/steam hot water systems",
          "Domestic water treatment station",
          "Sanitary waste and vent",
          "Storm drainage network",
          "Grey water system",
          "Sewage treatment plant",
          "Medical gazes system (Compressed air, CO2, nitrogen, oxygen, argon, vacuum, helium, natural gas, nitrous oxide, waste anesthetic gas disposal)",
        ],
      },
      {
        id: 3,
        title: "FireFighting",
        serviceListContent: [
          "Design of sprinkler system",
          "Design of fire suppression systems (FM 200, CO2, dry powder)",
          "Stand pipe class-I (Landing valve)",
          "Stand pipe class-II (Fire hose cabinet)",
          "Stand pipe class-III (Combined system)",
          "Smoke management system",
        ],
      },
      {
        id: 4,
        title: "Gas Layout",
        serviceListContent: [
          " (VRF)",
          "Variable Air Volume (VAV)",
          "Air handling units, fan coil units (Two or four pipes system)",
          "Energy recovery wheel system",
          "DX-Split units systems",
          "Under floor treatment systems",
          "Totally fresh air cooling system",
          "Low temperature/humidity system",
          "Hot water boilers, steam boilers, heat exchangers",
        ],
      },
      {
        id: 5,
        title: "BMS",
        serviceListContent: [
          "Integration of different building utility systems into one platform that helps for a centralized monitoring and controlling of the distributed systems from one location",
          "Understanding the client's and projects requirements for the BMS system",
          "Identifying the design criteria",
          "Generating the documents to capture the required BMS system",
          "Developing the I/O list and network",
          "Production of layouts details and schematic diagram",
        ],
      },
    ],
  },

  {
    id: 1,
    serviceTitle: "Electrical",
    serviceText: `Our team of Electrical Consulting Engineers have years of experience and offer highly quality services in the following Electrical Engineering services:

`,
    serviceList: [
      "Lighting Services: Indoor and Outdoor Lighting",
      "Fire Alarm and Detection System",
      "Lightning, Earthing and Bonding Protection System",
      "Voice, Data, Networking & Communication System",
      "Security: Access Control & CCTV System",
      "Arc Flash and Power Quality",
      "Raw & Clean Power Distribution System",
      "Acoustic and Public Address System",
      "Renewable Energy",
      "Value Engineering",
      "Energy Audit",
      "Building Automation System",
      "Value Engineering",
    ],
    serviceIcon: `${electricalIcon}`,
    serviceDelay: "200",
    buttons: [
      "Lighting",
      "Power System",
      "Data Center",
      "Fire Alarm",
      "Low Current System",
    ],
    serviceList1: [
      ["Air conditioning & ventilation"],
      ["Lifts, Hoists and Escalators"],
      ["Building Audit & Specialists Reports"],
      ["Refrigeration Design and Supervision"],
      ["aaaaaaaaaaaaaaaaaaaaaaaaaaa"],
    ],
    mechanical: [
      {
        id: 6,
        title: "Lighting system",
        serviceListContent: [
          "Conventional lighting systems",
          "Stage and theaters lighting system",
          "Intelligent lighting systems (KNX, DALI, etc,...)",
          "Emergency lighting system",
          "Software simulation and scenes",
        ],
      },
      {
        id: 7,
        title: "Power system",
        serviceListContent: [
          "Medium voltage switchgears and protections",
          "MV, LV transformers",
          "Feeders/cabling sizing",
          "Back up supply for critical loads",
          "Diesel generators",
          "Gas turbines",
          "Panel boards and motor control centers",
          "Low voltage distribution system including short circuit and voltage drop",
          "Earth system & Lightning protection system",
        ],
      },
      {
        id: 8,
        title: "Data centers",
        serviceListContent: [
          "Tiers 1, 2, 3, 4 type",
          "Structured cabling",
          "Power systems",
          "Cooling systems",
          "Security systems",
          "Environmental monitoring systems",
        ],
      },
      {
        id: 9,
        title: "Fire alarm system",
        serviceListContent: [
          "Fire alarm and detection system",
          "F&G system for power plants",
          "Cause and effect matrix",
        ],
      },
      {
        id: 10,
        title: "Low current system",
        serviceListContent: [
          "Structured Cabling Network (SCN)",
          "Telephone system",
          "Intrusion and access control system",
          "Building management system",
          "Parking management system",
          "Closed Circuit Television system(CCTV)",
          "Public Address (PA)",
          "Audio Visual (AV) & Multimedia Information system",
          "Master Antenna & Community Distribution TV (SMATV & CATV)",
          "Digital Clock system",
          "Nurse Call system",
          "Hotel Intelligent system",
          "Vertical transport calculation",
        ],
      },
    ],
  },
  //   {
  //     id: 2,
  //     serviceTitle: 'Piping',
  //     serviceText: `As Piping Consulting Engineers, we offer the following Piping Engineering design services:

  // `,
  //     serviceList: [
  //       'Domestic Hot & Cold Water Distribution Systems (Including Fountains/Water Features and Water Treatment Plant)',
  //       'Drainage Systems (Including Rain Water Disposal, Industrial Waste Drainage and Sewage Pumping/Treatment)',
  //       'Kitchen/Laundry',
  //       'Swimming Pool',
  //       'Fuel Oil Storage and Distribution',
  //       'Fire Fighting (Fire Extinguishers, hose Reels/Dry & Wet Risers/Sprinklers/Gas & Foam - FM200)',
  //     ],
  //     serviceIcon: `${pipingIcon}`,
  //     serviceDelay: '400',
  //   },
];



export const subServices = [
  [
    {
      id: 0,
      buttonName: "Plumbing",
      serviceList: [
        "Air conditioning & ventilation",
        "Lifts, Hoists and Escalators",
        "Building Audit & Specialists Reports",
        "Refrigeration Design and Supervision",
        "Smoke Ventilation and Extraction System",
        "Value Engineering",
      ],
    },
    {
      id: 1,
      buttonName: "Plumbing",
      serviceList: [
        "Air conditioning & ventilation",
        "Lifts, Hoists and Escalators",
        "Building Audit & Specialists Reports",
        "Refrigeration Design and Supervision",
        "Smoke Ventilation and Extraction System",
        "Value Engineering",
      ],
    },
    {
      id: 2,
      buttonName: "Plumbing",
      serviceList: [
        "Air conditioning & ventilation",
        "Lifts, Hoists and Escalators",
        "Building Audit & Specialists Reports",
        "Refrigeration Design and Supervision",
        "Smoke Ventilation and Extraction System",
        "Value Engineering",
      ],
    },
  ],
  [
    {
      id: 0,
      buttonName: "Plumbing",
      serviceList: [
        "Air conditioning & ventilation",
        "Lifts, Hoists and Escalators",
        "Building Audit & Specialists Reports",
        "Refrigeration Design and Supervision",
        "Smoke Ventilation and Extraction System",
        "Value Engineering",
      ],
    },
    {
      id: 1,
      buttonName: "Plumbing",
      serviceList: [
        "Air conditioning & ventilation",
        "Lifts, Hoists and Escalators",
        "Building Audit & Specialists Reports",
        "Refrigeration Design and Supervision",
        "Smoke Ventilation and Extraction System",
        "Value Engineering",
      ],
    },
    {
      id: 2,
      buttonName: "Plumbing",
      serviceList: [
        "Air conditioning & ventilation",
        "Lifts, Hoists and Escalators",
        "Building Audit & Specialists Reports",
        "Refrigeration Design and Supervision",
        "Smoke Ventilation and Extraction System",
        "Value Engineering",
      ],
    }
  ]
];