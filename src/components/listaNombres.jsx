import { useState, useCallback } from "react";


const ListaDeNombres = () => {

    const [nombres, setNombre] = useState([""]);
    const [nuevoNombre, setNuevoNombre] = useState("");


    const agregarNombre = useCallback(() => {
        if (nuevoNombre.trim() !== '') {
            setNombre([...nombres, nuevoNombre]);
            setNuevoNombre("");
        }
    }, [nombres, nuevoNombre]);

    const handleInputChange = (e) => {
        setNuevoNombre(e.target.value);
    };

    return (
        <>
            <div className="flex justify center w-1/2 text-lime-950 font-bold underline">
                <h1>
                    Lista de Nombres
                </h1>
            </div>
            <div>
                <input type='text' value={nuevoNombre} onChange={handleInputChange} />
            </div>
            <button className="w-40 text-xl bg-green-950 text-white" onClick={agregarNombre}>Agregar Nombre</button>
            <ul>
                {nombres.map((nombre, index) => (
                    <li key={index}>{nombre}</li>
                ))}
            </ul>
        </>
    )
};
export default ListaDeNombres;