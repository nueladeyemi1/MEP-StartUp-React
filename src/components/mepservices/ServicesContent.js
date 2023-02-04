import mechanicalIcon from './ServiceImg/icons8-gear-100.png'
import electricalIcon from './ServiceImg/icons8-electrical-80.png'
import pipingIcon from './ServiceImg/icons8-pipe-60.png'

export const serviceContents = [
  {
    id: 0,
    serviceTitle: 'Mechanical',
    serviceText: `We have in depth knowledge in the field of Mechanical Engineering in the construction industry.  As mechanical consulting engineers, we offer the following services:
`,
    serviceList: [
      'Air conditioning & ventilation',
      'Lifts, Hoists and Escalators',
      'Building Audit & Specialists Reports',
      'Refrigeration Design and Supervision',
      'Smoke Ventilation and Extraction System',
      'Value Engineering',
    ],
    serviceIcon: `${mechanicalIcon}`,
    serviceDelay: '0',
  },
  {
    id: 1,
    serviceTitle: 'Electrical',
    serviceText: `Our Electrical Consulting Engineers offer quality services in the following Electrical Engineering services:

`,
    serviceList: [
      'Lighting Services: Indoor and Outdoor Lighting',
      'Fire Alarm and Detection System',
      'Lightning, Earthing and Bonding Protection System',
      'Voice, Data, Networking & Communication System',
      'Security: Access Control & CCTV System',
      'Arc Flash and Power Quality',
      'Raw & Clean Power Distribution System',
      'Acoustic and Public Address System',
      'Renewable Energy',
      'Value Engineering',
      'Energy Audit',
      'Building Automation System',
      'Value Engineering',
    ],
    serviceIcon: `${electricalIcon}`,
    serviceDelay: '200',
  },
  {
    id: 2,
    serviceTitle: 'Piping',
    serviceText: `As Piping Consulting Engineers, we offer the following Piping Engineering design services:

`,
    serviceList: [
      'Domestic Hot & Cold Water Distribution Systems (Including Fountains/Water Features and Water Treatment Plant)',
      'Drainage Systems (Including Rain Water Disposal, Industrial Waste Drainage and Sewage Pumping/Treatment)',
      'Kitchen/Laundry',
      'Swimming Pool',
      'Fuel Oil Storage and Distribution',
      'Fire Fighting (Fire Extinguishers, hose Reels/Dry & Wet Risers/Sprinklers/Gas & Foam - FM200)',
    ],
    serviceIcon: `${pipingIcon}`,
    serviceDelay: '400',
  },
]
