import Link from "next/link";
import Themebutton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href="https://ry-portfolio-v2.vercel.app/">
            <h1 className="text-2xl font-bold font-sofia ">
              ry<span className="text-red-500">.dev</span>
            </h1>
          </Link>

          <Themebutton />
        </div>
      </div>
    </div>
  );
}
