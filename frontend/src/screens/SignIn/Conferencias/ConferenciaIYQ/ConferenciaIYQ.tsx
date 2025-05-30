import {
	CalendarIcon,
	ClockIcon,
	MapPinIcon,
} from 'lucide-react';
import React from 'react';
import {
	Card,
	CardContent,
} from '../../../../components/ui/card';
import { Link } from 'react-router-dom';

export const ConferenciaIYQ = (): JSX.Element => {
	const conferenceData = {
		organization: 'Academia de física de IE ESIMEZ IPN',
		title: 'IYQ 2025',
		subtitle:
			'100 años de la Mecánica Cuántica: Pasado, Presente y Futuro',
		location: 'Auditorio 5 ESIMEZ',
		date: 'May 26, 2025',
		time: '14:00 - 18:00 hrs',
		image: '/esimelogo.png',
	};

	return (
		<Card className="rounded-3xl border-none bg-[#FFFFFF]">
			<CardContent className="p-3">
				<div className="flex flex-col gap-5 w-full">
					{/* Header with image and title */}
					<div className="flex items-center gap-2.5">
						<div className="w-12 h-12 flex-shrink-0">
							<div className="relative w-full h-full">
								<div className="absolute inset-0 bg-white rounded-[10px] border-[0.7px] border-solid border-[#80004073]" />
								<img
									className="w-full h-full object-cover relative z-10"
									alt="Conference logo"
									src={conferenceData.image}
								/>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<p className="text-xs text-[#91929e] font-normal leading-tight">
								{conferenceData.organization}
							</p>
							<h3 className="text-sm text-[#800040] font-bold leading-tight">
								{conferenceData.title}
							</h3>
							<p className="text-xs text-[#91929e] font-normal leading-tight">
								{conferenceData.subtitle}
							</p>
						</div>
					</div>

					{/* Location and date information */}
					<div className="flex flex-col gap-1 items-center">
						<div className="flex items-center gap-1 justify-center w-full">
							<MapPinIcon className="w-4 h-4 text-[#7d8592]" />
							<span className="text-xs text-[#7d8592] font-semibold font-['Nunito_Sans',Helvetica]">
								{conferenceData.location}
							</span>
						</div>

						<div className="flex justify-center gap-4 w-full">
							<div className="flex items-center gap-1">
								<CalendarIcon className="w-4 h-4 text-[#7d8592]" />
								<span className="text-xs text-[#7d8592] font-semibold font-['Nunito_Sans',Helvetica]">
									{conferenceData.date}
								</span>
							</div>

							<div className="flex items-center gap-1">
								<ClockIcon className="w-4 h-4 text-[#7d8592]" />
								<span className="text-xs text-[#7d8592] font-semibold font-['Nunito_Sans',Helvetica]">
									{conferenceData.time}
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Footer with transmission and details */}
				<div className="flex justify-between items-center mt-5">
					<div className="flex items-center gap-0.5">
						<span className="text-xs text-[#91929e] font-normal whitespace-nowrap">
							Transmisión en:
						</span>
						<img
							className="w-3.5 h-3.5"
							alt="Social media"
							src="/social-icons.svg"
						/>
					</div>

					<Link
						to="/cuestionsmain"
						className="text-xs text-[#800040] underline font-normal mr-10"
					>
						Ver detalles
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};
