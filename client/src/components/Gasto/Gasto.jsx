export function Gasto({ id, nome, data, valor, removeGasto }) {
  const handleDelete = () => {
    removeGasto(id);
  };

  return (
    <div className="gasto">
      <div className="content">
        <p>{nome}</p>
        <p>{data}</p>
        <p>R$ {valor.toFixed(2)}</p>
      </div>
      <div className="buttons">
        <button className="remove" onClick={handleDelete}>
          Remover
        </button>
      </div>
    </div>
  );
}
