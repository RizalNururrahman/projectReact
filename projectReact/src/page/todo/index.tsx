import { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import Navbar from "../../components/navbar/navbar";
import MenuNavigation from "../../components/ui/menu-navigation";
import Footer from "../../components/footer/footer";

// import { Input } from ".ui/input";
// import { Button } from "./ui/button";
// import { Card } from "./ui/card";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

interface Todos {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const res = await axios.get(API_URL);

    if (res.data) {
      setTodos(res.data);
    }
  };

  // Tambahkan todo baru ke API dan pastikan status sesuai API
  const addTodo = async () => {
    if (!newTodo.trim()) return; // Cegah input kosong

    const todo = { title: newTodo, completed: Math.random() < 0.5 }; // Simulasi nilai acak

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        todo
      );
      console.log("Todo added:", res.data);

      // Pastikan nilai `completed` dari API tidak null atau undefined
      const newTodoItem: Todos = {
        id: res.data.id,
        title: res.data.title,
        completed: res.data.completed ?? false, // Pastikan nilai default `false`
      };

      setTodos([...todos, newTodoItem]);
      setNewTodo(""); // Kosongkan input setelah menambah todo
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Hapus todo dari daftar
  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handlerTodoStatus = (status: boolean) => {
    return status ? "✅" : "❌";
  };
  return (
    <>
      <Navbar />
      <MenuNavigation />
      <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <div className="flex gap-2 mb-4">
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
          />
          <Button onClick={addTodo}>Add</Button>
        </div>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Card key={todo.id}>
              <div className="flex gap-2 items-center">
                <span
                  className="cursor-pointer text-2xl"
                  onClick={() => toggleCompleted(todo.id)}
                >
                  {handlerTodoStatus(todo.completed)}
                </span>

                <span
                  className={todo.completed ? "line-through text-gray-500" : ""}
                >
                  {todo.title}
                </span>
              </div>
              <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">No todos yet. Add one!</p>
        )}
      </div>
      <Footer />
    </>
  );
}
