import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ISearchParms } from './Types';

function Nav({
  searchParms,
  setSearchParms,
}: {
  searchParms: ISearchParms;
  setSearchParms: Dispatch<SetStateAction<ISearchParms>>;
}) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParms({
      ...searchParms,
      searchValue: event.target.value,
    });
  };

  const handleActiveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParms({
      ...searchParms,
      isActive: event.target.checked,
    });
  };

  const handlePromotionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchParms({
      ...searchParms,
      isPromotion: event.target.checked,
    });
  };
  return (
    <nav className="bg-white w-screen px-28 py-5 px-100 mr-10 flex justify-center items-center">
      <div className="flex justify-center items-center">
        <Link href="/">
          <span className="text-l font-bold mr-10">logo</span>
        </Link>
      </div>

      <div className="flex items-center ">
        <div className="relative flex-grow ">
          <input
            type="text"
            placeholder="Search"
            onChange={handleInputChange}
            className=" border border-gray-200 rounded py-2 px-2 pr-0 placeholder:text-black placeholder:text-xs focus:outline-none focus:border-indigo-500"
          />
          <FiSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black" />
        </div>
        <div className="flex items-center ml-auto">
          <div className="ml-4 mr-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox border-gray-300 bg-red-500 text-white"
                name="active"
                onChange={handleActiveChange}
              />
              <span className="ml-2 text-black text-l">Active</span>
            </label>
          </div>
          <div className="mr-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox border border-gray-200 text-indigo-600"
                name="promotion"
                onChange={handlePromotionChange}
              />
              <span className="ml-2 text-black text-l">Promo</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>
      <button className="text-indigo-400 bg-white py-2 px-2 lg:px-6 border border-indigo-400 rounded whitespace-nowrap">
        Log In
      </button>
    </nav>
  );
}

export default Nav;
