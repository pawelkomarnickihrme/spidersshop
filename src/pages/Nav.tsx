import Link from 'next/link';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

function Nav() {
  return (
    <nav className="bg-white py-5 px-100 flex justify-center items-center">
      <div className="flex justify-center items-center">
        <Link href="/">
          <span className="text-l font-bold mr-10">logo</span>
        </Link>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border  border-gray-200 rounded py-2 px-2 mr-2 placeholder:text-black  focus:outline-none focus:border-indigo-500"
        />
        <FiSearch className="text-black" />
      </div>

      <div className="flex-grow"></div>
      <div className="flex items-center">
        <div className="mr-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600"
              name="active"
            />
            <span className="ml-2 text-gray-700">Active</span>
          </label>
        </div>
        <div className="mr-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600"
              name="promotion"
            />
            <span className="ml-2 text-gray-700">Promo</span>
          </label>
        </div>
        <button className="text-indigo-400 bg-white py-2 px-6 border border-indigo-400 rounded">
          Log In
        </button>
      </div>
    </nav>
  );
}

export default Nav;
