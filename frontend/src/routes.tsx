import GenerateOutfit from "./pages/GenerateOutfit";
import Test from "./pages/Test";

export const routes = [
  {
    path: "/test",
    element: <Test/>
  },
  {
    // path: "/generate-outfit",
    path: "/",
    element: <GenerateOutfit/>
  }
]