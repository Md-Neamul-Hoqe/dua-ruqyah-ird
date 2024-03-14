'use client'
import { getBaseURL } from "@/utils/getBaseURL";
import { useEffect, useState } from "react";


const useCategories = () => {
    const [ categories, setCategories ] = useState(null)

    useEffect(() => {
        const subscribe = async () => {
            return await fetch(`${getBaseURL}/categories`, {
                cache: 'force-cache',
                method: 'GET'
            }).then(res => res.json()).then(data => setCategories(data)).catch(console.error)
        }

        return () => {
            return subscribe()
        }
    }, [ setCategories ])
    return categories;
};

export default useCategories;