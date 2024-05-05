export const fetchAllComics = async () => {
  const ApiKey = "3676268a5af11f3478fd9568aa2bdb92";
  const timesTamps = "1712888248";
  const hash = "9485855d9fd63086c6dfddf47731e505"; // Calcula o hash
  const url = `http://gateway.marvel.com/v1/public/comics?ts=${timesTamps}&apikey=${ApiKey}&hash=${hash}&limit=100`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao buscar dados da API");
    }
    const data = await response.json();
    console.log(data.data.results);
    return data.data.results;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};

export const fetchComicById = async (id: string) => {
  const ApiKey = "3676268a5af11f3478fd9568aa2bdb92";
  const timesTamps = "1712888248";
  const hash = "9485855d9fd63086c6dfddf47731e505"; // Calcula o hash
  const url = `http://gateway.marvel.com/v1/public/comics/${id}?ts=${timesTamps}&apikey=${ApiKey}&hash=${hash}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao buscar dados da API");
    }
    const data = await response.json();
    console.log(data.data.results);
    return data.data.results;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
export const fetchAllCharacters = async () => {
  const ApiKey = "3676268a5af11f3478fd9568aa2bdb92";
  const timesTamps = "1712888248";
  const hash = "9485855d9fd63086c6dfddf47731e505"; // Calcula o hash
  const url = `http://gateway.marvel.com/v1/public/characters?ts=${timesTamps}&apikey=${ApiKey}&hash=${hash}&limit=100`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao buscar dados da API");
    }
    const data = await response.json();
    console.log(data.data.results);
    return data.data.results;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};

export const fetchCharacterById = async (id: string) => {
  const ApiKey = "3676268a5af11f3478fd9568aa2bdb92";
  const timesTamps = "1712888248";
  const hash = "9485855d9fd63086c6dfddf47731e505"; // Calcula o hash
  const url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=${timesTamps}&apikey=${ApiKey}&hash=${hash}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao buscar dados da API");
    }
    const data = await response.json();
    console.log(data.data.results);
    return data.data.results;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
