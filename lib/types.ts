interface PreviewData {
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface UrlData {
  urlId: string;
  longUrl: string;
  previewData: PreviewData;
}

export interface AllLinksData {
  urls: UrlData[];
}
