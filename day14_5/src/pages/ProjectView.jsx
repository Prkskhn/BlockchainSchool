import { useSearchParams } from "react-router-dom";

function ProjectView() {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("title");
  const desc = searchParams.get("desc");
  const img = searchParams.get("image");

  return (
    <div className=" bg-green-100 min-w-full min-h-screen flex flex-col justify-center items-center">
      <div>
        <img src={`${process.env.PUBLIC_URL}/${img}`} alt="" />
      </div>
      <div className="bg-red-500">{name}</div>
      <div className="font-extrabold ">{desc}</div>
    </div>
  );
}

export default ProjectView;
