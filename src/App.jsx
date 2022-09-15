import "./App.scss";
import Routing from "./Containers/Routing/Routing";
import Header from "./Containers/Header/Header";
import Main from "./Containers/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Routing />
    </div>
  );
}

export default App;
