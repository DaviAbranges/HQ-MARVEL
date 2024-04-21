import { useEffect, useState } from "react";
import { fetchAllCharacters } from "../API/ComicApi";
import loadingImage from "../../public/loading-image.png";
import { Link } from "react-router-dom";
import type { Characters } from "../interfaces/characters";

function Characters() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await fetchAllCharacters();
        console.log(`data ${data}`);

        setCharacters(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar quadrinhos:", error);
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
        CHARACTERS MARVEL
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-2xl m-5">
        {characters.map((character) => (
          <Link key={character.id} to={`/characterdetails/${character.id}`}>
            <div className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent px-5">
                <p className="text-white font-bold text-lg">{character.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Characters;
