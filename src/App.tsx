import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./home";
import NestedCheckbox from "./nested-checkbox";
import TikTokToe from "./tiktoktoe";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
      path: "tik-tok-toe",
      element: <TikTokToe />,
    },
    {
      path: "nested-checkbox",
      element: <NestedCheckbox />,
    },
  ]);
  return (
    <div className="m-auto w-full h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
