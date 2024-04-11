import { TypeORMLogo } from "@/components/Icons/type-orm-logo";
import { ProjectPreview } from "@/components/Projects/ProjectPreview";
import { FaLink, FaReact } from "react-icons/fa";
import {
  SiAmazonec2,
  SiDocker,
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

// TODO: animate stuff
export default function Home() {
  return (
    <div className="flex flex-col gap-10 p-8 lg:p-16 w-full">
      <div className="flex w-full text-3xl">
        <div className="flex gap-2 items-center">
          <div>/me</div>
        </div>
      </div>
      <div className="flex flex-col gap-5 whitespace-pre-line">
        <div>
          Hi! I'm Yashveer Bika. I make cool stuff. Tech + Product. Open to
          talk.
        </div>

        <div>Contact me if you see broken links, bugs, etc.</div>
      </div>

      {/* <div className="flex w-full text-3xl">
        <div className="flex gap-2 items-center">
          <div>/current-projects</div>
          <a href={"/projects"} target="_blank">
            <FaLink className="h-6" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProjectPreview
          projectName={"TireBob"}
          projectUrl={"https://www.tirebob.com/provider"}
          description="Platform for people to request auto servicing, and shops to buy hot
      leads"
          technologies={[
            <FaReact className="h-12 w-12 max-w-none" />,
            <SiNextdotjs className="h-12 w-12 max-w-none" />,
            <SiTailwindcss className="h-12 w-12 max-w-none" />,
            <TypeORMLogo className="h-12 w-12 max-w-none" />,
            <SiNodedotjs className="h-12 w-12 max-w-none" />,
            <SiExpress className="h-12 w-12 max-w-none" />,
            <SiDocker className="h-12 w-12 max-w-none" />,
            <SiAmazonec2 className="h-12 w-12 max-w-none" />,
          ]}
          imgSrc={"/tirebob-provider-home.png"}
          imgAlt="tirebob-provider-home"
        />

        <ProjectPreview
          projectName={"TireBob"}
          projectUrl={"https://www.tirebob.com/provider"}
          description="Platform for people to request auto servicing, and shops to buy hot
      leads"
          technologies={[
            <FaReact className="h-12 w-12 max-w-none" />,
            <SiNextdotjs className="h-12 w-12 max-w-none" />,
            <SiTailwindcss className="h-12 w-12 max-w-none" />,
            <TypeORMLogo className="h-12 w-12 max-w-none" />,
            <SiNodedotjs className="h-12 w-12 max-w-none" />,
            <SiExpress className="h-12 w-12 max-w-none" />,
            <SiDocker className="h-12 w-12 max-w-none" />,
            <SiAmazonec2 className="h-12 w-12 max-w-none" />,
          ]}
          imgSrc={"/tirebob-provider-home.png"}
          imgAlt="tirebob-provider-home"
        />
      </div> */}
    </div>
  );
}
