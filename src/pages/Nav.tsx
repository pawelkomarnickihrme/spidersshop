import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ISearchParms } from './Types';
import { useMediaQuery } from '@mui/material';

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
  const isMobile = useMediaQuery('(max-width: 768px)');

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
    <nav
      className={`bg-white  ${
        isMobile
          ? 'flex flex-col px-4 py-3'
          : 'flex justify-between items-center px-28 py-10'
      }`}
    >
      {isMobile ? (
        <>
          <div className="flex justify-between items-center mb-2">
            <Link href="/">
              <span className="text-l font-bold mr-10">logo</span>
            </Link>
            <button className="text-blue-500 bg-white py-1 px-2 border border-blue-500 rounded whitespace-nowrap">
              Log In
            </button>
          </div>
          <div className="w-full">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search"
                onChange={handleInputChange}
                className="border border-gray-200 rounded my-4 py-2 px-2 pr-0 placeholder:text-black placeholder:text-xs focus:outline-none focus:border-indigo-500 w-full"
              />
              <FiSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black" />
            </div>
            <div className=" flex-grow">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox border-gray-300 bg-red-500 text-white"
                  name="active"
                  onChange={handleActiveChange}
                />
                <span className="ml-2 text-black text-l">Active</span>
              </label>
              <label className=" pl-5 inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox border border-gray-200 text-blue-500"
                  name="promotion"
                  onChange={handlePromotionChange}
                />
                <span className="ml-2 text-black text-l">Promo</span>
              </label>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center h-50">
            <Link href="/">
              <span className="text-l font-bold mr-10">logo</span>
            </Link>
          </div>
          <div className="pl-10"></div>
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search"
              onChange={handleInputChange}
              className="border border-gray-200 rounded py-2 px-2 pr-0 placeholder:text-black placeholder:text-xs focus:outline-none focus:border-indigo-500 w-full"
            />
            <FiSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black" />
          </div>
          <div className="flex items-center">
            <div className="ml-4 mr-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox border-gray-300 text-white"
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
            <div className="px-20"></div>
            <button className="text-blue-500 bg-white py-2 px-2 lg:px-6 border border-blue-500 rounded whitespace-nowrap">
              Log In
            </button>
          </div>
        </>
      )}
    </nav>
  );
}

export default Nav;
