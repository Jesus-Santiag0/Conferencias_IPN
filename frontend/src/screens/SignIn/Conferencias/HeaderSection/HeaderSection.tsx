import React, { useEffect, useState } from 'react';

export const HeaderSection = (): JSX.Element => {
	// Llama los datos del ususario
	const [usuario, setUsuario] = useState({
		Nombre: '',
		Apellido: '',
	});
	useEffect(() => {
		const id_usuario =
			localStorage.getItem('id_usuario'); // o del contexto
		if (!id_usuario) return;

		fetch(
			`http://localhost:3300/api/usuario/${id_usuario}`
		)
			.then((res) => res.json())
			.then((data) => {
				setUsuario(data);
			})
			.catch((err) =>
				console.error(
					'Error al obtener el usuario:',
					err
				)
			);
	}, []);
	return (
		<header className="flex flex-col w-full items-start">
			<p className="text-base text-[#626873] font-normal font-['Nunito_Sans',Helvetica]">
				Bienvenido, {usuario.Nombre} {usuario.Apellido}!
			</p>
			<h1 className="text-[27px] text-[#0a1629] font-bold font-['Nunito_Sans',Helvetica] mt-[-3px]">
				Panel de conferencias
			</h1>
		</header>
	);
};
