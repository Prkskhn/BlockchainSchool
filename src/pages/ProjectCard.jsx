import { Link } from "react-router-dom";

function ProjectCard({ img, name, desc, index }) {
  return (
    <div className="relative bg-yellow-500 w-48 h-64">
      <div className="bg-green-300 w-full h-1/2 flex justify-center items-center">
        <img src={`${process.env.PUBLIC_URL}/${img}`} alt="" />
      </div>
      <div>
        <div>{name}</div>
        <div>{desc}</div>
      </div>
      <Link to={`/portfolio/${index}?title=${name}&desc=${desc}&image=${img}`}>
        <button className="absolute bottom-0 right-0 px-4 py-2 m-2 bg-white rounded-md ">
          view
        </button>
      </Link>
    </div>
  );
}

export default ProjectCard;
