export const siteConfig = {
  name: "Inaya Estates",
  company: "Inaya Estates",
  tagline: "Your Trusted Land Investment Partner",
  description:
    "Inaya Estates is a premium land investment consultancy helping buyers, sellers and investors with verified land opportunities, legal guidance and complete documentation support across the Bhiwadi to Alwar Delhi NCR growth corridor.",
  url: "https://www.inayaestates.com",
  ogImage: "https://www.inayaestates.com/opengraph-image",
  contacts: [
    { name: "Shaukin", phone: "+91-9145800263", phoneDisplay: "+91 91458 00263" },
    { name: "Mislu", phone: "+91-9602300263", phoneDisplay: "+91 96023 00263" },
  ],
  phone: "+91-9145800263",
  phoneDisplay: "+91 91458 00263",
  whatsapp: "919145800263",
  emails: ["businessinside9@gmail.com"],
  email: "businessinside9@gmail.com",
  address: {
    street: "BA-004, Near Chanderlok City, Tijara-Alwar Road",
    city: "Tijara",
    region: "Rajasthan",
    postalCode: "",
    country: "IN",
  },
  geo: {
    latitude: 27.9333,
    longitude: 76.85,
  },
  sameAs: [
    "https://www.facebook.com/inayaestates",
    "https://www.instagram.com/inayaestates",
    "https://www.linkedin.com/company/inaya-estates",
    "https://www.youtube.com/@inayaestates",
  ],
  serviceAreas: [
    "Bhiwadi",
    "Tijara",
    "Tapukara",
    "Khushkhera",
    "Neemrana",
    "Alwar",
  ],
  keywords: [
    "land for sale in Bhiwadi",
    "land investment consultant NCR",
    "plots in Neemrana",
    "Tijara land investment",
    "Khushkhera industrial land",
    "Tapukara plots",
    "Alwar property",
    "Alwar land consultant",
    "agricultural land NCR",
    "residential plots Bhiwadi",
    "commercial land Neemrana",
    "Delhi Mumbai Expressway land",
    "RIICO industrial plots",
    "Inaya Estates",
    "land investment consultancy Rajasthan",
    "industrial land Delhi NCR corridor",
  ],
};

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}
