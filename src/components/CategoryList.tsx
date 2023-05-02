import { BiDish } from "react-icons/Bi";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import AlertDialog from "../components/subcomp/AlertDialog";
import { Toast } from "primereact/toast";
import { ConfirmPopup } from "primereact/confirmpopup";
import variables from "../styles/variable.module.scss"
export default function CategoryList() {
  const [category, setCategory] = useState<any>();
  const [selectedId, setSelectedId] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | null>();
  const toast = useRef<Toast>(null);

  console.log(variables.primaryColor);

  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) => setCategory(res.data));
  }, []);

  const [visible, setVisible] = useState<boolean>(false);

  const accept = () => {
    setActive(false);
    toast.current?.show({
      severity: "success",
      summary: "Save",
      detail: "Гонжийн жоооо",
      life: 3000,
    });
  };

  const reject = () => {
    toast.current?.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  };

  function deleteHandler() {
    console.log("Deleted!");
  }

  return (
    <div className="p-2 border rounded-lg mt-2 bg-white w-full">
      {category &&
        category.map((item: any, index: number) => (
          <form
            key={index}
            className="flex"
            onSubmit={() => {
              console.log("SENT!");
            }}
          >
            <div className="flex w-full items-center justify-between p-2 rounded-lg gap-2">
              {selectedId === item._id && active ? (
                <div className="flex w-full">
                  <input
                    onChange={(e) => setInputValue(e.target.value)}
                    defaultValue={item.name}
                    className={`${variables.surfaceColor} w-full p-2 rounded-lg`}
                  />
                  <div>
                    {" "}
                    <ConfirmPopup
                      visible={visible}
                      onHide={() => setVisible(false)}
                      message="Are you sure you want to proceed?"
                      accept={accept}
                      reject={reject}
                    />
                    <div className={`${variables.surfaceColor} hover:${variables.hoverColor} card flex justify-content-center p-2 rounded-lg`}>
                      <input
                        className=""
                        value="Save"
                        type="button"
                        onClick={() => setVisible(true)}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex w-full">
                  <input
                    disabled
                    className="bg-gray-200 w-full p-2 rounded-lg text-white"
                    placeholder={item.name}
                  />
                  <div
                    onClick={() => {
                      active === false && setSelectedId(item._id),
                        setActive(true),
                        active == true &&
                        selectedId !== item._id &&
                        alert("save");
                    }}
                  >
                    <BiDish />
                    <div>Edit</div>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <div
                  className={`hover:text-white flex surfaceColor w-full  items-center p-2 bg-gray-100 rounded-lg text-slate-500`}
                  onClick={() => deleteHandler()}
                >
                  <BiDish />
                  <div>Delete</div>
                </div>
              </div>
            </div>
          </form>
        ))}
    </div>
  );
}
