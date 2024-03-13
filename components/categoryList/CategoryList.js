'use client'
import useCategories from "@/hooks/useCategories";
import useSubCategories from "@/hooks/useSubCategories";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoryList = () => {
    const [ collapse, setCollapse ] = useState(1)
    const [ subCatList, setSubCatList ] = useState(null)

    const categories = useCategories();
    const subCategories = useSubCategories();

    useEffect(() => {
        if (subCategories) {
            const list = subCategories?.filter(subCategory => subCategory?.cat_id === collapse)
            setSubCatList(list)
        }
    }, [ subCategories, collapse, setSubCatList ])

    return (
        <div>
            <h3 className="bg-green-600 text-white font-bold text-xl text-center py-3">Categories</h3>
            <ul className="list-inside">
                {
                    categories?.length && subCategories?.length ? categories?.map(category => {
                        return (
                            <li className="border py-2 px-5 cursor-pointer" key={category?.id} onClick={() => setCollapse(category?.id)}>
                                {category?.cat_name_bn}
                                <ul className={`border ms-5 ${category?.id === collapse ? '' : 'hidden'}`}>
                                    {
                                        subCatList?.length ? subCatList?.map(subcat => <li className="border px-5 py-3" key={subcat?.id}>
                                            <Link href={`/duas/${category?.cat_name_en}?cat=${category?.id}&subcat=${subcat?.id}`}>{subcat?.subcat_name_bn?.length > 15 ? subcat?.subcat_name_bn?.slice(0, 15) + '...' : subcat?.subcat_name_bn}</Link>
                                        </li>) : null
                                    }
                                </ul>
                            </li>
                        )
                    }) : 'No data found'
                }
            </ul>
        </div>
    );
};

export default CategoryList;