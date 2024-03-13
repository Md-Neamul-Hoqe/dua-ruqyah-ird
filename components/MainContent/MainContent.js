'use client'
import useDuas from '@/hooks/useDuas';
import React from 'react';

const MainContent = () => {
    const duas = useDuas()

    return (
        <aside className='lg:flex-[3] max-lg:w-full'>
            <ul className="list-inside">
                {
                    duas?.length ? duas?.map(dua => {
                        return <li className="border py-2 px-5" key={dua?.id}>{dua?.dua_name_bn}</li>
                    }) : 'No data found'
                }
            </ul>
        </aside>
    );
};

export default MainContent;