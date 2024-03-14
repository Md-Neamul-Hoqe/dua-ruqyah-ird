'use client'
import { getBaseURL } from "@/utils/getBaseURL";
import { useEffect, useState } from "react";


const useSubCategories = () => {
    const [ subCategories, setSubCategories ] = useState(null)

    useEffect(() => {
        const subscribe = async () => {
            return await fetch(`${getBaseURL}/sub-categories`, {
                cache: 'force-cache',
                method: 'GET'
            }).then(res => res.json()).then(setSubCategories).catch(console.error)
        }

        return () => {
            return subscribe()
        }
    }, [ setSubCategories ])
    return subCategories;
};

export default useSubCategories;