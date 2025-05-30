import { ChevronDownIcon } from 'lucide-react';
import React, { useState } from 'react';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '../../components/ui/collapsible';
import { Conferenciaarte } from './Conferencias/Conferenciaarte';
import { Conferenciasemiconductores } from './Conferencias/Conferenciasemiconductores';
import { ConferenciaIYQ } from './Conferencias/ConferenciaIYQ';
import { HeaderSection } from './Conferencias/HeaderSection/HeaderSection';

export const Conferences = (): JSX.Element => {
	const [openSections, setOpenSections] = useState<{
		[key: string]: boolean;
	}>({
		section1: true,
		section2: true,
	});
	// Conference dates data for reusability
	const conferenceDates = [
		{
			date: '28/09/2024',
			content: <Conferenciasemiconductores />,
		},
		{
			date: '26/05/2025',
			content: <ConferenciaIYQ />,
		},
	];

	return (
		<main className="flex flex-col w-full min-h-screen bg-[#f2f2f3] p-6 gap-4">
			<HeaderSection />

			{/* First date section with conference item and details */}
			<Collapsible
				defaultOpen
				open={openSections.section1}
				onOpenChange={(isOpen) =>
					setOpenSections((prev) => ({
						...prev,
						section1: isOpen,
					}))
				}
				className="w-full"
			>
				<CollapsibleTrigger className="flex items-center gap-1 font-bold text-sm text-[#0a1629] font-['Nunito_Sans',Helvetica]">
					<ChevronDownIcon
						className={`w-3.5 h-3.5 transition-transform duration-200 ${
							!openSections.section1
								? 'rotate-[-90deg]'
								: ''
						}`}
					/>
					{conferenceDates[0].date}
				</CollapsibleTrigger>
				<CollapsibleContent className="mt-4 space-y-4">
					<Conferenciasemiconductores />
					<Conferenciaarte />
				</CollapsibleContent>
			</Collapsible>

			{/* Second date section with conference list */}
			<Collapsible
				defaultOpen
				open={openSections.section2}
				onOpenChange={(isOpen) =>
					setOpenSections((prev) => ({
						...prev,
						section2: isOpen,
					}))
				}
				className="w-full"
			>
				<CollapsibleTrigger className="flex items-center gap-1 font-bold text-sm text-[#0a1629] font-['Nunito_Sans',Helvetica]">
					<ChevronDownIcon
						className={`w-3.5 h-3.5 transition-transform duration-200 ${
							!openSections.section2
								? 'rotate-[-90deg]'
								: ''
						}`}
					/>
					{conferenceDates[1].date}
				</CollapsibleTrigger>
				<CollapsibleContent className="mt-4">
					<ConferenciaIYQ />
				</CollapsibleContent>
			</Collapsible>
		</main>
	);
};
