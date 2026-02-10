export type TechDetails = {
  logo: string;
  darkModeLogo?: string;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  logo: string;
  darkModeLogo?: string;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string;
  bulletPoints: string[];
};

export type ProjectDetails = {
  name: string;
  description: string;
  url?: string;
  videoUrl?: string;
  previewImage: string;
  technologies: string[];
};

export type TestimonialDetails = {
  personName: string;
  personAvatar?: string;
  testimonial: string;
  title: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  address?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
};
