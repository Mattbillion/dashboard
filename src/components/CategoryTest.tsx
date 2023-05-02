import axios from "axios"
import { useEffect, useState } from "react"

export default function CategoryTest() {
  const [categoryList, setCategoryList] = useState<string[]>();
  const [listId, setListId] = useState<string>("")
  const [activeList, setActiveList] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>()


  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) => setCategoryList(res.data));
  }, [])

  function formHandler(e: any) {

  }

  async function handleEdit(e: any) {
    e.preventDefault()
    await setSelectedId(e.target.id)
    setActiveList((current) => !current)

  }




  return (
    <div className="p-6 bg-white border mt-4 rounded-lg">
      <form className="w-full" onSubmit={formHandler}>


        {categoryList && categoryList?.map((item: any, index: number) => (
          <div key={index}>
            {selectedId === item._id && activeList ? (
              <div key={index} className="mt-2 flex gap-1 w-full border-4" >
                <div className="p-4 flex justify-between rounded-lg border w-full bg-white">
                  <input className="bg-white w-full" defaultValue={item.name} />
                  <input type="submit" value="save" onClick={() => console.log('saved')} />
                </div>
                <div className=" flex rounded-lg w-full divide-x border overflow-hidden">
                  <input className="px-4 p-4 w-full bg-white hover:bg-slate-100 text-blue-500" type='button' value='edit' id={item._id} onClick={handleEdit} />
                  <input className="px-4 p-4 w-full bg-white hover:bg-slate-100 text-red-500" type='button' value='delete' />
                  <input className="px-4 p-4 w-full bg-white text-blue-500" value={item._id} />
                </div>
              </div>
            ) : (
              <div key={index} className="mt-2 flex gap-1 w-full" >
                <div className="p-4 flex justify-between rounded-lg border w-full bg-white">
                  <input className="bg-white w-full" defaultValue={item.name} disabled />
                </div>
                <div className=" flex rounded-lg w-full divide-x border overflow-hidden">
                  <input className="px-4 p-4 w-full  bg-white hover:bg-slate-100 text-blue-500" type='button' value='edit' id={item._id} onClick={handleEdit} />
                  <input className="px-4 p-4 w-full bg-white hover:bg-slate-100 text-red-500" type='button' value='delete' />
                  <input className="px-4 p-4 w-full bg-white text-blue-500" value={item._id} />
                </div>
              </div>
            )}
          </div>

        ))
        }




      </form >
    </div>

  )
}

