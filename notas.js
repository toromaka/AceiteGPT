const urlParams = new URLSearchParams(window.location.search);
const curso = urlParams.get("curso") || "Curso";
document.getElementById("curso-nombre").textContent = curso;

const notasPorCurso = {
  "Bases de Datos II": [
    { nombre: "Nota 1 (35%)", valor: 15, peso: 0.35 },
    { nombre: "Nota 2 (15%)", valor: 10, peso: 0.15 },
    { nombre: "Nota 3 (35%)", valor: 8, peso: 0.35 },
    { nombre: "Nota 4 (15%)", valor: 11, peso: 0.15 }
  ],
  "IA para Negocios": [
    { nombre: "Nota 1 (35%)", valor: 17, peso: 0.35 },
    { nombre: "Nota 2 (15%)", valor: 7, peso: 0.15 },
    { nombre: "Nota 3 (35%)", valor: 7, peso: 0.35 },
    { nombre: "Nota 4 (15%)", valor: 14, peso: 0.15 }
  ],
  "Algoritmos Recursivos": [
    { nombre: "Nota 1 (35%)", valor: 13, peso: 0.35 },
    { nombre: "Nota 2 (15%)", valor: 13, peso: 0.15 },
    { nombre: "Nota 3 (35%)", valor: 13, peso: 0.35 },
    { nombre: "Nota 4 (15%)", valor: 11, peso: 0.15 }
  ],
  "IA y Domótica": [
    { nombre: "Nota 1 (35%)", valor: 13, peso: 0.35 },
    { nombre: "Nota 2 (15%)", valor: 11, peso: 0.15 },
    { nombre: "Nota 3 (35%)", valor: 13, peso: 0.35 },
    { nombre: "Nota 4 (15%)", valor: 12, peso: 0.15 }
  ],
  "Seguridad de Datos": [
    { nombre: "Nota 1 (35%)", valor: 13, peso: 0.35 },
    { nombre: "Nota 2 (15%)", valor: 13, peso: 0.15 },
    { nombre: "Nota 3 (35%)", valor: 12, peso: 0.35 },
    { nombre: "Nota 4 (15%)", valor: 14, peso: 0.15 }
  ]
};

const notas = notasPorCurso[curso] || [];
const lista = document.getElementById("notas-lista");
let promedio = 0;

notas.forEach(nota => {
  promedio += nota.valor * nota.peso;
  const item = document.createElement("li");
  item.textContent = `${nota.nombre}: ${nota.valor}`;
  lista.appendChild(item);
});

document.getElementById("promedio-final").textContent = `Promedio final: ${promedio.toFixed(2)} = ${promedio.toFixed(0)}`;

