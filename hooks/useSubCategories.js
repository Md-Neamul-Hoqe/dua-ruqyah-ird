'use client'
import { useEffect, useState } from "react";


const useSubCategories = () => {
    const [ subCategories, setSubCategories ] = useState(null)

    useEffect(() => {
        const subscribe = async () => {
            return await fetch('http://localhost:5000/api/v1/sub-categories', {
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