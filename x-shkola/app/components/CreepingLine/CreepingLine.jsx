import './CreepingLine.css';

export default function CreepingLine() {
  return (
    <section className='creeping-line'>
      <div className='content'>
        {/* Повторяющиеся элементы текста */}
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
      </div>
      {/* Дублируем контент, чтобы создать бесконечный эффект */}
      <div className='content'>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
        <span className="text">X-SHKOLA</span>
      </div>
    </section>
  );
}
