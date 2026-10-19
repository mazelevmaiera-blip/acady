export type Language = 'FR' | 'EN';

export type ActivityId = 'lab' | 'voices' | 'tactics' | 'numbers' | 'studio';

export interface ActivityInfo {
  id: ActivityId;
  name: string;
  tagline: string;
  category: string;
  color: string;
  accentBg: string;
  borderColor: string;
  textColor: string;
  icon: string;
  description: string;
  benefits: {
    title: string;
    desc: string;
    icon: string;
  }[];
  deepDiveTitle: string;
  deepDiveDesc: string;
  tools: string[];
  specialties: string[];
  levels: {
    sem: string;
    name: string;
    project: string;
  }[];
  firstSemesterFocus: string;
  researchBasis: string;
}

export type BrainRegionId = 'frontal' | 'temporal' | 'limbique' | 'parietal' | 'occipital' | 'cervelet';

export interface BrainRegion {
  id: BrainRegionId;
  number: number;
  name: string;
  color: string;
  activities: ActivityId[];
  functions: string;
  description: string;
}

export interface CreatureStage {
  level: number;
  name: string;
  minXp: number;
  maxXp: number;
  imageAlt: string;
  description: string;
}
