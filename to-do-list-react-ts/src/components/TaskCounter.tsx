interface TaskCounterProps {
  total: number;
  completed: number;
  pending: number;
}

function TaskCounter({ total, completed, pending }: TaskCounterProps) {
  return (
    <div className="counter">
      <div className="counter-card total-card">
        <strong>{total}</strong>
        <span>Total</span>
      </div>
      <div className="counter-card completed-card">
        <strong>{completed}</strong>
        <span>Concluídas</span>
      </div>
      <div className="counter-card pending-card">
        <strong>{pending}</strong>
        <span>Pendentes</span>
      </div>
    </div>
  );
}

export default TaskCounter;