export interface User {
  id: string;
  name: string;
}

export interface Comment {
  id: string;
  author: User;
  date: number;
  text: string;
}

export interface Feature {
  id: string;
  author: User;
  name: string;
  description: string;
  status: string;
  likes: number;
  dislikes: number;
  comments: Comment[];
  children: Feature[];
}

export interface Release {
  id: string;
  name: string;
  description: string;
  author: User;
  type: string;
  tags: string[];
  date: number;
  downloadUrl: string;
  features: Feature[];
  comments: Comment[];
}

export interface Notification {
  id: string;
  title: string;
  date: number;
  read: boolean;
}
