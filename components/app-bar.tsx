import Image from 'next/image';
import Link from 'next/link';
import AppBarTitle from '@/components/app-bar-title';
import AppBarMenuList from '@/components/app-bar-menu';


export const AppBar: React.FC = () => {
  return (
    <>
      <nav className="bg-neutral-50 border-gray-200 mb-4 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <AppBarTitle />
          <AppBarMenuList />
        </div>
      </nav>
    </>
  )
};

export default AppBar;