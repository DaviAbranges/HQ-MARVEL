import  { useEffect, useState } from 'react';
import getAll from '.././API/MainApi';
import Comic from '../interfaces/comics';

function IndexComponent(){
    const [comics, setComics] = useState<Comic[]>();
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
      const fetchComics = async () => {
        try {
          const data = await getAll();
          setComics(data);
          setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar quadrinhos:', error);
            setLoading(false)
        }
      };
      fetchComics();
    }, []);
    
    console.log('Ola comisdcs', comics);
    if (loading) {
        return <p>Carregando...</p>; // Exibe uma mensagem de carregamento enquanto a requisição está em andamento
      }
      return (
        <div>
            <h1>ALL COMICS</h1>
            {
                comics?.map((comic) => (
                    <div key={comic.id}>
                        <img src={`${comic.thumbnail.path}.jpg`}alt={comic.name} /> 
                        <p>{comic.name}</p>
                        <p>{comic.description}</p>
                        <button>More</button>
                    </div>
                ))
            }

            <button>View More</button>
        </div>
    )
}

export default IndexComponent;