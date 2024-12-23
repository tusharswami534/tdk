    import React, { useEffect, useState } from 'react'
import { HEADER_LIST } from '../utils/helper'
import { SearchIcon } from '../utils/icons'
import { Link } from 'react-router'
    
    const Header = () => {
        const  [open , setOpen] =useState(false)
        
        useEffect(() => {
          const handleOverflow = () => {
              if (open && window.innerWidth < 1024) {
                  document.body.classList.add("overflow-hidden");
              } else {
                  document.body.classList.remove("overflow-hidden");
              }
          };
          handleOverflow();
          window.addEventListener("resize", handleOverflow);
          return () => {
              window.removeEventListener("resize", handleOverflow);
          };
      }, [open]);

      const [search , setSearch] = useState(false)
      const handleSearch = () => {
        setSearch(!search)
        setOpen(false)
      }

      useEffect(() => {
        if (search) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      }, [search]);

      return (
        <div className='bg-tory-blue w-full'>
             <div className='bg-congress-blue'>
              <img className='max-w-[1009px] w-full mx-auto max-lg:hidden' src="./assets/images/webp/header-top-layer.webp" alt="top layer" />
              </div>
        <div className='max-w-[1440px] mx-auto relative'>
            <div className="w-full bg-congress-blue">
              </div>
              <div className={`flex justify-between max-w-[1183px] max-xl:px-7 max-lg:pt-3 max-lg:pb-2.5 max-lg:items-center max-md:px-4 mr-custom-8 max-lg:mr-0 ml-auto`}>
                <a href="/" className='text-white max-lg:flex hidden leading-110 text-custom-sm'>
                <img className='max-w-[80px] max-sm:max-h-[20px]' src="./assets/images/webp/logo.webp" alt="logo" />
                </a>
                <div onClick={() =>  setOpen(!open)} className=' text-white hidden max-lg:flex flex-col justify-center items-center'>
                <div  className=' gap-1 relative z-50 overflow-hidden cursor-pointer justify-center items-center flex size-4 max-lg:size-6 max-md:size-4 flex-col'>
                    <div className={`flex w-4 max-lg:w-6 max-md:w-4 h-0.5 bg-white transition-all duration-300 ${open === true ? 'translate-x-10' : ''}`}></div>
                    <div className={`flex w-4 max-lg:w-6 max-md:w-4 h-0.5 bg-white relative after:absolute after:w-4 after:h-0.5 max-lg:after:w-6 max-md:after:w-4 after:bg-white after:top-0 after:transition-all after:duration-300 after:left-0 transition-all duration-300   ${open === true ? 'rotate-45 after:rotate-90' : ''}`}></div>
                    <div className={`flex w-4 max-lg:w-6 max-md:w-4 h-0.5 bg-white transition-all duration-300 ${open === true ? '-translate-x-10' : ''}`}></div>
                </div>
                <p className='text-[10px] max-lg:text-lg max-md:text-[10px] text-white relative z-50'>MENU</p>
                </div>
                <div className={`flex items-end gap-9 z-40 pt-11 pb-custom-3 max-lg:fixed max-lg:left-1/2 max-lg:top-1/2 max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:w-0 max-lg:overflow-hidden max-lg:h-0 max-lg:transition-all max-lg:duration-300 max-lg:flex-col max-lg:bg-black max-lg:justify-center max-lg:items-center ${open === true ? 'max-lg:w-[100%] max-lg:h-[100%]' : ''}`}>
                    {HEADER_LIST.map((item , index) => (
                      <Link onClick={() => setOpen(false)} to={item.path} className={`text-white leading-110 text-custom-sm max-lg:text-2xl max-md:text-custom-sm max-sm:text-custom-sm relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 max-lg:opacity-0 transition-all duration-300 hover:after:w-full ${open === true ? 'max-lg:opacity-100' : ''}`}>{item.name}</Link>
                    ))}
                     <button onClick={handleSearch} className='max-lg:size-8 max-md:size-4 search-icon justify-center items-center hidden max-lg:flex transition-all duration-300' type='submit'>
                    <SearchIcon/>
                  </button>
                </div>
                <form className='max-w-[257px] w-full max-lg:hidden border-white max-h-[31px] items-center flex border mt-[27px] mb-4 pr-3.5 border-solid rounded-custom-1'>
                  <input placeholder='Search by Keyword' required className='bg-transparent text-white py-2 px-3.5 placeholder:text-white outline-none w-[90%] ' type="text"  />
                  <button className='search-icon transition-all duration-300' type='submit'>
                    <SearchIcon/>
                  </button>
                </form>
                <form className={`max-w-[257px] w-full fixed z-[51] -top-1/2 left-1/2 -translate-x-1/2 !opacity-100 -translate-y-1/2  border-white max-h-[31px] items-center flex border mt-11 mb-custom-3 pr-3.5 border-solid rounded-custom-1 transition-all duration-300 ${search === true ? 'top-0' : ''}`}>
                  <input placeholder='Search by Keyword' required className='bg-transparent text-white py-2 px-3.5 placeholder:text-white outline-none w-[90%] ' type="text"  />
                  <button onClick={()=>setSearch(false)} className='search-icon transition-all duration-300' type='submit'>
                    <SearchIcon/>
                  </button>
                </form>
                <div onClick={()=>setSearch(false)} className={`fixed top-0 left-0 w-full h-full bg-black z-10 opacity-80 transition-all duration-300 ${search === true ? '' : 'hidden'}`}></div>
              </div>
        </div>
        </div>
      )
    }
    
    export default Header
    