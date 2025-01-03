import React, { useState } from 'react'

const CategoriesHome = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
          try {
            const response = await axios.get('https://tackletips.in/api/index');
            if (response.data) {
                setCategories(response.data)
            
            } else {
              console.log("No slider data found in the response.");
            }
          } catch (error) {
            console.log(error);
          }
        };
        getCategories();
      }, []);
  return (
    <div>
        <div>
            <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl text-[#333333] font-bold text-center mb-4'>Categories</h1>
            <span className='border-b-2 border-b-gray-950 h-1 w-20 text-center mb-10'></span>
            </div>
            <div>
                {categories.map((item)=>(
                    <img src={`https://tackletips.in/uploads/category/${item.cat_image}`} alt="" />
                ))}
            </div>
        </div>
    </div>
  )
}

export default CategoriesHome