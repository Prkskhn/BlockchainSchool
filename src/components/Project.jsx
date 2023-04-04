import ProjectCard from "../pages/ProjectCard";
import projectData from "../projectData.json";
function Project() {
  return (
    <div className=" bg-blue-300 min-w-full   justify-center items-center grid grid-cols-3 justify-items-center grow">
      {projectData.map((v, i) => {
        return (
          <ProjectCard
            key={i}
            index={i}
            img={v.img}
            name={v.name}
            desc={v.desc}
          />
        );
      })}
    </div>
  );
}

export default Project;
