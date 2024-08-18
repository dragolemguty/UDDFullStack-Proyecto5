import { useState, useMemo } from "react";



const Calculadora = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operacion, setOperacion] = useState('+');

    const resultado = useMemo(() => {
        switch (operacion) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num2 !== 0 ? num1 / num2 : 'Error: Division por Cero';
            default:
                return 0;
        };
    }, [num1, num2, operacion]);

    const handleNum1Change = (e) => {
        setNum1(Number(e.target.value));
    };

    const handleNum2Change = (e) => {
        setNum2(Number(e.target.value));
    };

    const handleOperationChange = (e) => {
        setOperacion(e.target.value);
    };

    return (
        <>
            <div className="my-4 text-3xl font-bold text-green-600 ml-10">
                <h1>Calculadora</h1>
            </div>
            <div>
                <label className="text-lg font-semibold my-2 ml-5">
                    Número 1:
                    <input className="rounded ml-10 border-gray-900 border-2" type="number" value={num1} onChange={handleNum1Change} />
                </label>
            </div>
            <div>
                <label>
                    Número 2:
                    <input className="rounded ml-10 border-gray-900 border-2" type="number" value={num2} onChange={handleNum2Change} />
                </label>
            </div>
            <div>
                <label>
                    Operación:
                    <select className="rounded ml-10 border-gray-900 border-2" value={operacion} onChange={handleOperationChange}>
                        <option value="+">Suma</option>
                        <option value="-">Resta</option>
                        <option value="*">Multiplicación</option>
                        <option value="/">División</option>
                    </select>
                </label>
            </div>
            <div>
                <h2 className="rounded ml-10 border-gray-900 border-2 text-red-800 font-bold" >Resultado: {resultado}</h2>
            </div>
        </>
    )
};
export default Calculadora;