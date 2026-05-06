import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BmiForm from './components/BmiForm/BmiForm';

const App = () => {

  const [registros, setRegistros] = useState([]);

  const agregarRegistro = (datos) => {
    const nuevoRegistro = {
      id: uuidv4(),
      fecha: new Date().toLocaleDateString(),
      ...datos
    };
    setRegistros([...registros, nuevoRegistro]);
  };

  return (
    <div>
      <h1>BMI Tracker</h1>
      <BmiForm onAgregar={agregarRegistro} />
    </div>
  );
};

export default App;