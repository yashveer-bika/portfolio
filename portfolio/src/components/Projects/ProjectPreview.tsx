import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";

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
export function ProjectPreview({
  projectUrl,
  githubUrl,
  projectName,
  description,
  technologies,
  imgAlt,
  imgSrc,
}: ProjectPreviewProps) {
  return (
    <div className="flex flex-col gap-4 bg-gray-50 border p-5 rounded-md md:hover:scale-105">
      <div className="text-3xl font-bold">{projectName}</div>
      <div>{description}</div>

      <div className="flex overflow-hidden space-x-10">
        <div className="flex space-x-10 animate-loop-scroll">
          {technologies.map((tech, idx) => (
            <div key={idx} className="">
              {tech}
            </div>
          ))}
        </div>
        <div
          className="flex space-x-10 animate-loop-scroll"
          aria-hidden={"true"}
        >
          {technologies.map((tech, idx) => (
            <div key={idx} className="">
              {tech}
            </div>
          ))}
        </div>
        <div
          className="flex space-x-10 animate-loop-scroll"
          aria-hidden={"true"}
        >
          {technologies.map((tech, idx) => (
            <div key={idx} className="">
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="p-2 border rounded-md ">
        <div className="flex flex-col gap-2">
          <img
            className="rounded-md "
            src={imgSrc}
            alt={imgAlt}
            width={10000}
            height={10000}
          />
          <div className="flex gap-2">
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
