import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchComicById } from "../API/ComicApi";
import Comic from "../interfaces/comics";
import loadingImage from "../images/loading-image.png";

function ComicDetail() {
  const { id } = useParams(); // Obter o ID do quadrinho da URL
  const [comic, setComic] = useState<Comic | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<boolean>(false); // Declaração da variável 'expanded'

  useEffect(() => {
    const fetchComic = async () => {
      try {
        if (id) {
          console.log(id);

          const data = await fetchComicById(id);
          setComic(data[0]);
          setLoading(false);
        }
      } catch (error) {
        console.error("Erro ao buscar quadrinho:", error);
        setLoading(false);
      }
    };
    fetchComic();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center align-middle">
          <img
            src={loadingImage}
            alt="Loading"
            className="w-56 h-32 mb-4 animate-bounce"
          />
          <p className="text-3xl font-semibold text-gray-700">Carregando...</p>
        </div>
      </div>
    );
  }
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {comic && (
        <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl w-full">
          <h2 className="text-3xl font-semibold mb-4">{comic.title}</h2>
          <div className="flex items-center">
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="w-48 h-auto mr-8 rounded-lg"
            />
            <div className="flex flex-col">
              <div className="overflow-hidden max-w-full text-ellipsis mb-4">
                <p className="text-gray-800">
                  {comic.description
                    ? comic.description
                    : "Not found Description"}
                </p>
              </div>
              <div className="overflow-hidden max-w-full text-ellipsis mb-4">
                <h2 className="text-2xl font-semibold mb-2">Characters</h2>
                <ul className="character-list">
                  {comic.characters.items
                    .slice(0, expanded ? undefined : 5)
                    .map((comic, index) => (
                      <span key={index}>
                        <Link
                          to={`/comicdetails/${comic.resourceURI
                            .split("/")
                            .pop()}`}
                          className="text-blue-500 hover:underline"
                        >
                          {comic.name} <br></br>
                        </Link>
                      </span>
                    ))}
                </ul>
                {!expanded && comic.characters.items.length > 5 && (
                  <span>
                    <button
                      className=" my-9 text-zinc-950 hover:underline border border-stone-900 px-2 py-1 rounded focus:outline-none"
                      onClick={toggleExpand}
                    >
                      Ver Mais
                    </button>
                  </span>
                )}
                <h2 className="text-2xl font-semibold mb-2">CREATORS</h2>
                {comic.creators.items
                  .slice(0, expanded ? undefined : 5)
                  .map((comic, index) => (
                    <span key={index}>
                      <Link
                        to={`/comicdetails/${comic.resourceURI
                          .split("/")
                          .pop()}`}
                        className="text-blue-500 hover:underline"
                      >
                        {comic.name} <br></br>
                      </Link>
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ComicDetail;
