export interface Distributor {
  name: string;
  region: string;
  type: 'online' | 'tienda' | 'restaurante';
  url?: string;
}

export interface TequilaProduct {
  id: string;
  name: string;
  type: 'Blanco' | 'Añejo' | 'Cristalino';
  tagline: string;
  description: string;
  colorHex: string;
  abv: string;
  aging: string;
  origin: string;
  visualNotes: string;
  aromaNotes: string[];
  tasteNotes: string[];
  priceCOP: string;
  priceUSD: string;
  distributors: Distributor[];
}

export interface SpecialEdition {
  id: string;
  name: string;
  tagline: string;
  bottleTheme: string;
  details: string;
  socialImpactContext: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  hasGoldFlakes: boolean;
  tastingHighlights: string[];
}

export interface SocialProject {
  id: string;
  title: string;
  location: string;
  description: string;
  impactMetric: string;
  iconName: string;
}
