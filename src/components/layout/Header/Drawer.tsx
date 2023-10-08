"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import RoundedCircle from "@/components/misc/RoundedCircle";
import Typography from "@/components/elements/Typography";
import Divider from "@/components/elements/Divider";
import { usePathname } from "next/navigation";
import { Button } from "@/components/elements/Button";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Case Studies",
    href: "/case-studies",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Drawer() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const selectedNav = React.useCallback(() => {
    if (pathname === "/") return "Home";
    if (pathname === "/about") return "About";
    if (pathname.includes("/case-study") || pathname === "/case-studies")
      return "Case Studies";
    if (pathname === "/contact") return "Contact";
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-14 h-14 bg-zinc-900 text-zinc-50 rounded-full justify-self-end md:hidden"
      >
        <svg
          className="w-6 h-6 mx-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 4.75C3 4.33579 3.33579 4 3.75 4H16.25C16.6642 4 17 4.33579 17 4.75C17 5.16421 16.6642 5.5 16.25 5.5H3.75C3.33579 5.5 3 5.16421 3 4.75ZM3.75 8.5C3.33579 8.5 3 8.83579 3 9.25C3 9.66421 3.33579 10 3.75 10H16.25C16.6642 10 17 9.66421 17 9.25C17 8.83579 16.6642 8.5 16.25 8.5H3.75ZM3.75 12.25C3.33579 12.25 3 12.5858 3 13C3 13.4142 3.33579 13.75 3.75 13.75H16.25C16.6642 13.75 17 13.4142 17 13C17 12.5858 16.6642 12.25 16.25 12.25H3.75Z"
          />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              backgroundColor: "rgb(82 82 91,0)",
            }}
            animate={{
              backgroundColor: "rgb(82 82 91,0.5)",
            }}
            exit={{
              backgroundColor: "rgb(82 82 91,0)",
            }}
            transition={{
              duration: 0.6,
              bounce: 0,
            }}
            className="fixed inset-0 z-50"
            onClick={() => setOpen(false)}
          >
            <motion.div className="absolute inset-0">
              <motion.div
                initial={{
                  x: "210%",
                }}
                animate={{
                  x: "0%",
                }}
                exit={{
                  x: "210%",
                }}
                transition={{
                  duration: 0.8,
                  bounce: 0,
                  ease: [0.83, 0, 0.17, 1],
                }}
                className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full "
              >
                <div className="pointer-events-auto relative w-screen max-w-sm">
                  <RoundedCircle
                    position="left"
                    className="bg-zinc-900"
                    initial={{
                      width: 800,
                    }}
                    animate={{
                      width: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.83, 0, 0.17, 1],
                        bounce: 0,
                      },
                    }}
                    exit={{
                      width: 800,
                      transition: {
                        duration: 0.8,
                        ease: [0.83, 0, 0.17, 1],
                        bounce: 0,
                      },
                    }}
                  />
                  <div className=" h-full flex-col bg-zinc-900 relative px-2 py-6 shadow-xl flex items-center jsutify-center flex-1">
                    <Button className="bg-zinc-50 w-16 h-16 self-end sm:mx-6 mx-4 mb-12 hover:bg-zinc-200">
                      <svg
                        className="scale-[2.2]"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 30 30"
                      >
                        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                      </svg>
                    </Button>
                    <div className="relative mt-6  px-4 sm:px-6  w-full">
                      <Typography
                        as="p"
                        style="label"
                        className="text-zinc-400 text-xs uppercase"
                      >
                        Navigation
                      </Typography>
                      <Divider spacing={24} className="opacity-20" />
                      <ul className="flex flex-col gap-y-8">
                        {links.map((link, index) => (
                          <motion.li
                            key={index}
                            initial={{
                              translateX: 100,
                            }}
                            animate={{
                              translateX: 0,
                            }}
                            transition={{
                              duration: 0.8,
                              ease: [0.83, 0, 0.17, 1],
                              bounce: 0,
                              delay: index * 0.025,
                            }}
                          >
                            <Button
                              href={link.href}
                              className={twMerge(
                                clsx(
                                  "px-0 py-0 bg-transparent text-4xl  font-normal tracking-tight  hover:bg-transparent hover:text-zinc-50",
                                  selectedNav() === link.name
                                    ? "text-zinc-50"
                                    : "text-zinc-600"
                                )
                              )}
                            >
                              {link.name}
                            </Button>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
