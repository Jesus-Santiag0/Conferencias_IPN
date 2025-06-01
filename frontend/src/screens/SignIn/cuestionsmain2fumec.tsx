import { PlusIcon } from 'lucide-react';
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
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Data for questions to enable mapping
const questions = [
	{
		id: 1,
		author: 'Jeremy Dylan Hernandez',
		role: 'Estudiante del IPN',
		avatar: '/person.png',
		question:
			'¿Cuáles son las principales áreas de innovación en las que Infineon está invirtiendo actualmente?',
	},
	{
		id: 2,
		author: 'Sebastián Limas Ortega',
		role: 'Estudiante del IPN',
		avatar: '/person.png',
		question:
			'¿Cómo define Infineon su impacto en industrias clave como la automotriz, energías renovables y tecnologías de comunicación?',
	},
	{
		id: 3,
		author: 'Sebastián Limas Ortega',
		role: 'Estudiante del IPN',
		avatar: '/person.png',
		question:
			'¿Qué valores o cultura interna distinguen a Infineon como empleador dentro de la industria tecnológica?',
	},
];
type CuestionConUsuario = {
	cuestion: string;
	id_usuario: number;
	nombre: string;
	apellido: string;
};
export const Cuestionsmain2fumec = (): JSX.Element => {
	const [cuestions, setCuestions] = useState<
		CuestionConUsuario[]
	>([]);

	useEffect(() => {
		const evento = 2;
		const obtenerCuestions = async () => {
			try {
				const response = await fetch(
					`http://localhost:3300/api/cuestions-con-usuarios/${evento}`
				);
				const data = await response.json();
				setCuestions(data);
			} catch (error) {
				console.error(
					'Error al obtener las cuestiones:',
					error
				);
			}
		};

		obtenerCuestions();
	}, []);
	return (
		<div className="flex flex-col min-h-screen items-center gap-[25px] px-4 py-0 relative bg-[#f2f2f3]">
			{/* Conference header section */}
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
											alt="FUMEC logo"
											src="/fumec.png"
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
										FUMEC
									</p>
								</div>

								<div className="flex flex-col items-center justify-center gap-2.5 w-full">
									<p className="self-stretch mt-[-1px] font-['Nunito_Sans',Helvetica] font-normal text-[#91929e] text-xs tracking-[0] leading-[10px]">
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

			{/* Questions section */}
			<div className="flex flex-col w-[328px] items-end gap-[15px] relative flex-1 grow">
				{questions.map((item) => (
					<Card
						key={item.id}
						className="flex flex-col items-start justify-center w-full bg-white rounded-xl"
					>
						<CardContent className="flex flex-col gap-3 p-5 w-full">
							<div className="flex items-center gap-3 h-10 w-full">
								<Avatar className="w-10 h-10">
									<AvatarImage
										src={item.avatar}
										alt={`${item.author} avatar`}
									/>
									<AvatarFallback>
										{item.author.charAt(0)}
									</AvatarFallback>
								</Avatar>
								<div className="flex flex-col">
									<p className="h-4 [font-family:'Roboto',Helvetica] font-medium text-[#202020] text-sm tracking-[0.10px] leading-[normal]">
										{item.author}
									</p>
									<p className="h-3.5 font-primary-body-small text-[#7e7e7e] text-[length:var(--primary-body-small-font-size)]">
										{item.role}
									</p>
								</div>
							</div>
							<p className="font-primary-body-small text-[#5f5f5f] text-[length:var(--primary-body-small-font-size)] text-justify">
								{item.question}
							</p>
						</CardContent>
					</Card>
				))}

				{/* Add question button */}
				<Link to="/cuestions">
					<Button
						className="w-[52px] h-[52px] p-2.5 bg-[#800040] rounded-[50px] hover:bg-[#800040]/90"
						size="icon"
					>
						<PlusIcon className="w-6 h-6 text-white" />
					</Button>
				</Link>
			</div>
		</div>
	);
};
