import { useEffect, useState } from "react";
import getAll from "../API/MainApi";
import Comic from "../interfaces/comics";
import ButtonNextPrev from "../components/ButtonsNextPrev";

function IndexComponent() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(8);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const data = await getAll(limit);
        setComics(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar quadrinhos:", error);
        setLoading(false);
      }
    };
    fetchComics();
  }, [limit]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="backdrop-brightness-150 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold gradient-text my-16 text-center">
        COMICS MARVEL
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-2xl m-5">
        {comics.map((comic) => (
          <a
            key={comic.id}
            className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent px-5">
              <p className="text-white font-bold text-lg">{comic.title}</p>
            </div>
          </a>
        ))}
      </div>
      <ButtonNextPrev
        increaseLimit={() => setLimit((prevLimit) => prevLimit + 8)}
      />
    </div>
  );
}

export default IndexComponent;
