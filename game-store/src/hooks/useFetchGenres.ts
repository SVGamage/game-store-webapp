import useFetchData from "./useFetchData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useFetchGenres = () => useFetchData<Genre>("/genres");

export default useFetchGenres;
