import React, { useState, ChangeEvent, FormEvent } from 'react';

const CursoComponent: React.FC = () => {
  const [nombreCurso, setNombreCurso] = useState<string>('');
  const [duracionCurso, setDuracionCurso] = useState<string>('');
  const [cursoDictadoPor, setCursoDictadoPor] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>('');
  const [cursoImagen, setCursoImagen] = useState<FileList | null>(null);
  const [firmaImagenes, setFirmaImagenes] = useState<FileList | null>(null);

  const handleNombreCursoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNombreCurso(e.target.value);
  };

  const handleDuracionCursoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDuracionCurso(e.target.value);
  };

  const handleCursoDictadoPorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCursoDictadoPor(e.target.value);
  };

  const handleDescripcionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescripcion(e.target.value);
  };

  const handleCursoImagenChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCursoImagen(e.target.files);
    }
  };

  const handleFirmaImagenesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFirmaImagenes(e.target.files);
    }
  };

  const handleCargarImagenCursoClick = () => {
    const input = document.getElementById('imagenCursoInput');
    if (input) {
      input.click();
    }
  };

  const handleCargarFirmasClick = () => {
    const input = document.getElementById('firmaImagenesInput');
    if (input) {
      input.click();
    }
  };

  const handleRegistrarCursoClick = (e: FormEvent) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para enviar los datos y las imágenes al servidor
    console.log('Nombre del curso:', nombreCurso);
    console.log('Duración del curso:', duracionCurso);
    console.log('Curso dictado por:', cursoDictadoPor);
    console.log('Descripción:', descripcion);
    console.log('Imagen del curso:', cursoImagen);
    console.log('Firmas (imágenes):', firmaImagenes);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Agregar Curso</h2>
      <form onSubmit={handleRegistrarCursoClick}>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Nombre del Curso</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={nombreCurso}
            onChange={handleNombreCursoChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Duración del Curso</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={duracionCurso}
            onChange={handleDuracionCursoChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Curso dictado por</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={cursoDictadoPor}
            onChange={handleCursoDictadoPorChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Descripción</label>
          <textarea
            className="w-full p-2 border rounded-md"
            value={descripcion}
            onChange={handleDescripcionChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Imagen del Curso</label>
          <input
            id="imagenCursoInput"
            type="file"
            accept="image/*"
            onChange={handleCursoImagenChange}
            className="hidden"
            required
          />
          <button
            type="button"
            onClick={handleCargarImagenCursoClick}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Cargar Imagen del Curso
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Firmas (Imágenes)</label>
          <input
            id="firmaImagenesInput"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFirmaImagenesChange}
            className="hidden"
            required
          />
          <button
            type="button"
            onClick={handleCargarFirmasClick}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Cargar Firmas
          </button>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Registrar Curso
        </button>
      </form>
    </div>
  );
};

export default CursoComponent;
