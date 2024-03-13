import Image from 'next/image';
import logo from "@/public/logo.svg";

const LeftSidebar = () => {
    return (
        <div className='rounded-3xl border min-h-full bg-white my-5 mx-2 md:w-24 max-md:hidden'>
            <Image className='px-3 pt-3 max-md:hidden' height={100} width={100} src={logo} alt='Dua-logo' />
        </div>
    );
};

export default LeftSidebar;