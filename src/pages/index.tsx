import Layout from "@/components/Layout";
import SideMenu from "@/components/SideMenu";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto">
          Dashboard Page
        </div>
      </div>
    </Layout>
  );
}
