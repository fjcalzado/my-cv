import { QrSvg } from "./qr.mock";

export const qr = {
  Svg: QrSvg,
  link: "",
};

export const headerInfo = {
  name: "Francisco Javier",
  surname1: "Calzado",
  surname2: "Rodríguez",
  title: "Technical Engineer in Telecommunications & Software Developer",
  titleHighlights: ["Telecommunications", "Developer"],
  birthdate: "16/02/1983",
  nationality: "Spanish",
  location: "Málaga, Spain",
  contact: {
    email: {
      label: "fjcalzadorodriguez@gmail.com",
      link: "mailto:fjcalzadorodriguez@gmail.com",
    },
    phone: {
      label: "(+34) 636 07 01 08",
      link: "tel:+0034636070108",
    },
    linkedin: {
      label: "es.linkedin.com/in/fjcalzado",
      link: "https://es.linkedin.com/in/fjcalzado",
    },
    github: {
      label: "github.com/fjcalzado",
      link: "https://github.com/fjcalzado",
    },
  },
};

export const headerLabels = {
  resume: "Resume / CV",
  birthdate: "Date of Birth",
  nationality: "Nationality",
  location: "Location",
};
