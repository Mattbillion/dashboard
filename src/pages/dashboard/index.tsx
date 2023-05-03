import CategoryTest from "@/components/CategoryTest";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto text-orange-400 font-bold">
          Dashboard
        </div>
        <CategoryTest />
      </div>
    </Layout>
  );
}
