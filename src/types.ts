export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  priceInfo?: string;
  iconName: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  category: 'area' | 'kuliner' | 'pemancingan' | 'aktivitas';
  title: string;
  description: string;
  imageUrl: string;
}
