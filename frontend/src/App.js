import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-stone-100 text-black dark:bg-stone-900 dark:text-white">
      <Header />
      <main className="container m-auto mt-12 pt-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
