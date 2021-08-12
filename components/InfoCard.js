import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className='flex flex-col space-y-5 md:flex-row md:space-x-5 px-2 py-7 border-t cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out'>
      <div className='relative h-52  md:w-80 md:h-52 flex-shrink-0'>
        <Image
          src={img}
          layout='fill'
                  objectFit='cover'
                  className='rounded-2xl'
        />
      </div>

      <div className='flex flex-col justify-between flex-grow '>
        <div className='flex justify-between '>
          <p className='text-sm text-gray-400'>{location}</p>
          <HeartIcon className='h-7 cursor-pointer' />
        </div>

        <h4 className=' text-xl mt-2'>{title}</h4>
        <hr className='w-10 mt-2' />

        <p className='text-sm text-gray-400 mt-2'>{description}</p>

        <div className='flex justify-between pt-5 items-end'>
          <div className='flex items-center'>
            <StarIcon className='text-red-400 h-5' />
            <p>{star}</p>
          </div>

          <div>
            <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
            <p className='text-right font-extralight'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
