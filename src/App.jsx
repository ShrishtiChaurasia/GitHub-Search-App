import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Appcomp from "./appcomp";
import Mypage from "./components/homepage/mypage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mypage />,
  },
  {
    path: "about",
    element: <Appcomp />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
