import { Inter } from 'next/font/google';
import {
	BookYourSpot,
	DiscoverHome,
	DiscussHome,
	EngageHome,
	EventSchedule,
	Hero,
	MeetSponsers,
	OurExhibitor,
} from '../../components';
import Image_Discover_Event from '../../public/images/discover/image_discover_event.png';
import Image from 'next/image';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className={`${styles.image_bgc} pb-3`}>
			<Hero />
			<DiscoverHome />
			<div
				data-aos="flip-left"
				className="flex justify-center items-center container p-0"
			>
				<Image src={Image_Discover_Event} alt="image" />
			</div>
			<EventSchedule />
			<MeetSponsers />
			<OurExhibitor />
			<DiscussHome />
			<BookYourSpot />
			<EngageHome />
		</div>
	);
}
