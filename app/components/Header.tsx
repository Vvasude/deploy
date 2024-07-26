import Link from '@/node_modules/next/link';
import Image from '@/node_modules/next/image';
const Header = () => {
  return (
    <div className='flex justify-between p-5 px-5 shadow-sm '>
      <div>
        <Link href='/'><Image src='/Logos/CTCCLogo.webp' alt='logo' width={350} height={350} /></Link>
      </div>
      <div>
        <ul className='flex gap-7 items-center'>
          <li className='text-[20px] hover:text-purple-800 cursor-pointer'>
            {/* Use Link component properly */}
            <Link href='/'>Home</Link>
          </li>
          <li className='text-[20px] hover:text-purple-800 cursor-pointer'>
            <Link href='/AboutUs'>About Us</Link>
          </li>
          <li className='text-[20px] hover:text-purple-800 cursor-pointer'>
            <Link href='/Membership'>Membership</Link>
          </li>
          <li className='text-[20px] hover:text-purple-800 cursor-pointer'>
            <Link href='/BusinessCentre'>Business Centre</Link>
          </li>
          <li className='text-[20px] hover:text-purple-800 cursor-pointer'>
            <Link href='/Events'>Events</Link>
          </li>
          <li className='text-[20px] hover:text-purple-800 cursor-pointer'>
            <Link href='/News'>News</Link>
          </li>
          <li className='text-[20px] hover:text-purple-800 cursor-pointer'>
            <Link href='/Gallery'>Gallery</Link>
          </li>
          <li className='text-[20px] hover:text-purple-800 cursor-pointer'>
            <Link href='/ContactUs'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;