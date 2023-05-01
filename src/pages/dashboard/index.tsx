import Layout from "@/components/Layout";
import { ICategory } from "@/utils/Constants";
import axios from "axios";
import { useEffect, useState } from "react";






export default function Home() {

  return (
    <Layout>
    <div className="p-4 ">
      <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto">
        Dashboard
      </div>
    </div>
  </Layout>
  )
}