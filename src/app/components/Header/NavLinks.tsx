"use client";
import { useActivePath } from "@/app/helper/CeckActivePath/CheckActivePath";
import { cn } from "@/lib/utils";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { Fragment, useState } from "react";
function NavLinks() {
  const [isOpen, setOpen] = useState(false);
  const isCurrentPathActive = useActivePath();
  const navLinks = [
    { id: 1, name: "Home", path: "/home", className: "select-none link_dark" },
    {
      id: 2,
      name: "Expertise",
      path: "/expertise",
      className: "select-none link_dark ",
    },
    {
      id: 3,
      name: "Projects",
      path: "/projects",
      className: "select-none link_dark",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
      className: "select-none link_dark",
    },
    {
      id: 5,
      name: "Blogs",
      path: "#",
      className:
        "select-none text-white/70 cursor-default  pointer-events-none",
    },
  ];
  const handleCloseMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <nav
        onClick={handleCloseMenu}
        className={cn(
          `pattern_dark z-[998]  flex flex-col h-screen justify-center absolute top-0 right-0  w-full items-center gap-20 overflow-y-auto
      md:flex-row  md:static md:gap-10 md:justify-end md:overflow-hidden md:w-fit md:h-fit`,
          !isOpen
            ? " translate-x-[-100%] duration-300 transition-all md:translate-x-0 md:duration-0 md:transition-none"
            : " pattern_dark translate-x-0  duration-300 transition-all md:translate-x-0 md:duration-0 md:transition-none"
        )}
      >
        {navLinks.map((data) => (
          <Fragment key={data.id}>
            <Link
              title={data.name}
              onClick={handleCloseMenu}
              href={data.path && data.path}
              className={cn(
                isCurrentPathActive(data.path) ? "hidden" : "",
                "tracking-wide text-[1.2rem] ",
                data.className
              )}
            >
              {data.name}
            </Link>
          </Fragment>
        ))}
      </nav>
      <div className="md:hidden absolute top-7 z-[999] right-10  rounded-full transition-[background] duration-300 active:bg-white/30">
        <Hamburger
          distance="sm"
          onToggle={() => setOpen(!isOpen)}
          color="#ffffff"
          toggled={isOpen}
          toggle={setOpen}
          size={25}
          rounded
          hideOutline={false}
        />
      </div>
    </>
  );
}

export default NavLinks;
