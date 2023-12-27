import useFetchData from "./useFetchData";

interface Genre {
  id: number;
  name: string;
}

const useFetchGenres = () => useFetchData<Genre>("/genres");

export default useFetchGenres;
