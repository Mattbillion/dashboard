import { sideMenuButtons } from "@/utils/Constants";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { BiLogOut } from "react-icons/Bi";

const active = "bg-orange-600 text-white";
const inActive = "bg-gray-200 hover:bg-gray-100 text-black ";

interface pageProp {
  children: React.ReactNode;
}
export default function SideMenu({ children }: pageProp) {
  const currentPath: NextRouter = useRouter();
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          {sideMenuButtons.map((item, index) => (
            <Link href={item.path} key={index}>
              <div
                className={`${
                  item.path !== currentPath.pathname ? inActive : active
                } cursor-pointer my-4 p-3 rounded-lg inline-block`}
              >
                {item.icon}
              </div>
            </Link>
          ))}
        </div>
        <div className=" cursor-pointer my-4 p-3 rounded-lg inline-block bg-gray-50">
          <Link href="">
            <div>
              <BiLogOut />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
}
