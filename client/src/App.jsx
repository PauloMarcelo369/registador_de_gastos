import { useState, useEffect } from "react";
import { Gasto } from "./components/Gasto/Gasto.jsx";
import "./App.css";
import { GastoForm } from "./components/GastoForm/GastoForm.jsx";

function App() {
  const [gastos, setGastos] = useState(() => {
    const storedGastos = localStorage.getItem("gastos");
    return storedGastos ? JSON.parse(storedGastos) : [];
  });

  // Carregar os gastos do localStorage ao iniciar
  useEffect(() => {
    const storedGastos = localStorage.getItem("gastos");
    if (storedGastos) {
      setGastos(JSON.parse(storedGastos));
      console.log(
        "Gastos carregados do localStorage:",
        JSON.parse(storedGastos)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos));
    console.log("Gastos atualizados no localStorage:", gastos);
  }, [gastos]);

  const addGasto = (nome, data, valor) => {
    const novoGasto = {
      id: new Date().getTime(),
      nome,
      data,
      valor: parseFloat(valor),
    };
    setGastos([...gastos, novoGasto]);
    console.log("Gasto adicionado:", novoGasto);
  };

  const removeGasto = (id) => {
    const novosGastosList = gastos.filter((gasto) => gasto.id !== id);
    setGastos(novosGastosList);
    console.log("Gasto removido. Lista atual:", novosGastosList);
  };

  // Calcular o valor total dos gastos
  const totalGasto = gastos.reduce((acc, gasto) => acc + gasto.valor, 0.0);

  return (
    <div className="app">
      <GastoForm addGasto={addGasto} />
      <div className="total">
        <h2>Total Gasto: R$ {totalGasto.toFixed(2)}</h2>
      </div>
      <div className="gasto-list">
        {gastos.map((gasto) => {
          return (
            <Gasto
              key={gasto.id}
              id={gasto.id}
              nome={gasto.nome}
              data={gasto.data}
              valor={gasto.valor}
              removeGasto={removeGasto}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
