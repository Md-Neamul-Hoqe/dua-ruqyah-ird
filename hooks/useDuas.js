import { useEffect, useState } from "react";


const useDuas = () => {
    const [ duas, setDuas ] = useState(null)

    useEffect(() => {
        const subscribe = async () => {
            return await fetch('http://localhost:5000/api/v1/dua', {
                cache: 'force-cache',
                method: 'GET'
            }).then(res => res.json()).then(data => setDuas(data)).catch(console.error)
        }

        return () => {
            return subscribe()
        }
    }, [ setDuas ])

    return duas;
};

export default useDuas;