import React from 'react';
import Logo01 from '../../public/images/ourexhibitor/AMF.png';
import Logo02 from '../../public/images/ourexhibitor/Brokeree.png';
import Logo03 from '../../public/images/ourexhibitor/FXBackOffice.png';
import Logo04 from '../../public/images/ourexhibitor/FinanceMagnates.png';
import Logo05 from '../../public/images/ourexhibitor/FinancialMarkets.png';
import Logo06 from '../../public/images/ourexhibitor/GBE-Prime.png';
import Logo07 from '../../public/images/ourexhibitor/Leedia.png';
import Logo08 from '../../public/images/ourexhibitor/Nobel.png';
import Logo09 from '../../public/images/ourexhibitor/Paytiko.png';
import Logo10 from '../../public/images/ourexhibitor/Shufti.png';
import Logo11 from '../../public/images/ourexhibitor/Spays.png';
import Logo12 from '../../public/images/ourexhibitor/SumSub.png';
import Logo13 from '../../public/images/ourexhibitor/TFBrokers.png';
import Logo14 from '../../public/images/ourexhibitor/TradingCentral.png';
import Logo15 from '../../public/images/ourexhibitor/TrustPay.png';
import Logo16 from '../../public/images/ourexhibitor/XOpenHub.png';
import Logo17 from '../../public/images/ourexhibitor/YourBourse.png';
import SliderImage from '../SliderImage';
import Link from 'next/link';

const URL_IMAGES = [
	Logo01,
	Logo02,
	Logo03,
	Logo04,
	Logo05,
	Logo06,
	Logo07,
	Logo08,
	Logo09,
	Logo10,
	Logo11,
	Logo12,
	Logo13,
	Logo14,
	Logo15,
	Logo16,
	Logo17,
];

function OurExhibitor() {
	return (
		<div
			className="p-3 rounded-md mt-3 container"
			style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
			data-aos="fade-right"
		>
			<div className="flex">
				<h1 className="font-bold dark:text-white text-2xl lg:text-4xl">
					Our Exhibitor
				</h1>
				<div className="flex-1 border-b-2 mx-1 border-b-yellow"></div>
			</div>
			<div className="w-full my-4">
				<SliderImage URL_IMAGES={URL_IMAGES} />
			</div>
			<div className="text-center mt-5">
				<Link
					href="/"
					className="font-bold text-2xl dark:text-primarytext"
				>
					Meet theme all →
				</Link>
			</div>
		</div>
	);
}

export default OurExhibitor;
