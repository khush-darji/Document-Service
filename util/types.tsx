export interface Document {
  title: string;
  description: string;
  chapters: Chapter[];
  confidential?: boolean;
}

export interface Chapter {
  title: string;
  content: string;
}
