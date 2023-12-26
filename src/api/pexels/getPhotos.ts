import {httpClient} from '@api/httpClient';

type Params = {
  page: number;
};

export type PhotoDetails = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
};

export type PhotosResponse = {
  total_results: number;
  page: number;
  per_page: number;
  photos: PhotoDetails[];
  next_page: string;
};

export async function getPhotos({page}: Params) {
  return httpClient.getRequest<PhotosResponse>(`/curated?page=${page}`);
}
