'use client'
import DuaCard from '@/components/dua/DuaCard';
import Loader from '@/components/loader/Loader';
import useDuas from '@/hooks/useDuas';
import { useEffect, useState } from 'react';

const CategoryPage = ({ searchParams }) => {
    const [ duas, setDuas ] = useState()
    const allDuas = useDuas()
    const { cat, subcat } = searchParams

    console.log(cat, subcat);

    /* Filter according to category id and subcategory id */
    useEffect(() => {
        if (allDuas?.length) {
            let newDuaSet = allDuas?.filter(dua => dua?.cat_id == cat)

            if (subcat) {
                newDuaSet = newDuaSet?.filter(dua => dua?.subcat_id == subcat)
            }

            setDuas(newDuaSet)
        }
    }, [ allDuas, setDuas, cat, subcat ])

    return (
        <div className='flex flex-col gap-4'>
            {
                duas?.length ?
                    duas.map(dua => (
                        <DuaCard key={dua?.id} dua={dua} />
                    ))
                    : <Loader loaderOpen={!!duas?.length} />
            }
        </div>
    );
};

export default CategoryPage;