import { useState } from "react";

export function GastoForm({ addGasto }) {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nome || !data || !valor) return;
    addGasto(nome, data, valor);
    clear();
  };

  function clear() {
    setNome("");
    setData("");
    setValor("");
  }

  return (
    <div className="gasto-form">
      <h2>Cadastrar Gasto:</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={nome}
          type="text"
          placeholder="Nome do Gasto"
          onChange={(event) => setNome(event.target.value)}
        />
        <input
          value={data}
          type="date"
          placeholder="Data do Gasto"
          onChange={(event) => setData(event.target.value)}
        />
        <input
          value={valor}
          type="number"
          step={0.01}
          min={0}
          placeholder="Valor do Gasto"
          onChange={(event) => setValor(event.target.value)}
        />
        <button type="submit">Adicionar Gasto</button>
      </form>
    </div>
  );
}
