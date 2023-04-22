import React from 'react'
import { ABOUTUS_PAGE } from '../../config/api'
import { useTranslation } from 'react-i18next';

export default function Ourteam() {
  const {img, founder, list_content } = ABOUTUS_PAGE.ourteam_aboutus
  const {t} = useTranslation();

  // render element
  const renderListQuestion = () => {
    return list_content.list_questions.map((_, index) => {
      return (
        <div className='space-y-4' key={index}>
          <h2 className='font-bold text-gray-600 text-xl'>{t(`storyAboutUs.${index}.question`)}</h2>
          <p className='text-sm'>{t(`storyAboutUs.${index}.answer`)}</p>
        </div>
      )
    })
  }

  // ----------------------------------------------------------------
  return (
    <div className='my-16'>
      <div className='container mx-auto'>

        <h2 className='text-center text-gray-600 text-xl hover:text-2xl md:text-4xl md:hover:text-5xl font-bold h-10'>{t(`headersAboutUs.story`)}</h2>

        <div className='md:mx-20 my-12'>
          <div className='flex flex-col items-center justify-center '>

            <div className='w-2/3  space-y-7'>

              <img className='w-full rounded-xl' src={img} alt="img-founder" />
              <h2 className=' text-center md:text-2xl text-xl font-bold'>{t(`headersAboutUs.caption`)}</h2>
              <p className='w-full  bg-gray-600 ' style={{ height: '0.5px' }}></p>
              
            </div>

            <div className='w-2/3 mt-5'>
              <div className='space-y-10 mt-5'>

                {renderListQuestion()}
                <p className='w-full  bg-gray-600 ' style={{ height: '0.5px' }}></p>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
