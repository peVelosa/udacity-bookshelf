// Define types for nested objects

type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

type IndustryIdentifier = {
  type: string;
  identifier: string;
};

type PanelizationSummary = {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
};

type ReadingModes = {
  text: boolean;
  image: boolean;
};

export type BookVolume = {
  allowAnonLogging: boolean;
  authors: string[];
  averageRating: number;
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  id: string;
  imageLinks: ImageLinks;
  industryIdentifiers: IndustryIdentifier[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: PanelizationSummary;
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  ratingsCount: number;
  readingModes: ReadingModes;
  shelf: string;
  subtitle: string;
  title: string;
};
