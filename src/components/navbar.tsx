import Link from "next/link";
import { NavigationItems } from "@/assets/navigationItems";
import DarkModeToggle from "./darkModeToggle";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-end w-full py-6 text-gray-900 transition-all md:justify-between px-28 dark:text-white bg-slate-100 dark:bg-gray-900">
      <ul className="flex gap-4 text-lg">
        {NavigationItems.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className="px-5 py-2.5 rounded-full transition-all cursor-pointer hover:text-gray-400 relative"
            >
              {router.pathname == href && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-[#3b82f6] "
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={`relative z-20 dark:text-white transition-all ${
                  router.pathname == href ? "text-white" : "text-gray-900"
                }`}
              >
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <DarkModeToggle>Dark Mode</DarkModeToggle>
    </nav>
  );
}
