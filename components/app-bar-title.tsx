import React from "react"
import Link from "next/link"

export const AppBarTitle: React.FC = () => {
  return (
    <>
      <Link href="/" className="flex items-center">
        {/** logo image can't be displayed expectedly */}
        {/* <Image src="/logo/sota-lab-icon-alpha0.png" className="h-6 mr-3 sm:h-9" alt="Sota Lab Logo" width={500} height={500} /> */}
        <span className="text-2xl md:text-4xl self-center text-xl font-semibold whitespace-nowrap">Less is More</span>
      </Link>
    </>
  )
}

export default AppBarTitle;