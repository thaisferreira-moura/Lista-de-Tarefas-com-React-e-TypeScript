import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskCounter from "./components/TaskCounter";
import { Task } from "./types/Task";
import "./App.css";

type Filter = "all" | "pending" | "completed";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const savedTasks = localStorage.getItem("todo-tasks");
      return savedTasks ? (JSON.parse(savedTasks) as Task[]) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  function toggleTask(id: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id: number) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  }

  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <main className="page">
      <div className="background-decoration decoration-one" />
      <div className="background-decoration decoration-two" />

      <section className="todo-card">
        <header className="header">
          <div className="logo">✓</div>
          <div>
            <p className="eyebrow">ORGANIZAÇÃO</p>
            <h1>Minha Lista de Tarefas</h1>
            <p className="subtitle">Pequenas tarefas, grandes resultados.</p>
          </div>
        </header>

        <TaskForm onAddTask={addTask} />

        <TaskCounter
          total={tasks.length}
          completed={completedTasks}
          pending={pendingTasks}
        />

        <div className="section-title">
          <h2>Minhas tarefas</h2>
          <span>{filteredTasks.length}</span>
        </div>

        <div className="filters" role="tablist" aria-label="Filtrar tarefas">
          <button
            type="button"
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            Todas
          </button>
          <button
            type="button"
            className={filter === "pending" ? "active" : ""}
            onClick={() => setFilter("pending")}
          >
            Pendentes
          </button>
          <button
            type="button"
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Concluídas
          </button>
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        <footer>
          <span>React + TypeScript</span>
          <span>•</span>
          <span>Suas tarefas ficam salvas neste navegador</span>
        </footer>
      </section>
    </main>
  );
}

export default App;