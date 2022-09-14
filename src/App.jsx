import "./App.scss";
import Routing from "./Containers/Routing/Routing";
import Header from "./Containers/Header/Header";
import ProjectCardContainer from "./Containers/ProjectCardContainer/ProjectCardContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectCardContainer />
      <Routing />
    </div>
  );
}

export default App;
