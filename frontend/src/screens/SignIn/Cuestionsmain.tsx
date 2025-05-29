import { PlusIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../../components/ui/button';
import {
	Card,
	CardContent,
} from '../../components/ui/card';

export const Cuestions = (): JSX.Element => {
	return (
		<main className="flex flex-col min-h-screen items-center gap-52 px-4 py-0 bg-[#f2f2f3]">
			<Card className="flex flex-col min-h-[165px] items-center gap-[22px] px-1 py-5 w-full mt-[-1px] bg-white border-0 shadow-none rounded-none">
				<CardContent className="flex flex-col items-center p-0 w-full">
					<div className="flex flex-col w-[190px] items-center">
						<h1 className="w-[235px] mt-[-1px] mx-[-22.5px] font-['Nunito_Sans',Helvetica] font-bold text-[#0a1629] text-lg text-center tracking-[0] leading-normal underline">
							DATOS DE LA CONFERENCIA
						</h1>
					</div>

					<div className="flex flex-col items-center w-full">
						<div className="flex items-center gap-2.5 w-full">
							<div className="flex flex-col max-w-12 w-12 items-center gap-3.5 self-stretch">
								<div className="flex items-start justify-center gap-px self-stretch w-full">
									<div className="relative w-12 h-12">
										<div className="relative w-[50px] h-[50px] mt-[-1px] mb-[-1px] ml-[-1px] mr-[-1px] bg-white rounded-[10px] border border-solid border-[#80004073]" />
										<img
											className="absolute inset-0 w-12 h-12 object-cover"
											alt="Infineon Technologies logo"
											src="/infineon.png"
										/>
									</div>
								</div>
							</div>

							<div className="flex flex-col w-[365px] min-h-12 items-center gap-2.5 mr-[-103px]">
								<div className="flex flex-col items-center justify-center gap-2.5 w-full">
									<p className="self-stretch mt-[-1px] font-['Nunito_Sans',Helvetica] font-normal text-[#91929e] text-xs tracking-[0] leading-[8px]">
										LNunT
									</p>
								</div>

								<div className="flex flex-col items-center justify-center gap-2.5 w-full">
									<p className="self-stretch mt-[-1px] font-['Nunito_Sans',Helvetica] font-bold text-[#800040] text-sm tracking-[0] leading-[10px]">
										Infineon Technologies
									</p>
								</div>

								<div className="flex flex-col items-center justify-center gap-2.5 w-full">
									<p className="self-stretch mt-[-1px] font-['Nunito_Sans',Helvetica] font-normal text-[#91929e] text-xs tracking-[0] leading-[10px]">
										Ariel Abam
										<br />
										Managing Director and Vice President
										of
										<br />
										Operations | Infineon Technologies in
										México
									</p>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<div className="flex flex-col items-center gap-4 w-full">
				<div className="flex items-start justify-center gap-2.5 w-full">
					<h2 className="w-fit mt-[-1px] font-['Nunito_Sans',Helvetica] font-bold text-[#626873] text-base tracking-[0] leading-6 whitespace-nowrap">
						¿Quieres hacer una pregunta
					</h2>
				</div>

				<Button
					className="w-[52px] h-[52px] p-2.5 bg-[#800040] rounded-[50px] hover:bg-[#800040]/90"
					size="icon"
				>
					<PlusIcon className="w-3.5 h-3.5" />
				</Button>
			</div>
		</main>
	);
};
