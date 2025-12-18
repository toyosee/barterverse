export interface Persona {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  color: string;
}

export interface Sector {
  title: string;
  description: string;
  icon: string; // Lucide icon name
  tags: string[];
}

export interface BarterMatchResult {
  exchangeStrategy: string;
  potentialPathways: string[];
  estimatedValue: string;
  recommendedDuration: string;
}