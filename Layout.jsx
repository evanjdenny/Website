import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function Layout() {
  return (
    <div>
      <nav className="flex justify-center pt-1 pb-1">
        <ul className="flex">
          <motion.li
            whileHover={{
              scale: 1.16,
              y: 3,
              zIndex: 10,
            }}
            whileTap={{
              scale: 1,
              y: 0,
            }}
          >
            <Link
              className="bg-blue-400 text-white px-4 py-2 cursor-pointer"
              to="/"
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.16,
              y: 3,
              zIndex: 10,
            }}
            whileTap={{
              scale: 1,
              y: 0,
            }}
          >
            <Link
              className="bg-green-400 text-white px-4 py-2 cursor-pointer"
              to="/todolist"
            >
              To-Do List
            </Link>
          </motion.li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
