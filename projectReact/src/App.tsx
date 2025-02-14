// import TodoApp from "./page/todo/Todo";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
