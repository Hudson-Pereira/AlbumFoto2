import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Home from "./pages/Home/Home";
import VagaView from "./pages/VagaView/VagaView";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/view/:id" component={VagaView} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
