import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComicById } from "../API/ComicApi";
import Comic from "../interfaces/comics";
import loadingImage from "../../public/loading-image.png";

function ComicDetail() {
  const { id } = useParams(); // Obter o ID do quadrinho da URL
  const [comic, setComic] = useState<Comic | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  return (
    <div className="backdrop-brightness-150 min-h-screen flex flex-col items-center justify-center">
      {comic && (
        <div className="p-8 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">{comic.title}</h2>
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
            className="w-64 h-auto mb-4"
          />
          <p className="text-gray-800">
            {comic.description ? comic.description : "Not found Description"}
          </p>

          {comic.characters.items.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Characters:</h2>
              <ul>
                {comic.characters.items.map((characters, index) => (
                  <li key={index}>
                    <p>{characters.name}</p>
                    <a href="">{characters.resourceURI}</a>
                    {characters.resourceURI}
                  </li>
                ))}
              </ul>
              <h2>CREATORS</h2>
              {comic.creators.items.map((creator, index) => (
                <li key={index}>
                  <a>{creator.resourceURI}</a>
                  <p>{creator.name}</p>
                  <p>{creator.role}</p>
                </li>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ComicDetail;
