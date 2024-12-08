import Image from "next/image";
import Hero from "./components/Hero";
import Header from "./components/Header";import CarCard from "./components/CarCard";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <Hero/>
      <section className="popular w-full flex flex-col gap-5">
        <div className="first w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        </section>
      <CarCard name="Kornigsegg" type="Sports" image="1.png" fuelCapacity="90KM" transmission="Manual" capacity="2 Seat" price={90.00} favoriteIcon="Like.png" />
      <CarCard name="Nissan GT -R" type="Sports" image="2.png" fuelCapacity="80KM" transmission="Manual" capacity="2 Seat" price={80.00} discountedPrice={100.00} favoriteIcon="Like.png" />
      <CarCard name="Rolls Royce" type="Sports" image="3.png" fuelCapacity="70KM" transmission="Manual" capacity="2 Seat" price={96.00}  favoriteIcon="Like.png" />
      <CarCard name="Nissan GT -R" type="Sports" image="4.png" fuelCapacity="80KM" transmission="Manual" capacity="2 Seat" price={80.00} discountedPrice={100.00} favoriteIcon="Like.png" />

      <div className="mt-10"> {/* Add top margin here */}
            <h3 className="ml-10 p-4 w-11/12 text-gray-500">Recomandation Car</h3>
      </div>

      <CarCard name="Kornigsegg" type="Sports" image="1.png" fuelCapacity="90KM" transmission="Manual" capacity="2 Seat" price={90.00} favoriteIcon="Like.png" />
      <CarCard name="Nissan GT -R" type="Sports" image="2.png" fuelCapacity="80KM" transmission="Manual" capacity="2 Seat" price={80.00} discountedPrice={100.00} favoriteIcon="Like.png" />
      <CarCard name="Rolls Royce" type="Sports" image="3.png" fuelCapacity="70KM" transmission="Manual" capacity="2 Seat" price={96.00}  favoriteIcon="Like.png" />
      <CarCard name="Nissan GT -R" type="Sports" image="4.png" fuelCapacity="80KM" transmission="Manual" capacity="2 Seat" price={80.00} discountedPrice={100.00} favoriteIcon="Like.png" />
      <CarCard name="Kornigsegg" type="Sports" image="1.png" fuelCapacity="90KM" transmission="Manual" capacity="2 Seat" price={90.00} favoriteIcon="Like.png" />
      <CarCard name="Nissan GT -R" type="Sports" image="2.png" fuelCapacity="80KM" transmission="Manual" capacity="2 Seat" price={80.00} discountedPrice={100.00} favoriteIcon="Like.png" />
      <CarCard name="Rolls Royce" type="Sports" image="3.png" fuelCapacity="70KM" transmission="Manual" capacity="2 Seat" price={96.00}  favoriteIcon="Like.png" />
      <CarCard name="Nissan GT -R" type="Sports" image="4.png" fuelCapacity="80KM" transmission="Manual" capacity="2 Seat" price={80.00} discountedPrice={100.00} favoriteIcon="Like.png" />

      <section className="button  w-full text-center">
        <Link href="categories">
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
    

    
  );
}
