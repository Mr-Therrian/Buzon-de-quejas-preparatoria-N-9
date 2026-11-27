
const nombre = prompt("¿Cuál es tu nombre?");

const texto = "mucho gusto en conocerte. Esperamos que esta página sea de tu agrado y la disfrutes mucho, y si no es así ¡No nos importa! Bonito día.";

if (nombre === null || nombre.trim() === "") {
  saludo.textContent = `Hola, ${texto}`;
} else {
  const nombreLimpio = nombre.trim();
  const nombreBonito = nombreLimpio.charAt(0).toUpperCase() + nombreLimpio.slice(1);
  saludo.textContent = `Hola ${nombreBonito}, ${texto}`;
}