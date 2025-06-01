import { PlusIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../../components/ui/button';
import {
	Card,
	CardContent,
} from '../../components/ui/card';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '../../components/ui/avatar';
import { Link } from 'react-router-dom';

export const Cuestionsmainfumec = (): JSX.Element => {
	return (
		<main className="flex flex-col min-h-screen items-center gap-[25px] px-4 py-0 relative bg-[#f2f2f3]">
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
										src="/fumec.png"
										alt="FUMEC logo"
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
										FUMEC
									</p>
								</div>

								<div className="flex flex-col gap-2.5 w-full">
									<p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-[#91929e] text-xs tracking-[0] leading-[10px]">
										Eugenio Marín
										<br />
										Chief Executive Officer at FUMEC |
										<br />
										Fundación México Estados unidos para
										la Ciencia
									</p>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<div className="absolute flex flex-col items-center gap-4 w-full left-[16px] top-[388px] h-[92px]">
				<div className="flex items-start justify-center gap-2.5 w-full">
					<h2 className="w-fit ml-[-22px] font-['Nunito_Sans',Helvetica] font-bold text-[#626873] text-base tracking-[0] leading-6 whitespace-nowrap">
						¿Quieres hacer una pregunta?
					</h2>
				</div>
				<Link to="/cuestions2">
					<Button
						className="w-[52px] h-[52px] p-2.5 bg-[#800040] rounded-[50px] hover:bg-[#800040]/90 ml-[-22px]"
						size="icon"
					>
						<PlusIcon className="w-3.5 h-3.5" />
					</Button>
				</Link>
			</div>
		</main>
	);
};
