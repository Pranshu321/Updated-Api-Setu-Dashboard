import React from 'react'
import ModalSvg from "../svg/ModalSvg.svg";
import Image from 'next/image';

const Modals = ({setModal}) => {
  return (
    <div className='w-[720px] h-[200px] bg-white rounded-lg shadow-2xl p-6'>
      <div className="flex gap-x-6 min-h-full">
        <div>
          <Image src={ModalSvg} alt='Image' width={"100%"} height={"100%"} />
        </div>
        <div className="flex flex-col gap-y-5">
          <div className='text-NavColor font-semibold text-xl'>Looks like it{"’"}s your first time adding an API</div>
          <div className='text-gray-600'>
            <p className='text-sm'>
            We can walk you through the process in 6 simple steps. However, you
            have the option to skip the tutorial if you prefer
            </p>
          </div>
          <div className='flex absolute right-4 bottom-5 justify-end gap-x-4'> 
            <button className="text-gray-500 text-sm font-semibold" onClick={() => setModal(false)}>Skip Tutorial</button>
            <button className="text-white text-sm font-semibold bg-NavColor px-4 py-2 rounded-md">let's Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modals
