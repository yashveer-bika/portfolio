import { TypeORMLogo } from "@/components/Icons/type-orm-logo";
import { ProjectPreview } from "@/components/Projects/ProjectPreview";
import { FaReact } from "react-icons/fa";
import {
  SiAmazonec2,
  SiDocker,
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 p-8 lg:p-16 w-full">
      {/* <div className="flex w-full text-3xl">
        <div className="flex gap-2 items-center">
          <div>/projects</div>
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* TODO: add all projects */}
        <ProjectPreview
          projectName={"TireBob"}
          projectUrl={"https://www.tirebob.com/provider"}
          description="Platform for people to request auto servicing, and shops to buy hot
      leads"
          technologies={[
            <FaReact key="react" className="h-12 w-12 max-w-none" />,
            <SiNextdotjs key="next.js" className="h-12 w-12 max-w-none" />,
            <SiTailwindcss key="tailwind" className="h-12 w-12 max-w-none" />,
            <TypeORMLogo key="typeorm" className="h-12 w-12 max-w-none" />,
            <SiNodedotjs key="node.js" className="h-12 w-12 max-w-none" />,
            <SiExpress key="express" className="h-12 w-12 max-w-none" />,
            <SiDocker key="docker" className="h-12 w-12 max-w-none" />,
            <SiAmazonec2 key="amazonec2" className="h-12 w-12 max-w-none" />,
          ]}
          imgSrc={"/tirebob-provider-home.png"}
          imgAlt="tirebob-provider-home"
        />

        <ProjectPreview
          projectName={"/flow-milli"}
          projectUrl={"https://flow-milli.vercel.app/"}
          githubUrl="https://github.com/yashveer-bika/flow-milli"
          description="[In Progress] Visualizing operations interactively. Make an issue on Github for feature requests."
          technologies={[
            <FaReact className="h-12 w-12 max-w-none" />,
            <SiNextdotjs className="h-12 w-12 max-w-none" />,
            <SiTailwindcss className="h-12 w-12 max-w-none" />,
          ]}
          imgSrc={"/v0-flow-milli-graph.png"}
          imgAlt="flow-mill-DAG"
        />
      </div>
    </div>
  );
}
