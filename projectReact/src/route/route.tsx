import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/index";
import Navbar from "../components/navbar/navbar";
import TodoApp from "../page/todo/index";
import Coba from "../page/tampilan/filecoba";

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
  {
    path: "/coba",
    element: <Coba />,
  },
]);

export default router;
