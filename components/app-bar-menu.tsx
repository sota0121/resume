import React from 'react';
import Link from 'next/link';

type MenuProps = {
  title: string;
  href: string;
  description: string;
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

export const AppBarMenu: React.FC = ( props: MenuProps ) => {
  return (
    <li>
      <Link href={props.href} className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-gray-800 md:p-0 dark:text-white" aria-current="page">
        {props.title}
      </Link>
    </li>
  )
}

export const AppBarMenuList: React.FC = () => {
  return (
    <>
      {/** humburger menu (todo) */}
      {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button> */}
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex flex-col p-2 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
          {MenuList.map((menu, index) => {
            return <AppBarMenu key={index} {...menu} />
          })}
        </ul>
      </div>
    </>
  )
}

export default AppBarMenuList;