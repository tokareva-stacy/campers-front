export interface CamperImage {
  thumb: string;
  original: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  location: string;
  description: string;
  gallery: CamperImage[];
  rating: number;
  reviews: Review[];

  transmission?: string;
  engine?: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;

  form?: string;
  length?: string;
  width?: string;
  height?: string;
  tank?: string;
  consumption?: string;
}

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}