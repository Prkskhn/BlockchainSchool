import Contact from "./Contact";
import Introduce from "./Introduce";
import Project from "./Project";

function Main() {
  return (
    <div className="bg-purple-100 min-w-full flex flex-col justify-center items-center grow">
      <Introduce />
      <Project />
      <Contact />
    </div>
  );
}

export default Main;
