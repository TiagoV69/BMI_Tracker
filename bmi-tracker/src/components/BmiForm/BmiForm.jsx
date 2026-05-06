import { useState } from 'react';
import { calcularIMC, obtenerCategoria } from '../../helpers/bmi';

const BmiForm = ({ onAgregar }) => {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleCalcular = () => {
    if (!peso || !altura) return;

    const imc = calcularIMC(peso, altura);
    const categoria = obtenerCategoria(imc);

    setResultado({ imc, categoria });
    onAgregar({ imc, categoria, peso, altura });

    setPeso('');
    setAltura('');
  };

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

      <button onClick={handleCalcular}>Calcular</button>

      {resultado && (
        <div>
          <p>Tu IMC es: {resultado.imc}</p>
          <p>Categoría: {resultado.categoria}</p>
        </div>
      )}
    </div>
  );
};

export default BmiForm;