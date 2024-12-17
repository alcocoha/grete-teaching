import './List.css';

export const List = ({ data, color, size, estatusSemaforo }) => {
  const colorSemaforo = {
    avanza: 'green',
    precaucion: 'yellow',
    detente: 'red',
  };

  return (
    <>
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
