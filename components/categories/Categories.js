import useCategories from "@/hooks/useCategories";
import useSubCategories from "@/hooks/useSubCategories";
import { useEffect, useState } from "react";

const Categories = () => {
    const [ subCatList, setSubCatList ] = useState(null)
    const [ collapse, setCollapse ] = useState(1)
    const subCategories = useSubCategories()

    useEffect(() => {
        const subCatList = subCategories?.filter(subcat => subcat?.cat_id === collapse)
        setSubCatList(subCatList)
    }, [ collapse, subCategories, setSubCatList ])

    const categories = useCategories()
    return (
        <aside className="flex-[1]">
            <h3 className="bg-green-600 text-white text-center px-10 py-3 rounded-t-lg max-w-96">Categories</h3>
            <div>
                <input className="px-5 py-3 text-black w-full" type="search" name="searchCategory" id="searchCategory" />
            </div>
            <ul className="list-inside">
                {
                    categories?.length && subCategories?.length ? categories?.map(category => {
                        return (
                            <li className="border py-2 px-5 cursor-pointer" key={category?.id} onClick={() => setCollapse(category?.id)}>
                                {category?.cat_name_bn}
                                <ul className={`border ms-5 ${category?.id === collapse ? '' : 'hidden'}`}>
                                    {
                                        subCatList?.length ? subCatList?.map(subcat => <li className="border px-5 py-3" key={subcat?.id}>{subcat?.subcat_name_bn?.length > 15 ? subcat?.subcat_name_bn?.slice(0, 15) + '...' : subcat?.subcat_name_bn}</li>) : null
                                    }
                                </ul>
                            </li>
                        )
                    }) : 'No data found'
                }
            </ul>
        </aside>
    );
};

export default Categories;