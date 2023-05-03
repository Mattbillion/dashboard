import axios from "axios";
import { Toast } from "primereact/toast";
import { useEffect, useRef, useState } from "react";
import Confirm from "./subcomp/ConfirmDialog";

export default function CategoryTest() {
  const [categoryList, setCategoryList] = useState<string[]>();
  const [listId, setListId] = useState<string>("");
  const [activeList, setActiveList] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>();
  const toast = useRef<any>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) => setCategoryList(res.data));
  }, []);

  function formHandler(e: any) {
    e.preventDefault();
  }

  const warning = () => {
    toast.current?.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  };

  const reject = () => {
    toast.current?.show({
      severity: "success",
      summary: "Saved",
      detail: "successfully saved",
      life: 3000,
    });
  };

  async function handleEdit(id: string, e: any) {
    e.preventDefault();
    setSelectedId(id);
    setActiveList(true);
    activeList == true && selectedId !== id && warning();
  }

  async function handleSave(id: string, e: any) {
    e.preventDefault();
    // console.log(e.target.category.value);
    console.log(toast);
  }

  return (
    <div className="p-6 bg-white border mt-4 rounded-lg">
      <Toast ref={toast} />
      <form className="w-full" onSubmit={formHandler}>
        {categoryList &&
          categoryList?.map((item: any, index: number) => (
            <div key={index}>
              {selectedId === item._id && activeList ? (
                <div key={index} className="mt-2 flex gap-1 w-full h-[72px]">
                  <div className="p-4 flex justify-between rounded-lg border w-full bg-white">
                    <input
                      className="bg-white w-full text-black"
                      name="category"
                      defaultValue={item.name}
                    />
                    <div onClick={(e) => handleSave(item._id, e)}>
                      <Confirm setActiveList={setActiveList} toast={toast} />
                    </div>
                  </div>

                  <div className=" flex rounded-lg w-full divide-x border overflow-hidden">
                    <input
                      className="px-4 p-4 w-full bg-white hover:bg-slate-100 text-blue-500"
                      type="button"
                      value="edit"
                      id={item._id}
                      onClick={(e) => handleEdit(item._id, e)}
                    />

                    <input
                      className="px-4 p-4 w-full bg-white hover:bg-slate-100 text-red-500"
                      type="button"
                      value="delete"
                    />
                    <input
                      className="px-4 p-4 w-full bg-white text-blue-500"
                      value={item._id}
                    />
                  </div>
                </div>
              ) : (
                <div key={index} className="mt-2 flex gap-1 w-full h-[72px]">
                  <div className="p-4 flex justify-between rounded-lg border w-full bg-white">
                    <input
                      className="bg-white w-full text-slate-400"
                      defaultValue={item.name}
                      disabled
                    />
                  </div>
                  <div className=" flex rounded-lg w-full divide-x border overflow-hidden">
                    <input
                      className="px-4 p-4 w-full  bg-white hover:bg-slate-100 text-blue-500"
                      type="button"
                      value="edit"
                      id={item._id}
                      onClick={(e) => handleEdit(item._id, e)}
                    />
                    <input
                      className="px-4 p-4 w-full bg-white hover:bg-slate-100 text-red-500"
                      type="button"
                      value="delete"
                    />
                    <input
                      className="px-4 p-4 w-full bg-white text-blue-500"
                      value={item._id}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
      </form>
    </div>
  );
}
