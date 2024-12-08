import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import CarCard from '../components/CarCard';


export default function page() {
  return (
    <div className='w-full flex'>
     <div className="first hidden sm:flex w-[25%]">
        <Image src={'/Nav Bar Side.png'} alt='' width={360} height={1600}/>
      </div>
      <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className=' w-full flex flex-col md:flex-row gap-5  items-center justify-around'>
            <div className='first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]'>
                <div>
                    <Image src={'/View.png'} alt='' width={492} height={360}/>

                </div>
                <div className=' flex items-center justify-between gap-2 lg:gap-0'>
                <Image src={'/View 1.png'} alt='' width={148} height={124}/>
                <Image src={'/View 2.png'} alt='' width={148} height={124}/>
                <Image src={'/View 3.png'} alt='' width={148} height={124}/>
                </div>
            </div>
            <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
  <Image
    src={"/Detail Car.png"}
    alt="Detail Car"
    width={492}
    height={392}
    className="w-full h-auto rounded-t-xl object-cover"
  />

  <div className="p-4 flex  items-center gap-4">
    <div className="flex items-center justify-between w-full">
      <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
        $80.00 / <span className="text-gray-500 text-sm lg:text-base">day $100.00</span>
      </h1>
    </div>
    <Link href={"/#"}>
      <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
        Rent Now
      </button>
    </Link>
  </div>
</div>
        </section>
        <section className=' w-full flex items-center justify-center'>
            <Image src={'/Reviews.png'} alt='' width={1010} height={452} className=' hidden md:flex'/>
            <Image src={'/Reviews (1).png'} alt='' width={492} height={384} className=' md:hidden'/>
        </section>
        <section className="popular w-full flex flex-col gap-5">
        <div className="first w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recent Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        </section>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        <CarCard name="Nissan GT -R" type="Sports" image="2.png" fuelCapacity="80KM" transmission="Manual" capacity="2 Seat" price={80.00} discountedPrice={100.00} favoriteIcon="Like.png" />
        <CarCard name="Kornigsegg" type="Sports" image="1.png" fuelCapacity="90KM" transmission="Manual" capacity="2 Seat" price={90.00} favoriteIcon="Like.png" />
        <CarCard name="Rolls Royce" type="Sports" image="3.png" fuelCapacity="70KM" transmission="Manual" capacity="2 Seat" price={96.00}  favoriteIcon="Like.png" />
        
        </div>

        <section className="popular w-full flex flex-col gap-5">
        <div className="first w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recommanded Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        </section>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        <CarCard name="Nissan GT -R" type="Sports" image="2.png" fuelCapacity="80KM" transmission="Manual" capacity="2 Seat" price={80.00} discountedPrice={100.00} favoriteIcon="Like.png" />
        <CarCard name="Kornigsegg" type="Sports" image="1.png" fuelCapacity="90KM" transmission="Manual" capacity="2 Seat" price={90.00} favoriteIcon="Like.png" />
        <CarCard name="Rolls Royce" type="Sports" image="3.png" fuelCapacity="70KM" transmission="Manual" capacity="2 Seat" price={96.00}  favoriteIcon="Like.png" />
        
        </div>
     
      </div>
    </div>
  )
}
