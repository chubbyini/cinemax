import { useSearchParams } from "react-router-dom";
import { useFetch } from "../Hooks/UseFetch";
import { Card } from "../Components";
import { useTitle } from "../Hooks/useTitle";
import { useEffect } from "react";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath,queryTerm);
  useTitle(`Search result for: ${queryTerm}`);
  useEffect(() => {
    if (queryTerm) {
      document.title = `Search result for: ${queryTerm} / Cinemate`;
    }
  }, [queryTerm]);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">       
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}
