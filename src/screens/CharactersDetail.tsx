import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterById } from "../API/ComicApi";
import loadingImage from "../images/loading-image.png";
import { Characters } from "../interfaces/characters";
import { Link } from "react-router-dom";

function CharactersDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Characters | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    const fetchComic = async () => {
      try {
        if (id) {
          const data = await fetchCharacterById(id);
          setCharacter(data[0]);
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
        <div className="text-center">
          <img
            src={loadingImage}
            alt="Loading"
            className="w-32 h-32 mb-4 animate-spin"
          />
          <p className="text-lg font-semibold text-gray-700">Carregando...</p>
        </div>
      </div>
    );
  }

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {character && (
        <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl w-full">
          <h2 className="text-3xl font-semibold mb-4">{character.name}</h2>
          <div className="flex items-center">
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              className="w-48 h-auto mr-8 rounded-lg"
            />
            <div className="flex flex-col">
              <div className="overflow-hidden max-w-full text-ellipsis mb-4">
                <p className="text-gray-800">
                  {character.description
                    ? character.description
                    : "Descrição não encontrada"}
                </p>
              </div>
              <div className="overflow-hidden max-w-full text-ellipsis mb-4">
                <h2 className="text-2xl font-semibold mb-2">Comics</h2>
                <p className="text-gray-800">
                  {character.comics.items
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
                  {!expanded && character.comics.items.length > 5 && (
                    <span>
                      <button
                        className="text-blue-500 hover:underline focus:outline-none"
                        onClick={toggleExpand}
                      >
                        Ver Mais
                      </button>
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CharactersDetail;
