import { MouseEventHandler } from "react";
import { useSearchParams } from "react-router";

const Demo = () => {
  console.log("Rendering Demo...");

  const [searchParams, setSearchParams] = useSearchParams();

  const color = searchParams.get("color") ?? "cyan-800";

  const onClick: MouseEventHandler<HTMLButtonElement> = ({ currentTarget }) => {
    console.log(currentTarget.value);

    setSearchParams((prev) => ({ ...prev, color: currentTarget.value }));
  };

  return (
    <div
      className={`absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-1/2 rounded border-1 border-cyan-950 bg-${color} text-${color === "white" ? "cyan-800" : "white"}`}
    >
      {color === "white" ? "I am white!" : "I am cyan!"}
      <button className="h-8 w-20" value={"cyan-800"} onClick={onClick}>
        Cyan
      </button>
      <button className="h-8 w-20" value={"white"} onClick={onClick}>
        White
      </button>
    </div>
  );
};
export default Demo;
