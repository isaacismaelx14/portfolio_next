import Icons from "./Icons";
import { technologies } from "../data/me.json";
import { useEffect } from "react";

function Technologies() {
  useEffect(() => {
    document.querySelectorAll("[data-tooltip]").forEach((el) => {
      el.addEventListener("mouseover", function (mouse: any) {
        const tooltip = document.createElement("div");
        console.log(mouse);
      });
    });
  }, []);
  return (
    <div>
      <h2>Technologies</h2>
      <div className="icons">
        {technologies.map((tech, index) => (
          <span data-tooltip={tech.name} className="icon" key={index}>
            <GetIcon name={tech.name} />
          </span>
        ))}
      </div>
    </div>
  );
}

const GetIcon = ({ name }: { name: string }) => {
  const Icon = (Icons as any)[name];
  if (!Icon) return <div style={{ fontSize: "20px" }}>{name}</div>;
  return <Icon title="test" />;
};

export default Technologies;
