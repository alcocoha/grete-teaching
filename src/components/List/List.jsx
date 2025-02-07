import { useEffect } from 'react';
import './List.css';

export const List = ({ data, color, size, estatusSemaforo, name }) => {
  const colorSemaforo = {
    avanza: 'green',
    precaucion: 'yellow',
    detente: 'red',
  };

  useEffect(() => {
    console.log('Se monto componente list', name);

    if (name !== 'lista 1') {
      console.log(
        'CONSULTE UN NUEVO ENPOINT https://pokeapi.co/api/v2/pokemon/BLABLABLA'
      );
    }

    return () => {
      console.log('Se desmonto componente list', name);
    };
  }, [name]);

  return (
    <>
      <h2>{name}</h2>
      <ul className="lista" style={{ backgroundColor: color, fontSize: size }}>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <div
        className="semaforo"
        style={{ backgroundColor: colorSemaforo[estatusSemaforo] }}
      ></div>
    </>
  );
};
