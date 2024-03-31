 import kice from './assets/img/10052.jpg';
 import logo from './assets/img/logo1.jpg';
// import kice1 from './assets/img/logo-removebg-preview (1).png';
import kice3 from './assets/img/logo-removebg-preview.png';
import { FaChevronDown } from "react-icons/fa";

 import kice5 from './assets/img/3.jpg';
 import kice6 from './assets/img/4.jpg';
 import kice7 from './assets/img/5.jpg';
import kice8 from './assets/img/6.jpg';
 import kice9 from './assets/img/7.jpg';
 import kice10 from './assets/img/8.jpg';
 import kice11 from './assets/img/9.jpg';
 import kice12 from './assets/img/10.jpg';
// import kice13 from './assets/img/11.jpg';
// import kice14 from './assets/img/12.jpg';
// import kice15 from './assets/img/13.jpg';
// import kice16 from './assets/img/14.jpg';
// import kice17 from './assets/img/15.jpg';
// import kice18 from './assets/img/16.jpg';
// import kice2 from './assets/img/1.jpg';
// import React from 'react';
// import Footer from './components/Footer';




const CountryList = () => {


  return (
    <>
  
      <div>

      <img className='w-full h-[24rem]' src={kice} alt=" my first photo" /> 
      </div>
      <div className="flex flex-row">
      <img className='bg-red-500 relative w-12 h-12 -mt-[22rem] ml-36' src={logo} alt=" my first photo" /> 
      <p className='relative px-12 text-3xl font-bold text-[#007DFC] -mt-[22rem] -ml-10'>Logoipsum</p>
      </div>
      <div className='ml-2 mr-[7rem]'>
      {/* <img className='-mt-[23rem] border border-lg-4 transparent ml-36' src={kice1} alt=" my first photo" /> */}
      <p className=' relative text-right hover:text-blue-500 text-white  -mt-[22rem] ml-[14rem]'>Countries</p>
      <div className=' relative flex justify-center items-center  text-white mt-[3.7rem] -ml-[18rem]'>
        <h1 className='relative flex justify-center items-center  text-white   text-4xl font-bold mt-[0.1rem] ml-[28rem]'>Country API App</h1>
      </div>
      <br />
      <h2 className='relative flex justify-center items-center mt-6  text-white  text-1xl font-bold  ml-[10rem]'>This is a simple app that allows you to search for countries and continents using the APP</h2>
      <br />
      <input type="text" placeholder='Search country by name' className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[80vh] ml-[31.2rem]" />
      <div className='mt-[10rem]'>
        <p className='relative mt-[4rem] text-2xl  ml-36'>View countries</p> <p className='left relative mt-[1rem] text-slate-500  ml-36'>page 1 of 5</p>
        <p className=' relative text-right flex  font-bold -mt-[2rem] ml-[75rem] cursor-pointer'  >Select continents <i className='mt-2 ml-2 cursor-pointer'><FaChevronDown /></i> </p>
       
      </div>
      <div className="flex flex-col ml-[5rem] ">
      <div className="flex  flex-row gap-[2rem] p-24 ml-8">
         <div className='flex flex-col justify-start items-start -mt-24'>
        
        <img className=' mt-[1.4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
       <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
   <div className='flex flex-col justify-start items-start -mt-36 '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice9} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 

   </div>
   <div className='flex flex-col justify-start items-start -mt-36 '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice8} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
    <div className='flex flex-col justify-start items-start -mt-36  '>
        
           <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice7} alt="" /> 
           <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
        

      </div>

      <div className='flex flex-col justify-start items-start -mt-36  '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice11} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
   </div>


   {/* second */}

   <div className="flex flex-row gap-[2rem] p-24 ml-8">
         <div className='flex flex-col justify-start items-start -mt-24'>
        
        <img className=' mt-[1.4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
       <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
   <div className='flex flex-col justify-start items-start -mt-36 '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice5} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 

   </div>
   <div className='flex flex-col justify-start items-start -mt-36 '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice7} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
    <div className='flex flex-col justify-start items-start -mt-36  '>
        
           <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice8} alt="" /> 
           <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
        

      </div>

      <div className='flex flex-col justify-start items-start -mt-36  '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice9} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
   </div>


   {/* thrid*/}
     

   <div className="flex flex-row gap-[2rem] p-24 ml-8">
         <div className='flex flex-col justify-start items-start -mt-24'>
        
        <img className=' mt-[1.4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
       <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
   <div className='flex flex-col justify-start items-start -mt-36 '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 

   </div>
   <div className='flex flex-col justify-start items-start -mt-36 '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
    <div className='flex flex-col justify-start items-start -mt-36  '>
        
           <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
           <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
        

      </div>

      <div className='flex flex-col justify-start items-start -mt-36  '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
   </div>



   {/* Fourth */}


   <div className="flex flex-row gap-[2rem] p-24 ml-8">
         <div className='flex flex-col justify-start items-start -mt-24'>
        
        <img className=' mt-[1.4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
       <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
   <div className='flex flex-col justify-start items-start -mt-36 '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 

   </div>
   <div className='flex flex-col justify-start items-start -mt-36 '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
    <div className='flex flex-col justify-start items-start -mt-36  '>
        
           <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
           <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
        

      </div>

      <div className='flex flex-col justify-start items-start -mt-36  '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
   </div>


   {/* fiveth */}


   <div className="flex flex-row gap-[2rem] p-24 ml-8">
         <div className='flex flex-col justify-start items-start -mt-24'>
        
        <img className=' mt-[1.4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
       <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
   <div className='flex flex-col justify-start items-start -mt-36 '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice6} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 

   </div>
   <div className='flex flex-col justify-start items-start -mt-36 '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
    <div className='flex flex-col justify-start items-start -mt-36  '>
        
           <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice10} alt="" /> 
           <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
        

      </div>

      <div className='flex flex-col justify-start items-start -mt-36  '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
   </div>


   {/* sixth */}

   <div className="flex flex-row gap-[2rem] p-24 ml-8">
         <div className='flex flex-col justify-start items-start -mt-24'>
        
        <img className=' mt-[1.4rem] w-[40rem] h-[12rem]' src={kice12} alt="" /> 
       <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
   <div className='flex flex-col justify-start items-start -mt-36 '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice9} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 

   </div>
   <div className='flex flex-col justify-start items-start -mt-36 '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice8} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
    <div className='flex flex-col justify-start items-start -mt-36  '>
        
           <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice7} alt="" /> 
           <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
        

      </div>

      <div className='flex flex-col justify-start items-start -mt-36  '>
        
        <img className=' mt-[4rem] w-[40rem] h-[12rem]' src={kice11} alt="" /> 
        <p className='font-bold text-2xl'>Vatican City</p>
       <p> <b >Capital</b> :Kigali</p>  
       <p> <b>Population</b>  :1207361</p>  
      <p> <b>Region</b>  :Europe</p> 
     

   </div>
   </div>
   </div>
    
    <nav aria-label="Page navigation example">
      <ul className="flex justify-center items-center mt-[4rem] ml-[9rem] -space-x-px h-8 text-sm">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
   <div className="flex  mt-[5rem] bg-slate-200 w-[94rem] object-contain h-[8rem] relative">
      <div className="flex flex-row mt-6">
      <img className='bg-yellow-500 relative w-12 h-12  ml-36' src={logo} alt=" my first photo" /> 
      <p className='relative px-12 text-3xl  font-bold text-[#007DFC]  -ml-10'>Logoipsum</p>
      <p className='flex ml-[41rem] '>Copyright @ 2024. All right reserved.</p>
      </div>
      </div>
      </div >
     
      
    </>
  )
}

export default CountryList
