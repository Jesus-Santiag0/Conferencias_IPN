import React from 'react';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '../../components/ui/avatar';
import { Button } from '../../components/ui/button';
import {
	Card,
	CardContent,
} from '../../components/ui/card';
import { Textarea } from '../../components/ui/textarea';

export const Cuestions = (): JSX.Element => {
	return (
		<div className="flex flex-col min-h-screen items-center gap-[99px] px-4 py-0 bg-[#f2f2f3]">
			<Card className="flex flex-col min-h-[165px] items-center gap-[22px] px-1 py-5 w-full mt-[-1.00px] border-0 shadow-none bg-white rounded-none">
				<CardContent className="p-0 w-full">
					<div className="flex flex-col w-full items-center">
						<h2 className="w-full [font-family:'Nunito_Sans',Helvetica] font-bold text-[#0a1629] text-lg text-center tracking-[0] leading-[normal] underline mb-5">
							DATOS DE LA CONFERENCIA
						</h2>

						<div className="flex items-center gap-2.5 w-full">
							<div className="flex-shrink-0">
								<Avatar className="w-12 h-12 rounded-[10px] border border-solid border-[#80004073]">
									<AvatarImage
										src="/infineon.png"
										alt="Infineon logo"
									/>
									<AvatarFallback className="bg-white rounded-[10px] border border-solid border-[#80004073]"></AvatarFallback>
								</Avatar>
							</div>

							<div className="flex flex-col w-full min-h-12 gap-2.5">
								<div className="flex flex-col gap-2.5 w-full">
									<p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-[#91929e] text-xs tracking-[0] leading-[8px]">
										LNunT
									</p>
								</div>

								<div className="flex flex-col gap-2.5 w-full">
									<p className="[font-family:'Nunito_Sans',Helvetica] font-bold text-[#800040] text-sm tracking-[0] leading-[10px]">
										Infineon Technologies
									</p>
								</div>

								<div className="flex flex-col gap-2.5 w-full">
									<p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-[#91929e] text-xs tracking-[0] leading-[10px]">
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

			<div className="flex flex-col items-start w-full">
				<div className="flex flex-col items-start gap-2.5 w-full">
					<div className="flex flex-col h-[174px] items-start gap-[7px] w-full overflow-hidden">
						<div className="flex flex-col h-44 items-start gap-[7px] w-full">
							<label className="w-fit [font-family:'Nunito_Sans',Helvetica] font-bold text-[#626873] text-sm tracking-[0] leading-6">
								Pregunta
							</label>

							<Textarea
								className="w-full h-[120px] bg-white rounded-[14px] border border-solid border-[#d8e0ef] resize-none"
								placeholder="Agregue alguna pregunta que tenga"
							/>
						</div>
					</div>
				</div>

				<div className="flex items-start gap-12 w-full">
					<Button
						variant="outline"
						className="flex-1 h-12 font-bold text-[#800040] text-[14.8px] rounded-[14px] border border-solid border-[#800040]"
					>
						Eliminar
					</Button>

					<Button className="flex-1 h-12 items-center justify-center gap-[3px] bg-[#800040] rounded-[14px] font-bold text-white text-[14.8px]">
						Enviar
						<img
							className="w-[17px] h-[18px] ml-1"
							alt="Send"
							src="/send.svg"
						/>
					</Button>
				</div>
			</div>
		</div>
	);
};
