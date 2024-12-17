import { useState } from 'react';
import { List } from '../../components/List/List';
import { Button } from '../../components/Button/Button';

function PaginaDeListado() {
  const [data, setData] = useState([]);
  const [indices, setIndices] = useState([]);

  const getData = async () => {
    // Hago el request a la API
    const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');

    // Convierto la respuesta a JSON
    const resultadoResponse = await result.json();

    const abilities = resultadoResponse.abilities.map((item) => ({
      name: item.ability.name,
    }));

    const gameIndices = resultadoResponse.game_indices.map((item) => ({
      name: item.game_index,
    }));

    // Guardo los datos en el estado
    setData(abilities);
    setIndices(gameIndices);
  };

  return (
    <>
      <h1>hola demo</h1>
      <Button onClick={getData} label="Obtener datos" />
      <List data={data} color="red" size={10} estatusSemaforo="precaucion" />
      <List data={indices} color="yellow" size={20} estatusSemaforo="detente" />
    </>
  );
}

export default PaginaDeListado;
