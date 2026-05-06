import { useState } from 'react';

const BmiForm = () => {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  return (
    <div>
      <h2>Calculadora de IMC</h2>

      <label>Peso (kg)</label>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <label>Altura (cm)</label>
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <button>Calcular</button>
    </div>
  );
};

export default BmiForm;