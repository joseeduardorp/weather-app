export default function CurrentDay() {
  return (
    <div className="currentDay">
      <div className="cond">
        <h2>São José dos Campos</h2>
        <p>19 de Maio</p>
        <i className="fas fa-sun" />
        <p>Ensolarado</p>
      </div>
      <div className="temp">
        <span>16°</span>
        <p><strong>Max:</strong>23° | <strong>Min:</strong>12°</p>
      </div>
    </div>
  );
}