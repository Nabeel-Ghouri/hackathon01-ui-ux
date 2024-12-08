import Link from "next/link";
import React from "react";

// Define the types for the CarCard component props
type CarCardProps = {
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  discountedPrice?: number;
  favoriteIcon: string;
};

// CarCard component
export const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  capacity,
  price,
  discountedPrice,
  favoriteIcon,
}) => {
  return (
    
    <div className="float-start ml-10 mt-10 ">
      
    <div className="overflow-hidden p-4  bg-white rounded-xl min-w-[240px] w-[290px] max-md:px-5 relative border border-gray-50">
      {/* Heart Icon Positioning */}
      <img
        loading="lazy"
        src={favoriteIcon}
        alt="Favorite Icon"
        className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10"
      />
      <div className="flex gap-5 justify-between">
        <div className="flex flex-col">
          <div className="text-xl tracking-tight text-gray-900">{name}</div>
          <div className="mt-1 text-sm tracking-tight text-slate-400">{type}</div>
        </div>
      </div>
      <img
        loading="lazy"
        src={image}
        alt={`${name} car`} // Correct template literal syntax for alt text
        className="object-contain self-center mt-16 max-w-full aspect-[3.18] w-[204px] max-md:mt-10"
      />
      <div className="flex gap-4 items-start mt-16 text-sm font-medium leading-5 text-slate-400 max-md:mt-10">
        <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb9f5fa088a33a8329469c11ed8f42f7df3e0fd11b9aa0921af94d8d3307f051?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
            alt="Fuel Icon"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-7">{fuelCapacity}</div>
        </div>
        <div className="flex gap-1 items-start whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/563fd9367e8be9e271233fa362e88c8b2205c920475aad51a787f2599d87477e?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
            alt="Transmission Icon"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-12">{transmission}</div>
        </div>
        <div className="flex gap-1.5 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd12c9762ffaa585959a2bb1c514f631f14a3524f88d9c2bd9d3da13bf9fa3d9?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
            alt="Capacity Icon"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-[60px]">{capacity}</div>
        </div>
      </div>
      <div className="flex gap-3 mt-8 w-full">
        <div className="flex flex-col font-bold text-slate-900">
          <div className="text-xl">
            ${price}.00/ <span className="text-sm text-slate-400">day</span>
          </div>
          {discountedPrice && (
            <div className="mt-1 text-sm text-gray-400">${discountedPrice}.00</div>
          )}
        </div>
        <Link href="details">
        <button
          className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
          aria-label={`Rent ${name} now`} // Correct template literal syntax for aria-label
        >
          Rent Now
        </button>
        </Link>
        
      </div>
    </div>
    </div>
  );
};

export default CarCard;
