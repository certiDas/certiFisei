import React, { useState, ChangeEvent, FormEvent } from 'react';

const Firma: React.FC = () => {
  const [nombres, setNombres] = useState<string>('');
  const [apellidos, setApellidos] = useState<string>('');
  const [imagen, setImagen] = useState<File | null>(null);

  const handleNombresChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNombres(e.target.value);
  };

  const handleApellidosChange = (e: ChangeEvent<HTMLInputElement>) => {
    setApellidos(e.target.value);
  };

  const handleImagenChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Aquí puedes realizar cualquier lógica necesaria para manejar la imagen
      const file = e.target.files[0];
      setImagen(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para enviar los datos y la imagen al servidor
    console.log('Nombres:', nombres);
    console.log('Apellidos:', apellidos);
    console.log('Imagen:', imagen);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Firmas</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Nombres</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={nombres}
            onChange={handleNombresChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Apellidos</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={apellidos}
            onChange={handleApellidosChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Cargar firma electronica</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagenChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Cargar nueva firma    
        </button>
      </form>
    </div>
  );
};

export default Firma;
