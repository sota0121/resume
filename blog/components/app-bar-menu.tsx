import React from 'react';
import Link from 'next/link';
import { MobileNavProps } from '@material-tailwind/react';

type MenuProps = {
  title: string;
  href: string;
  description: string;
  onClick?: () => void;
};

const MenuList = [
  {
    title: 'Profile',
    href: '/profile',
    description: 'Profile of Sota Lab',
  },
  {
    title: 'Blog',
    href: '/', // Now Home Page is Blog Page
    description: 'Blog of Sota Lab',
  }
]

const AppBarMenu: React.FC<MenuProps> = ( props: MenuProps ) => {
  return (
    <li>
      {/* <Link href={props.href} className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-gray-800 md:p-0 dark:text-white" aria-current="page"> */}
      <Link href={props.href} className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0">
        {props.title}
      </Link>
    </li>
  )
}

const MobileAppBarMenu: React.FC<MenuProps> = ( props: MenuProps ) => {
  return (
    <li>
      <Link className="text-xl font-medium my-4" href={props.href} onClick={props.onClick}>
        {props.title}
      </Link>
    </li>
  )
};

type MobileAppBarMenuListProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileAppBarMenuList: React.FC<MobileAppBarMenuListProps> = ( props: MobileAppBarMenuListProps) => {
  // State
  const { isOpen, setIsOpen } = props;

  // Event Handler
  const hundleMenuClick = () => {
    setTimeout(() => {setIsOpen(!isOpen)}, 100);
  }

  // Render
  return (
    // <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${isOpen ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
    <div>
    {/* <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform -translate-x-0 transition-transform duration-300 ease-in-out filter drop-shadow-md `}> */}
      <ul className='flex flex-row p-2 mt-2 md:flex-row md:space-x-4 md:mt-0 xs:flex-row xs:space-x-4'>
        <div className="flex flex-row ml-4">
          {MenuList.map((menu, index) => {
            return <MobileAppBarMenu key={index} onClick={hundleMenuClick} {...menu} />
          })}
        </div>
      </ul>
    </div>
  )

};

export const AppBarMenuList: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {/** humburger menu (todo) */}
      {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button> */}
      <div className="w-full md:block md:w-auto" id="navbar-default">
        {/* <MobileAppBarMenuList isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        {/* <ul className="flex flex-col p-2 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"> */}
        <ul className='flex flex-row justify-end p-2 mt-2 md:flex-row md:space-x-4 md:mt-0 xs:flex-row xs:space-x-4 xs:mt-0'>
          {MenuList.map((menu, index) => {
            return <AppBarMenu key={index} {...menu} />
          })}
        </ul>
      </div>
    </>
  )
}

export default AppBarMenuList;