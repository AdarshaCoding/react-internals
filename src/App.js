import { Footer, Header } from "./components";
import "./App.css";
import RestaurantList from "./pages/RestaurantList";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <RestaurantList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
