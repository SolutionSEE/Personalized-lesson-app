import {
	ArtSvg,
	MathSvg,
	HistorySvg,
	SpaceTravelSvg,
	ScienceSvg,
	CodingSvg,
	MusicSvg,
} from '../../Assets/svg/exam-booking-app';
import { BsArrowRight } from 'react-icons/bs';
import algebra from '../../Assets/svg/exam-booking-app/algebra.svg';
import geometry from '../../Assets/svg/exam-booking-app/geometry.svg';
import angles from '../../Assets/svg/exam-booking-app/angles.svg';
import fractions0 from '../../Assets/svg/exam-booking-app/fractions-v1.svg';
import powerRoot from '../../Assets/svg/exam-booking-app/power-root.svg';
import fraction1 from '../../Assets/svg/exam-booking-app/fractions-v1.svg';
import fraction2 from '../../Assets/svg/exam-booking-app/fractions-v2.svg';
import moreClass from '../../Assets/svg/exam-booking-app/more-classes.svg';

const EXAM_BOOKING_TOOL = [
	{
		name: 'math',
		image: MathSvg,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
	},
	{
		name: 'science',
		image: ScienceSvg,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .',
	},
	{
		name: 'coding',
		image: CodingSvg,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
	},
	{
		name: 'history',
		image: HistorySvg,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
	},
	{
		name: 'art',
		image: ArtSvg,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .',
	},
	{
		name: 'music',
		image: MusicSvg,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
	},
	{
		name: 'space travel',
		image: SpaceTravelSvg,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .',
	},
	{
		name: 'more classes',
		endIcon: <BsArrowRight className='text-white' />,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
	},
];

const EXAM_BOOKING_TOOL_DETAIL = [
	{
		name: 'Algebra',
		image: algebra,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
	},
	{
		name: 'Geometry',
		image: geometry,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
	},
	{
		name: 'Angles',
		image: angles,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
	},
	{
		name: 'Fractions',
		image: algebra,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
	},
	{
		name: 'Powers & Roots',
		image: powerRoot,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
	},
	{
		name: 'Fractions V1',
		image: fraction1,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
	},
	{
		name: 'Fractions V2',
		image: fraction2,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
	},
	{
		name: 'More Classes',
		image: moreClass,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .',
	},
];

export { EXAM_BOOKING_TOOL, EXAM_BOOKING_TOOL_DETAIL };
