const Info = ({ registros }) => {

  if (registros.length === 0) {
    return <p>No hay registros aún.</p>;
  }

  return (
    <div>
      <h2>Historial</h2>
      {registros.map((registro) => (
        <div key={registro.id}>
          <p>Fecha: {registro.fecha}</p>
          <p>Peso: {registro.peso} kg</p>
          <p>Altura: {registro.altura} cm</p>
          <p>IMC: {registro.imc}</p>
          <p>Categoría: {registro.categoria}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Info;