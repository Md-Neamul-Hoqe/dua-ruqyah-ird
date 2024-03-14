'use client'
import useCategories from "@/hooks/useCategories";
import useSubCategories from "@/hooks/useSubCategories";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { images } from "../ExportedImages/ExportedImages";
import { AuthContext } from "@/providers/AuthProvider";

const CategoryList = () => {
    const { cat, setCat } = useContext(AuthContext)
    const subCategories = useSubCategories();

    const [ subCatList, setSubCatList ] = useState(null)
    const categories = useCategories();

    useEffect(() => {
        subCategories && setSubCatList(subCategories?.filter(subCategory => subCategory?.cat_id === cat))
    }, [ subCategories, cat, setSubCatList ])

    return (
        <div>
            <h3 className="bg-green-600 text-white font-bold text-xl text-center py-4 rounded-t-lg">Categories</h3>
            <ul className="list-inside">
                {
                    categories?.length && subCategories?.length ? categories?.map(category => {

                        const { id, cat_icon, no_of_subcat, no_of_dua, cat_name_bn, cat_name_en } = category

                        return (
                            <li className="bg-white py-2 px-5 cursor-pointer last-of-type:rounded-b-lg" key={id} onClick={() => setCat(id)}>
                                <Link href={`/duas/${cat_name_en.replace(' ', '-')}?cat=${cat}`}>
                                    <span className="flex items-center gap-4 pb-3">
                                        <Image height={40} width={40} src={images[ cat_icon ]} alt={cat_icon} />
                                        <span className="flex flex-col gap-1">
                                            <span>{cat_name_bn}</span>
                                            <span className="text-sm text-gray-500">Subcategories: {no_of_subcat} Duas: {no_of_dua}</span>
                                        </span>
                                    </span>
                                </Link>
                                <ul className={`list-disc list-inside ms-10 ${id === cat ? '' : 'hidden'}`}>
                                    {
                                        subCatList?.length ?
                                            subCatList?.map(subcat => (
                                                <li className="border-s-2 border-dashed px-5 py-3 flex" key={subcat?.id}>
                                                    <Link href={`/duas/${cat_name_en.replace(' ', '-')}?cat=${cat}&subcat=${subcat?.id}`}>
                                                        <span className="flex flex-col gap-1">
                                                            <span>{subcat?.subcat_name_bn?.length > 20 ? subcat?.subcat_name_bn?.slice(0, 20) + '...' : subcat?.subcat_name_bn}</span>
                                                            <span className="text-sm text-gray-500">Duas: {subcat?.no_of_dua}</span>
                                                        </span>
                                                    </Link>
                                                </li>
                                            )) : null
                                    }
                                </ul>
                            </li>
                        )
                    }) : ''
                }
            </ul>
        </div>
    );
};

export default CategoryList;