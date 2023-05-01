import Layout from "@/components/Layout";
import SideMenu from "@/components/SideMenu";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Link href="/dashboard">
        Login
      </Link>
    </div>
  );
}
