import { RouterProvider } from "react-router-dom";
import { router } from "./routes/BlogRoute";

function App() {
  return (
    <section className="bg-[#F3EFEF] h-screen font-body">
      <RouterProvider router={ router }/>
    </section>
  );
}

export default App;
