export interface INatureReporters {
  url: string;
  author: string;
  description: string;
}

export interface ITerm {
  phrase: string;
  list: Pick<INatureReporters, "url" | "description">[];
}
