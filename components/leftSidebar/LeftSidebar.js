import Image from 'next/image';
import logo from "@/public/logo.svg";

const LeftSidebar = () => {
    return (
        <div className='rounded-3xl border min-h-full w-24 bg-white my-5'>
            <Image className='px-5 pt-5 max-md:hidden' height={100} width={100} src={logo} alt='Dua-logo' />
        </div>
    );
};

export default LeftSidebar;