import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

export default function Curso() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [duracion, setDuracion] = useState('');
  const [fechaInicial, setFechaInicial] = useState('');
  const [fechaFinal, setFechaFinal] = useState('');
  const [tipoCurso, setTipoCurso] = useState('');
  const [estudiantes, setEstudiantes] = useState('');

  const handleCargarCurso = () => {
    console.log({
      titulo,
      descripcion,
      duracion,
      fechaInicial,
      fechaFinal,
      tipoCurso,
      estudiantes,
    });
    // Aquí puedes enviar los datos a una API u otra lógica necesaria
  };

  return (
    <div>
      <h1>CERTIFICADOS</h1>
      <form>
        <div>
          <label htmlFor="titulo">Título:</label>
          <br/>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <br/>
          <textarea
            id="descripcion"
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="duracion">Duración (horas):</label>
          <br/>
          <input
            type="number"
            id="duracion"
            name="duracion"
            min="20"
            max="80"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fecha_inicial">Fecha inicial:</label>
          <br/>
          <input
            type="date"
            id="fecha_inicial"
            name="fecha_inicial"
            value={fechaInicial}
            onChange={(e) => setFechaInicial(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fecha_final">Fecha final:</label>
          <br/>
          <input
            type="date"
            id="fecha_final"
            name="fecha_final"
            value={fechaFinal}
            onChange={(e) => setFechaFinal(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tipo_curso">Tipo de curso:</label>
          <br/>
          <select
            id="tipo_curso"
            name="tipo_curso"
            value={tipoCurso}
            onChange={(e) => setTipoCurso(e.target.value)}
          >
            <option value="Certificado">Certificado</option>
            <option value="Congreso">Congreso</option>
          </select>
        </div>
        <div>
          <label htmlFor="listado_estudiantes">Listado de estudiantes:</label>
          <br/>
          <input
            type="file"
            id="listado_estudiantes"
            name="listado_estudiantes"
          />
          <button type="button" id="cargar_estudiantes">Cargar</button>
        </div>
        <div>
          <button type="button" onClick={handleCargarCurso}>
            Guardar Curso
          </button>
        </div>
      </form>
    </div>
  );
}
