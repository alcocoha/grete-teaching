import { useState, useEffect, useCallback } from 'react';
import { List } from '../../components/List/List';
import { Button } from '../../components/Button/Button';
import { useRequest } from '../../hooks/useRequest';

function PaginaDeListado() {
  const [data, setData] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);
  const [indices, setIndices] = useState([]);
  const [cambiarNombre, setCambiarNombre] = useState('Lista 2');
  const { foo, valorDelHook, getRequest } = useRequest();

  const getData = async () => {
    const result = await getRequest('https://pokeapi.co/api/v2/pokemon/ditto');

    const abilities = result.abilities.map((item) => ({
      name: item.ability.name,
    }));

    const gameIndices = result.game_indices.map((item) => ({
      name: item.game_index,
    }));

    // Guardo los datos en el estado
    setData(abilities);
    setIndices(gameIndices);
  };

  return (
    <>
      <h1>hola demo - {valorDelHook}</h1>
      <Button onClick={() => foo(1)} label="Disparar Hook 1" />
      <Button onClick={() => foo(3)} label="Disparar Hook 2" />
      <Button
        onClick={() => setMostrarLista(!mostrarLista)}
        label="Mostrar lista"
      />
      <Button onClick={getData} label="Obtener datos" />
      <Button
        onClick={() => setCambiarNombre('Gretel')}
        label="Cambiar nombre"
      />
      <List
        data={data}
        color="red"
        size={10}
        estatusSemaforo="precaucion"
        name="lista 1"
      />
      {mostrarLista && (
        <List
          data={indices}
          color="yellow"
          size={20}
          estatusSemaforo="detente"
          name={cambiarNombre}
        />
      )}
    </>
  );
}

export default PaginaDeListado;
