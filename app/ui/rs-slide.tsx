import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Document from 'next/document';
import Image from 'next/image';

export default function RsSlide() {
  return (
    <>
        {/* <rs-module-wrap id="rev_slider_2_1_wrapper" data-source="gallery">
        </rs-module-wrap> */}
        <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className='hidden md:block'
            alt='Screenshot of the dashboard project showing desktop version'
          />
    </>
  );
}
