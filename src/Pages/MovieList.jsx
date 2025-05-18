import { useFetch } from "../Hooks/UseFetch";
import { Card } from "../Components";
import { useTitle } from "../Hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies, loading, error } = useFetch(apiPath);
  useTitle(title); // We don't need to store PageTitle unless you're rendering it.

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        {loading && <p className="text-white">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))
          ) : (
            !loading && <p className="text-white">No movies found.</p>
          )}
        </div>
      </section>
    </main>
  );
};
