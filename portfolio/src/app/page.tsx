import { TypeORMLogo } from "@/components/Icons/type-orm-logo";
import Image from "next/image";
import { FaGithub, FaLink, FaReact } from "react-icons/fa";
import {
  SiAmazonec2,
  SiDocker,
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

interface ProjectPreviewProps {
  githubUrl?: string;
  projectUrl?: string;
  projectName: string;
  description: string;
  technologies: React.ReactNode[];
  imgSrc: string;
  imgAlt: string;
}

// TODO: find a better abstraction to componentize this
function ProjectPreview({
  projectUrl,
  githubUrl,
  projectName,
  description,
  technologies,
  imgAlt,
  imgSrc,
}: ProjectPreviewProps) {
  return (
    <div className="flex flex-col gap-4 bg-gray-50 border p-2 hover:scale-105">
      <div className="text-3xl font-bold">{projectName}</div>
      <div>{description}</div>


      <div className="flex overflow-hidden gap-2">
        {/* <div>Tech:</div> */}
        <div className="flex gap-2 animate-loop-scroll">
          {technologies.map((tech, idx) => (
            <div key={idx} className="">
              {tech}
            </div>
          ))}
        </div>
        <div className="flex gap-2 animate-loop-scroll" aria-hidden={"true"}>
          {technologies.map((tech, idx) => (
            <div key={idx} className="">
              {tech}
            </div>
          ))}
        </div>
        <div className="flex gap-2 animate-loop-scroll" aria-hidden={"true"}>
          {technologies.map((tech, idx) => (
            <div key={idx} className="">
              {tech}
            </div>
          ))}
        </div>
        
      </div>


      <div className="p-2 border">
        <div className="">
          <Image
            className=""
            src={imgSrc}
            alt={imgAlt}
            width={10000}
            height={10000}
          />
          <div>
            {githubUrl ? (
              <a href={githubUrl} target="_blank">
                <FaGithub />
              </a>
            ) : null}

            {projectUrl ? (
              <a href={projectUrl} target="_blank">
                <FaLink />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col p-8 gap-10 min-h-screen bg-white text-black">
      <div className="flex flex-col gap-5 whitespace-pre-line">
        <div>Hi! I'm Yashveer Bika. I make cool stuff.</div>

        <div>Contact me if you see broken links, bugs, etc.</div>
      </div>

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

      <div>
        Sections:
        <ul>
          <li>/home (personal description, "highlight reel")</li>

          <li>/projects</li>

          <li>/now</li>

          <li>/social</li>

          <li>/guestbook</li>

          <li>/blog</li>
        </ul>
      </div>

      <div>
        Fun ideas:
        <ul>
          <li>Write a CLI to change pages and show current page</li>

          <li>Have thin colored bar at top to indicate page loading with %</li>

          <li>Animate some stuff</li>
        </ul>
      </div>

      <div>
        Contact info: Twitter (show online status and user connect), Discord
        (show online status and user connect), Email, Spotify (show currently
        playing song)
      </div>

      <div>
        Have a /now page, https://sive.rs/nowff /now, building out TireBob
        /recently, /soon,
      </div>

      <div>Use umami analytics on site</div>
    </div>
  );
}
