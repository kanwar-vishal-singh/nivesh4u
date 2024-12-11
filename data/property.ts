import { Property } from "@/types/property";

export const propertyData: Property[] = [
  {
    id: "comm-1",
    title: "Modern Commercial Complex in Bandra West",
    description: "Premium commercial space featuring state-of-the-art facilities, modern architecture, and strategic location. Perfect for businesses looking for a prestigious address in Mumbai's prime commercial district.",
    type: "commercial",
    price: 25000000,
    location: {
      address: "Plot 45, Linking Road",
      city: "Mumbai",
      state: "Maharashtra",
      nearbyPlaces: [
        { name: "Bandra Station", distance: "0.5 km", type: "transport" },
        { name: "International Airport", distance: "12 km", type: "transport" },
        { name: "Phoenix Mall", distance: "2 km", type: "shopping" }
      ]
    },
    size: "2000 sq.ft",
    amenities: [
      { name: "24/7 Security", description: "Round-the-clock security with CCTV surveillance", icon: "shield" },
      { name: "Parking", description: "Reserved parking spaces with valet service", icon: "car" },
      { name: "High-speed Internet", description: "Fiber-optic connectivity", icon: "wifi" },
      { name: "Green Building", description: "Energy-efficient design", icon: "tree" }
    ],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
    ],
    owner: {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      email: "rajesh@nivesh4u.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      experience: "15+ years",
      properties: 12
    },
    features: [
      "Premium Location",
      "Modern Architecture",
      "High ROI Potential",
      "Ready for Possession"
    ],
    yearBuilt: 2022,
    status: "available"
  },
  {
    id: "res-1",
    title: "Luxury Apartment in South Mumbai",
    description: "Elegant 3BHK apartment with premium finishes, sea view, and world-class amenities. Located in one of Mumbai's most prestigious neighborhoods.",
    type: "residential",
    price: 45000000,
    location: {
      address: "Tower A, Sea Breeze Heights",
      city: "Mumbai",
      state: "Maharashtra",
      nearbyPlaces: [
        { name: "Marine Drive", distance: "1 km", type: "landmark" },
        { name: "Churchgate Station", distance: "0.8 km", type: "transport" },
        { name: "Premium Hospitals", distance: "2 km", type: "healthcare" }
      ]
    },
    size: "1800 sq.ft",
    amenities: [
      { name: "Swimming Pool", description: "Temperature controlled infinity pool", icon: "droplet" },
      { name: "Gym", description: "Fully equipped fitness center", icon: "dumbbell" },
      { name: "Security", description: "Multi-tier security system", icon: "shield" },
      { name: "Club House", description: "Premium recreational facilities", icon: "users" }
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
    ],
    owner: {
      name: "Priya Mehta",
      phone: "+91 98765 43213",
      email: "priya@nivesh4u.com",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      experience: "10+ years",
      properties: 18
    },
    features: [
      "Sea View",
      "Premium Finishes",
      "Valet Parking",
      "High-end Security"
    ],
    yearBuilt: 2021,
    status: "available"
  },
  {
    id: "agr-1",
    title: "Premium Agricultural Land in Nashik",
    description: "Fertile agricultural land with excellent water resources and road connectivity. Perfect for agricultural ventures and farming projects.",
    type: "agricultural",
    price: 7500000,
    location: {
      address: "Survey No. 123, Nashik-Pune Highway",
      city: "Nashik",
      state: "Maharashtra",
      nearbyPlaces: [
        { name: "Nashik City", distance: "15 km", type: "city" },
        { name: "Highway Access", distance: "1 km", type: "transport" },
        { name: "Water Reservoir", distance: "3 km", type: "utility" }
      ]
    },
    size: "5 Acres",
    amenities: [
      { name: "Water Supply", description: "Year-round water availability", icon: "droplet" },
      { name: "Road Access", description: "Direct highway connectivity", icon: "road" },
      { name: "Power Supply", description: "3-phase electricity connection", icon: "zap" },
      { name: "Storage", description: "Built-in storage facility", icon: "warehouse" }
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
    ],
    owner: {
      name: "Suresh Patel",
      phone: "+91 98765 43211",
      email: "suresh@nivesh4u.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      experience: "20+ years",
      properties: 8
    },
    features: [
      "Fertile Soil",
      "Irrigation System",
      "Farm House",
      "Storage Facility"
    ],
    yearBuilt: 2020,
    status: "available"
  },
  {
    id: "ind-1",
    title: "Industrial Plot in MIDC Pune",
    description: "Strategic industrial plot with excellent infrastructure and connectivity. Ideal for manufacturing units and warehouses.",
    type: "industrial",
    price: 18000000,
    location: {
      address: "Plot No. 45, MIDC Phase II",
      city: "Pune",
      state: "Maharashtra",
      nearbyPlaces: [
        { name: "Pune Airport", distance: "10 km", type: "transport" },
        { name: "Container Depot", distance: "5 km", type: "logistics" },
        { name: "Highway Access", distance: "2 km", type: "transport" }
      ]
    },
    size: "1500 sq.ft",
    amenities: [
      { name: "Power Supply", description: "Industrial power connection", icon: "zap" },
      { name: "Water Connection", description: "Industrial water supply", icon: "droplet" },
      { name: "Security", description: "24x7 industrial park security", icon: "shield" },
      { name: "Loading Bay", description: "Built-in loading/unloading bay", icon: "truck" }
    ],
    images: [
      "https://images.unsplash.com/photo-1553434320-e9f5757140b1?w=800&q=80",
      "https://images.unsplash.com/photo-1553434320-e9f5757140b1?w=800&q=80",
      "https://images.unsplash.com/photo-1553434320-e9f5757140b1?w=800&q=80"
    ],
    owner: {
      name: "Amit Shah",
      phone: "+91 98765 43212",
      email: "amit@nivesh4u.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      experience: "12+ years",
      properties: 5
    },
    features: [
      "Industrial Zone",
      "Power Backup",
      "Security System",
      "Loading Area"
    ],
    yearBuilt: 2021,
    status: "available"
  },
  {
    id: "comm-2",
    title: "Premium Office Space in BKC",
    description: "Modern office space in Mumbai's premier business district with world-class amenities and excellent connectivity.",
    type: "commercial",
    price: 35000000,
    location: {
      address: "The Capital, BKC",
      city: "Mumbai",
      state: "Maharashtra",
      nearbyPlaces: [
        { name: "BKC Station", distance: "0.3 km", type: "transport" },
        { name: "International Airport", distance: "8 km", type: "transport" },
        { name: "Five Star Hotels", distance: "1 km", type: "hospitality" }
      ]
    },
    size: "2500 sq.ft",
    amenities: [
      { name: "24/7 Access", description: "Round-the-clock building access", icon: "clock" },
      { name: "Conference Rooms", description: "Fully equipped meeting spaces", icon: "users" },
      { name: "Premium Lobby", description: "Elegant reception area", icon: "building" },
      { name: "IT Infrastructure", description: "Enterprise-grade connectivity", icon: "wifi" }
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    ],
    owner: {
      name: "Vikram Singh",
      phone: "+91 98765 43214",
      email: "vikram@nivesh4u.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      experience: "18+ years",
      properties: 15
    },
    features: [
      "Prime Location",
      "24/7 Security",
      "Ample Parking",
      "Modern Design"
    ],
    yearBuilt: 2020,
    status: "available"
  },
  {
    id: "res-2",
    title: "Premium Villa in Lonavala",
    description: "Luxurious 4BHK villa with private pool, garden, and panoramic valley views. Perfect for a weekend getaway or permanent residence.",
    type: "residential",
    price: 55000000,
    location: {
      address: "Palm Valley, Lonavala",
      city: "Pune",
      state: "Maharashtra",
      nearbyPlaces: [
        { name: "Lonavala Station", distance: "3 km", type: "transport" },
        { name: "Market Area", distance: "2 km", type: "shopping" },
        { name: "Tourist Spots", distance: "5 km", type: "recreation" }
      ]
    },
    size: "4000 sq.ft",
    amenities: [
      { name: "Private Pool", description: "Temperature controlled pool", icon: "droplet" },
      { name: "Landscaped Garden", description: "Professional landscaping", icon: "tree" },
      { name: "Smart Home", description: "Automated home systems", icon: "smartphone" },
      { name: "Security", description: "Gated community security", icon: "shield" }
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
    ],
    owner: {
      name: "Anjali Desai",
      phone: "+91 98765 43215",
      email: "anjali@nivesh4u.com",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      experience: "8+ years",
      properties: 6
    },
    features: [
      "Valley View",
      "Private Pool",
      "Smart Home",
      "Luxury Finishes"
    ],
    yearBuilt: 2023,
    status: "available"
  }
];