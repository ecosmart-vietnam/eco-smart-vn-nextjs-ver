import React from 'react'

export default function ItemExecutive({ item, setShowModal, setContentCard, t, index}) {
    
    return (
        <div style={{ height: '500px' }} onClick={() => {
            setShowModal(true)
            setContentCard(item)
        }} className='hover:bg-green-600 m-2 hover:m-0 duration-200 text-center my-5 p-5 bg-white rounded-xl cursor-pointer'>

                <div className='flex flex-col items-center my-auto mt-16'>
                    <img style={{ border: '10px solid #375849' }} className='rounded-full w-2/3' src={item.img} alt="img-executive" />
    
                    <div className='space-y-3 pt-5 text-gray-600'>
                        <p className='text-xl  font-bold'>{t(`executiveAboutUs.${index}.name`)}</p>
                        <p className='text-lg'>{t(`executiveAboutUs.${index}.position`)}</p>
                        {item.info ? <p className='text-sm mt-7'>{t(`executiveAboutUs.${index}.info`)}</p> : null}
                    </div>
    
                </div>

        </div>
    )
}
