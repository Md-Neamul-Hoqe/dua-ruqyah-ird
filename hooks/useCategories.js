import { useEffect, useState } from "react";


const useCategories = () => {
    const [ categories, setCategories ] = useState(null)

    useEffect(() => {
        const subscribe = async () => {
            return await fetch('http://localhost:5000/api/v1/categories', {
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