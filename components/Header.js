import { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
// theme css file

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDay, setStartDay] = useState(new Date());
  const [endDay, setEndDay] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const handleSelect = ranges => {
    setStartDay(ranges.selection.startDate);
    setEndDay(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDay,
    endDate: endDay,
    key: "selection",
  };
  const resetInput = () => {
    setSearchInput("");
    setStartDay(new Date());
    setEndDay(new Date());
  };

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* left  */}
      <div className='relative flex items-center justify-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* Middle */}
      <div className='flex items-center  md:border-2 rounded-full py-2 md:shadow-sm '>
        <input
          className='pl-5 outline-none bg-transparent flex-grow text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder='Start your search'
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <SearchIcon className=' hidden md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>
      {/* Right */}
      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p className='hidden md:inline'>Become a host</p>
        <GlobeAltIcon className='hidden md:inline-flex h-6 cursor-pointer' />

        <div className=' flex item-center space-x-2 border-2 border-gray-300 p-2 rounded-full'>
          <MenuIcon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer' />
        </div>
      </div>
      {searchInput && (
        <div className='hidden sm:flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl font-semibold flex-grow '>
              Number of Guests
            </h2>
            <UsersIcon className='h-5' />
            <input
              className='w-12 pl-2 text-red-400 tx-lg outline-none'
              type='number'
              value={noOfGuests}
              min={1}
              onChange={e => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>
              Cancle
            </button>
            <button className='flex-grow text-red-400'>Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
