import Image from 'next/image';
import Link from 'next/link';

import logo from "@/public/logo.svg";
import home from "@/public/home.svg"
import grid from "@/public/grid.svg"
import tips from "@/public/tips.svg"
import badge from "@/public/badge.svg"
import kitab from "@/public/kitab.svg"
import bookmark from "@/public/bookmark.svg"

const LeftSidebar = () => {
    return (
        <div className='rounded-3xl border h-screen bg-white my-5 mx-2 overflow-y-scroll overflow-x-hidden max-md:hidden'>
            <div className='rounded-3xl border max-h-full min-h-screen h-full mb-4 bg-white md:flex flex-col justify-between'>
                <Link href='/'><Image className='px-3 pt-3 max-md:hidden' height={100} width={100} src={logo} alt='Dua-logo' /></Link>
                <div className='md: flex flex-col items-center gap-4'>
                    <Link href='/'><Image className='px-3 pt-3 max-md:hidden' height={60} width={60} src={home} alt='Dua-logo' /></Link>
                    <Link href='/'><Image className='px-3 pt-3 max-md:hidden' height={60} width={60} src={grid} alt='Dua-logo' /></Link>
                    <Link href='/'><Image className='px-3 pt-3 max-md:hidden' height={60} width={60} src={tips} alt='Dua-logo' /></Link>
                    <Link href='/'><Image className='px-3 pt-3 max-md:hidden' height={60} width={60} src={bookmark} alt='Dua-logo' /></Link>
                    <Link href='/'><Image className='px-3 pt-3 max-md:hidden' height={60} width={60} src={badge} alt='Dua-logo' /></Link>
                    <Link href='/'><Image className='px-3 pt-3 max-md:hidden' height={60} width={60} src={kitab} alt='Dua-logo' /></Link>
                </div>
                <Link href='/'><Image className='px-3 pt-3 max-md:hidden' height={100} width={100} src={logo} alt='Dua-logo' /></Link>

            </div>
        </div>
    );
};

export default LeftSidebar;