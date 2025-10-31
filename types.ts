import type { ComponentType } from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface Service {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface TeamMember {
  photoUrl: string;
  name: string;
  credentials: string[];
}

export interface LeadMagnet {
  type: string;
  title: string;
  description: string;
  disclaimer: string;
  path: string;
  isDownload?: boolean;
  downloadFilename?: string;
}