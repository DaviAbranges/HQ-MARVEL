import { useEffect, useState } from "react";
import { fetchAllComics } from "../API/ComicApi";
import Comic from "../interfaces/comics";
import loadingImage from "../images/loading-image.png";
import { Link } from "react-router-dom";

function Comics() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const data = await fetchAllComics();
        console.log(`data ${data}`);

        setComics(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar quadrinhos:", error);
        setLoading(false);
      }
    };
    fetchComics();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="text-center align-middle">
          <img
            src={loadingImage}
            alt="Loading"
            className="w-56 h-32 mb-4 animate-bounce"
          />
          <p className="text-3xl font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="backdrop-brightness-150 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold gradient-text my-16 text-center">
        COMICS MARVEL
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-2xl m-5">
        {comics.map((comic) => (
          <Link key={comic.id} to={`/comicdetails/${comic.id}`}>
            <div className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent px-5">
                <p className="text-white font-bold text-lg">{comic.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Comics;
