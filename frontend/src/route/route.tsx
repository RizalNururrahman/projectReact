import { createBrowserRouter } from "react-router-dom";
import Coba from "../page/tampilan/filecoba";
import Home from "../page/home/index";
import Navbar from "../components/navbar/navbar";
import TodoApp from "../page/todo/index";
import MasterMenu from "../page/tampilan/mastermenu/mastermenu";
import Assignmenu from "../page/tampilan/assignmenu/assignmenu";

const router = createBrowserRouter([
  {
    path: "/coba",
    element: <Coba />,
  },
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
    path: "/mastermenu",
    element: <MasterMenu />,
  },
  {
    path: "/assignmenu",
    element: <Assignmenu />,
  },
]);

export default router;
