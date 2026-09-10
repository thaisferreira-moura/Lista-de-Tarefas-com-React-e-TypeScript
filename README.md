# 📝 Lista de Tarefas — React + TypeScript

Uma aplicação web de **Lista de Tarefas (To-Do List)** desenvolvida com **React e TypeScript**, permitindo cadastrar, visualizar, concluir e remover tarefas de forma simples e organizada.

O projeto foi desenvolvido com foco em **componentização, gerenciamento de estado, tipagem com TypeScript e utilização de Hooks do React**.

---

## 💜 Demonstração

A aplicação possui uma interface moderna com uma identidade visual em **rosa e roxo**, além de ser responsiva para diferentes tamanhos de tela.

### ✨ Principais recursos

* ➕ Adicionar novas tarefas
* ✅ Marcar tarefas como concluídas
* 🔄 Desmarcar tarefas concluídas
* 🗑️ Remover tarefas
* 📊 Visualizar quantidade total de tarefas
* ✔️ Contar tarefas concluídas
* ⏳ Contar tarefas pendentes
* 🔎 Filtrar tarefas por:

  * Todas
  * Pendentes
  * Concluídas
* 💾 Salvar tarefas automaticamente no `localStorage`
* 📱 Layout responsivo
* 💬 Mensagem quando não existem tarefas cadastradas
* 🚫 Impedir o cadastro de tarefas vazias

---

## 🛠️ Tecnologias utilizadas

* ⚛️ **React**
* 🔷 **TypeScript**
* 🎨 **CSS3**
* 🌐 **HTML5**
* ⚡ **Vite**
* 💾 **LocalStorage**

---

## 📂 Estrutura do projeto

```text
src/
├── components/
│   ├── TaskCounter.tsx
│   ├── TaskForm.tsx
│   ├── TaskItem.tsx
│   └── TaskList.tsx
│
├── types/
│   └── Task.ts
│
├── App.tsx
├── App.css
└── main.tsx
```

### 📌 Componentes

**TaskForm.tsx**
Responsável pelo formulário de cadastro de novas tarefas.

**TaskItem.tsx**
Representa individualmente cada tarefa, permitindo concluí-la ou removê-la.

**TaskList.tsx**
Responsável por organizar e exibir a lista de tarefas.

**TaskCounter.tsx**
Exibe os contadores de tarefas totais, concluídas e pendentes.

**Task.ts**
Contém a interface TypeScript utilizada para representar uma tarefa.

---

## 🧩 Modelo de dados

Cada tarefa possui a seguinte estrutura:

```typescript
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
```

### Propriedades

| Propriedade | Tipo      | Descrição                        |
| ----------- | --------- | -------------------------------- |
| `id`        | `number`  | Identificador único da tarefa    |
| `title`     | `string`  | Nome da tarefa                   |
| `completed` | `boolean` | Indica se a tarefa foi concluída |

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/thaisferreira-moura/Lista-de-Tarefas-com-React-e-TypeScript.git
```

### 2. Acesse a pasta

```bash
cd todo-list-react-ts
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

Depois, acesse o endereço exibido pelo Vite no terminal.

---

## 💾 Persistência de dados

As tarefas são armazenadas no **LocalStorage do navegador**.

Isso significa que, mesmo fechando ou atualizando a página, as tarefas cadastradas permanecem salvas no dispositivo.

---

## 📱 Responsividade

A aplicação foi desenvolvida para funcionar em:

* 💻 Computadores
* 💻 Notebooks
* 📱 Smartphones
* 📱 Tablets

O layout se adapta automaticamente a diferentes tamanhos de tela.

---

## 🎯 Objetivos de aprendizagem

Este projeto foi desenvolvido para praticar conceitos importantes do desenvolvimento Front-End:

* Componentização no React
* Tipagem com TypeScript
* `useState`
* `useEffect`
* Manipulação de listas
* Eventos e formulários
* Props
* Filtros
* Persistência de dados
* Organização de componentes
* Responsividade com CSS

---

## 🚀 Build para produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

A versão final será criada na pasta:

```text
dist/
```

---

## 👩‍💻 Desenvolvido por

**Thais Ferreira de Moura**

Projeto desenvolvido para fins acadêmicos e de aprendizado em **React + TypeScript**.

---

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório!
