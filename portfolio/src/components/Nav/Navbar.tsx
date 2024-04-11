"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { url: "/", name: "Home" },
  { url: "/projects", name: "Projects" },
  {
    url: "/now",
    name: "Now",
  },
  {
    url: "/social",
    name: "Social",
  },
  // {
  //   url: "/guestbook",
  //   name: "Guestbook",
  // },
  // {
  //   url: "/blog",
  //   name: "Blog",
  // },
  // {
  //   url: "/thank-you",
  //   name: "Thank you...",
  // },
];

function NavLinks() {
  return (
    <div className="">
      <div className="flex gap-4">
        {navlinks.map((nav) => (
          <Link href={nav.url}>{nav.name}</Link>
        ))}
      </div>
    </div>
  );
}

function ChangeDirBlock() {
  // TODO: make this a complete idea. Have it look like a Terminal, implement basic commands, (ls, cd)
  const pathname = usePathname();
  return <div>cd {pathname}</div>;
}

export function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between p-8 lg:p-16 w-full bg-white z-50">
      <ChangeDirBlock />
      <div>
        <NavLinks />
      </div>
    </div>
  );
}
