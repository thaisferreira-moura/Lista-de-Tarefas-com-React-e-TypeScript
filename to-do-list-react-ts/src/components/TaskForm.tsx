import { FormEvent, useState } from "react";

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const taskTitle = title.trim();

    if (!taskTitle) return;

    onAddTask(taskTitle);
    setTitle("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        aria-label="Nova tarefa"
      />
      <button type="submit" className="add-button">
        + Adicionar
      </button>
    </form>
  );
}

export default TaskForm;