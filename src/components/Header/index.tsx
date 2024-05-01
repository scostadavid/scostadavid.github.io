import React from "react";
import { Link } from "gatsby";

export default (): JSX.Element => {
  return (
    <header className="text-slate-200  bg-[#fff]">
      <div className="flex flex-row max-w-xl p-4 mx-auto">
        <Link to="/">
          <p className="text-[#005aee] font-bold text-2xl">{'scostadavid'}</p>
        </Link>
      </div>
    </header>
  )
}