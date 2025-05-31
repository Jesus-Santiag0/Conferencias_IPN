import React from 'react';
import { SeccionRegistro } from './Secciones/SeccionRegistro/SeccionRegistro';
import { SeccionInaguracion } from './Secciones/SeccionInaguracion';
import { SeccionInfineon } from './Secciones/SeccionInfineon';
import { SeccionFUMEC } from './Secciones/SeccionFUMEC';

export const Details = (): JSX.Element => {
	return (
		<main className="flex flex-col w-full min-h-screen bg-[#f2f2f3] p-6">
			<header className="mb-4">
				<h1 className="font-bold text-[27px] text-[#0a1629] font-['Nunito_Sans',Helvetica]">
					Detalles
				</h1>
			</header>

			<div className="flex flex-col w-full gap-4">
				<SeccionRegistro />
				<SeccionInaguracion />
				<SeccionFUMEC />
				<SeccionInfineon />
			</div>
		</main>
	);
};
