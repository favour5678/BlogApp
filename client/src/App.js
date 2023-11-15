import { RouterProvider } from "react-router-dom";
import { router } from "./routes/BlogRoute";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <section className="bg-[#F3EFEF] text-[#333333] h-full font-body">
        <RouterProvider router={router} />
      </section>
    </UserContextProvider>
  );
}

export default App;
