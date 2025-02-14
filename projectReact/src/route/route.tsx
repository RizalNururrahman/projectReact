import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/index";
import Navbar from "../components/navbar/navbar";
import TodoApp from "../page/todo/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todo",
    element: <TodoApp />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
]);

export default router;
