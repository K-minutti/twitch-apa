export type AuthenticationResponse = {
  authorized: boolean;
};

interface AlbumImage {
  url: string;
}

interface Album {
  images: AlbumImage[];
}

interface Artist {
  name: string;
}

export interface Track {
  album: Album;
  artists: Artist[];
  duration_ms: number;
  id: string;
  name: string;
  preview_url: string;
  uri: string;
}

export interface TracksResponse {
  href: string;
  items: Track[];
  limit: number;
  next: string;
  offset: number;
  pervious: null | string;
  total: number;
}

type SearchErrorMessage = { status: number; message: string };
export interface SearchError {
  error: SearchErrorMessage;
}

export interface EmptySearchResults {
  items: Track[];
}
