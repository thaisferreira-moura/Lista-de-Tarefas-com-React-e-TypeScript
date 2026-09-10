import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <label className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Marcar "${task.title}" como concluída`}
        />
        <span>{task.title}</span>
      </label>

      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
        type="button"
        aria-label={`Remover "${task.title}"`}
      >
        Remover
      </button>
    </li>
  );
}

export default TaskItem;