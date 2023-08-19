import routers from '../../routers/routers';
import { Menu } from '../../types/menu';

const menuData: Menu[] = [
	{
		id: 1,
		title: 'Home',
		newTab: false,
		path: routers.home,
	},
	{
		id: 2,
		title: 'Discover',
		newTab: false,
		submenu: [
			{
				id: 21,
				title: 'About',
				path: routers.about,
				newTab: false,
			},
			{
				id: 22,
				title: 'Parties',
				path: routers.parties,
				newTab: false,
			},
			{
				id: 23,
				title: 'Gallery',
				path: routers.gallery,
				newTab: false,
			},
			{
				id: 24,
				title: 'Video',
				path: routers.video,
				newTab: false,
			},
		],
	},
	{
		id: 3,
		title: 'Meet',
		newTab: false,
		submenu: [
			{
				id: 31,
				title: 'Sponsers',
				path: routers.sponsers,
				newTab: false,
			},
			{
				id: 32,
				title: 'Exhibitor',
				path: routers.exhibitor,
				newTab: false,
			},
			{
				id: 33,
				title: 'Media Partners',
				path: routers.mediaPartners,
				newTab: false,
			},
			{
				id: 34,
				title: 'Attendees',
				path: routers.attendess,
				newTab: false,
			},
		],
	},
	{
		id: 4,
		title: 'Discuss',
		newTab: false,
		submenu: [
			{
				id: 41,
				title: 'Agenda',
				path: routers.agenda,
				newTab: false,
			},
			{
				id: 42,
				title: 'Speakers',
				path: routers.speakers,
				newTab: false,
			},
		],
	},
	{
		id: 5,
		title: 'Engage',
		newTab: false,
		submenu: [
			{
				id: 51,
				title: 'Floorplan',
				path: routers.floorplan,
				newTab: false,
			},
			{
				id: 52,
				title: 'FAQ',
				path: routers.faq,
				newTab: false,
			},
			{
				id: 53,
				title: 'Venue',
				path: routers.venue,
				newTab: false,
			},
			{
				id: 54,
				title: 'Transportation',
				path: routers.transportation,
				newTab: false,
			},
			{
				id: 55,
				title: 'Accommodation',
				path: routers.accommodation,
				newTab: false,
			},
			{
				id: 56,
				title: 'Contact us',
				path: routers.contact,
				newTab: false,
			},
		],
	},
];
export default menuData;
