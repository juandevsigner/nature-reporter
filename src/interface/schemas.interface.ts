export interface INatureReporters {
  url: string;
  author: string;
  description: string;
}

export interface ITerm extends Pick<INatureReporters, "description" | "url"> {}
