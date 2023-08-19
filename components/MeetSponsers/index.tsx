import React from 'react';
import Logo01 from '../../public/images/meet/ISXF.png';
import Logo02 from '../../public/images/meet/LMAX.png';
import Logo03 from '../../public/images/meet/MatchPrime.png';
import Logo04 from '../../public/images/meet/MatchTrade.png';
import Logo05 from '../../public/images/meet/Nuvei.png';
import Logo06 from '../../public/images/meet/OneZero.png';
import Logo07 from '../../public/images/meet/SaxoBank.png';
import Logo08 from '../../public/images/meet/Solitics.png';
import Logo09 from '../../public/images/meet/Unlimint.png';
import SliderImage from '../SliderImage';

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
];

function MeetSponsers() {
	return (
		<div
			className="p-3 rounded-md container"
			style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
			data-aos="fade-down"
		>
			<div className="flex">
				<h1 className="font-bold dark:text-white text-2xl lg:text-4xl">
					MEET
				</h1>
				<div className="flex-1 border-b-2 mx-1 border-b-yellow"></div>
				<h1 className="text-2xl lg:text-4xl dark:text-white">
					Our Sponsers
				</h1>
			</div>
			<div className="w-full my-4">
				<SliderImage URL_IMAGES={URL_IMAGES} />
			</div>
		</div>
	);
}

export default MeetSponsers;
