# 📝 Minha Lista de Tarefas

Aplicação de **Lista de Tarefas (To-Do List)** desenvolvida com **React e TypeScript**.

## ✨ Funcionalidades

- Adicionar tarefas
- Impedir cadastro de tarefas vazias
- Marcar e desmarcar tarefas como concluídas
- Remover tarefas
- Contador de tarefas totais, concluídas e pendentes
- Filtro por Todas, Pendentes e Concluídas
- Persistência com `localStorage`
- Mensagem quando não existem tarefas
- Layout responsivo para dispositivos móveis

## 🛠️ Tecnologias

- React
- TypeScript
- HTML
- CSS
- Vite

## ▶️ Como executar

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## 📁 Organização

```text
src/
├── components/
│   ├── TaskCounter.tsx
│   ├── TaskForm.tsx
│   ├── TaskItem.tsx
│   └── TaskList.tsx
├── types/
│   └── Task.ts
├── App.tsx
├── App.css
└── main.tsx
```

Projeto desenvolvido para estudo de **componentização, TypeScript, gerenciamento de estado e Hooks no React**.
