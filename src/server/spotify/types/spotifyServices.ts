export type TracksResponse = {
  href: string;
  items: any[];
  limit: number;
  next: string;
  offset: number;
  pervious: null | string;
  total: number;
};

export type SearchResults = {
  tracks: TracksResponse;
};
