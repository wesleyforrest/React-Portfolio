import "./App.scss";
import Routing from "./Containers/Routing/Routing";
import Header from "./Containers/Header/Header";
import ProjectCardList from "./Components/ProjectCardList/ProjectCardList";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectCardList />
      <Routing />
    </div>
  );
}

export default App;
