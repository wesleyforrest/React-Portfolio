import "./App.scss";
import Routing from "./Containers/Routing/Routing";
import Header from "./Containers/Header/Header";
import ProjectCard from "./Components/ProjectCard/ProjectCard";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectCard />
      <Routing />
    </div>
  );
}

export default App;
