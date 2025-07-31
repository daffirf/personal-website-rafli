import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Muhammad Rafli Fajri</h3>
          <p className="text-sm text-zinc-400">Full Stack Web Developer</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="https://github.com/daffirf" target="_blank">
            <FaGithub className="w-6 h-6 hover:text-zinc-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-rafli-fajri-094287216/" target="_blank">
            <FaLinkedin className="w-6 h-6 hover:text-zinc-300" />
          </Link>
          <Link href="https://instagram.com/daffi.rf" target="_blank">
            <FaInstagram className="w-6 h-6 hover:text-zinc-300" />
          </Link>
        </div>
      </div>
      <div className="text-center text-xs text-zinc-500 mt-6">
        &copy; {new Date().getFullYear()} Muhammad Rafli Fajri. All rights reserved.
      </div>
    </footer>
  );
}