export const calcularIMC = (peso, altura) => {
  const alturaEnMetros = altura / 100;
  const imc = peso / (alturaEnMetros * alturaEnMetros);
  return parseFloat(imc.toFixed(1));
};

export const obtenerCategoria = (imc) => {
  if (imc < 18.5) return 'Bajo peso';
  if (imc < 25)   return 'Normal';
  if (imc < 30)   return 'Sobrepeso';
  return 'Obesidad';
};