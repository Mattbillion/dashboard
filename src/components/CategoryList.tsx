import { ICategory } from "@/utils/Constants";

import { BiDish } from "react-icons/Bi";
import axios from "axios";
import { useEffect, useState } from "react";

const disabled = "bg-orange-600 text-white";
const editable = "bg-gray-100 hover:bg-gray-200";

export default function CategoryList() {
  const [category, setCategory] = useState<any>();
  const [selected, setSelected] = useState<string | null>();
  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) => setCategory(res.data));
  }, []);

  function deleteHandler() {
    console.log("Deleted!");
  }
  console.log(selected)
  console.log(category)
  return (

    < div className="p-2 border rounded-lg mt-2 bg-white" >
      {category &&
        category.map((item: any, index: number) => (
          <div key={index} className="flex items-center justify-between p-2 rounded-lg gap-2">
            <input

              defaultValue={item.name}
              className={selected === item._id ? editable : disabled}
            />


            <div className="flex gap-2">
              <div
                // className={`${active ? "" : "bg-orange-500 white"} ${active ? disabled : editable} hover:text-white hover:bg-orange-600 flex gap-1 items-center p-2 bg-gray-100 rounded-lg text-slate-500`}
                // onClick={() => setSelected(item.id)}
                className="cursor-pointer"
                onClick={() => setSelected(item._id)}
              >
                <BiDish />
                <div>Edit</div>
              </div>
              <div>

              </div>
              <div
                className="hover:text-white hover:bg-red-600 flex items-center p-2 bg-gray-100 rounded-lg text-slate-500"
                onClick={() => deleteHandler()}
              >
                <BiDish />
                <div>Delete</div>
              </div>
            </div>
          </div>
        ))
      }
    </ div>
  );
}
