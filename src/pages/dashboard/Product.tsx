import CategoryList from '@/components/CategoryList';
import Layout from '@/components/Layout';
import { ICategory } from '@/utils/Constants';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CiImport } from 'react-icons/Ci'
export default function Product() {
  const [category, setCategory] = useState<ICategory[]>()

  useEffect(() => {
    axios
      .get('http://localhost:3001/category')
      .then((res) => setCategory(res.data));
  }, [])

  function onSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.imageURL.files[0]);
    const foodlist: any = {
      title: e.target.title.value,
      desc: e.target.desc.value,
      category: e.target.category.value,
      price: e.target.price.value,
      imageURL: e.target.imageURL.value
    }
    console.log(foodlist);
    formData.append("foodlist", JSON.stringify(foodlist));
    axios.post('http://localhost:3001/product/add', formData)
      .then((res) => console.log(res));
  }


  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 border-b-2 overflow-auto text-lg">Create Category</div>
        <div >
          <form onSubmit={(e) => onSubmit(e)}>

            <input className="w-full border p-4 mt-2 rounded-lg" placeholder="Category үүсгэх" name='desc'></input>

            <button type="submit" className="w-full text-black bg-gray-100 p-4 rounded-lg mt-2 border flex items-center gap-2 justify-center hover:bg-orange-400 hover:text-white">
              <CiImport />Төрөл нэмэх</button>
          </form>
        </div>

        <div className="w-full m-auto p-4 border-b-2 overflow-auto text-lg">Create Product</div>

        <div >
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="flex gap-2 mt-2">
              <input className="w-full border p-4 rounded-lg" placeholder="Product name" name='title'></input>
              <input className="w-full border p-4 rounded-lg" placeholder="Description" name='desc'></input>
            </div>
            <div className="flex gap-2 mt-2">
              <select className="w-full border p-4 rounded-lg" placeholder="Category" name='category'>
                {category?.map((item, index) => <option key={index}>{item.name}</option>)}
              </select>
              <input className="w-full border p-4 rounded-lg" placeholder="Үнэ" name='price'></input>
            </div>
            <input className="w-full border p-4 rounded-lg bg-white mt-2" type='file' name="imageURL"></input>
            <button type="submit" className="w-full text-black bg-gray-100 p-4 rounded-lg mt-2 border flex items-center gap-2 justify-center hover:bg-orange-400 hover:text-white">
              <CiImport />Хоол нэмэх</button>
          </form>
        </div>
        <CategoryList />
      </div>
    </Layout>
  )
}