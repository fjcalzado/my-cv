export interface HeaderQR {
  Svg: React.ComponentType<{ className: string }>;
  link: string;
}

export interface HeaderLink {
  link: string;
  label?: string;
}

export interface HeaderInfo {
  name: string;
  surname1: string;
  surname2: string;
  title: string;
  titleHighlights?: string[];
  birthdate: string;
  nationality: string;
  location: string;
  contact: {
    email: HeaderLink;
    phone: HeaderLink;
    linkedin: HeaderLink;
    github: HeaderLink;
  };
}

export interface HeaderLabels {
  resume: string;
  birthdate: string;
  nationality: string;
  location: string;
}
