import { EyeIcon, EyeOffIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const SignUp = (): JSX.Element => {
	const [showPassword, setShowPassword] =
		useState(false);
	const navigate = useNavigate();
	// Para Registrar usuario
	const [formData, setFormData] = useState({
		nombre: '',
		apellido: '',
		email: '',
		password: '',
	});
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Datos a enviar:', {
			formData,
		});
		try {
			const response = await fetch(
				'http://13.58.112.12:3300/api/signup',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			);

			const result = await response.json();
			if (result.success) {
				// Redireccionar o limpiar formulario
				setFormData({
					nombre: '',
					apellido: '',
					email: '',
					password: '',
				});
				navigate('/');
				setTimeout(() => {
					alert('Usuario registrado con éxito');
				}, 100);
			} else {
				alert('Error al registrar: ' + result.error);
			}
		} catch (error) {
			console.error('Error en la solicitud:', error);
			alert('Error de conexión con el servidor');
		}
	};

	return (
		<div className="flex flex-col min-h-screen items-start bg-[#f2f2f3]">
			<header className="flex items-center w-full h-20 px-4 py-2.5 bg-[#800040]">
				<div className="flex items-center justify-center h-[60px] w-[66px]">
					<div className="relative flex items-center justify-center h-full w-full">
						<div className="absolute w-[68px] h-[62px] -top-px -left-px bg-[#f2f2f3] rounded-xl" />
						<img
							className="relative h-[51.3px] object-cover z-10"
							alt="Conference logo"
							src="/image-1.png"
						/>
					</div>
				</div>

				<h1 className="font-['Nunito_Sans',Helvetica] font-bold text-white text-[27px] ml-2.5">
					Conferencias
				</h1>
			</header>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-4 py-10 gap-10">
				<div className="flex flex-col items-center justify-center w-full max-w-md gap-10">
					<h2 className="font-['Nunito_Sans',Helvetica] font-bold text-[#0a1629] text-[22px] text-center">
						Regístrate
					</h2>

					<form
						onSubmit={handleSubmit}
						className="w-full space-y-6"
					>
						<div className="space-y-2">
							<Label
								htmlFor="email"
								className="font-['Nunito_Sans',Helvetica] font-bold text-[#7d8592] text-sm ml-1.5"
							>
								Tu Correo electrónico
							</Label>
							<Input
								id="email"
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								placeholder="ejemplo@ipn.mx"
								className="h-[42px] bg-white rounded-[14px] border-[#d8e0ef] font-['Nunito_Sans',Helvetica]"
							/>
						</div>

						<div className="flex gap-4">
							<div className="flex-1 space-y-2">
								<Label
									htmlFor="lastName"
									className="font-['Nunito_Sans',Helvetica] font-bold text-[#7d8592] text-sm ml-1.5"
								>
									Apellido
								</Label>
								<Input
									id="lastName"
									name="apellido"
									onChange={handleChange}
									required
									value={formData.apellido}
									type="text"
									className="h-[42px] bg-white rounded-[14px] border-[#d8e0ef]"
								/>
							</div>

							<div className="flex-1 space-y-2">
								<Label
									htmlFor="firstName"
									className="font-['Nunito_Sans',Helvetica] font-bold text-[#7d8592] text-sm ml-1.5"
								>
									Nombre
								</Label>
								<Input
									id="firstName"
									type="text"
									value={formData.nombre}
									name="nombre"
									onChange={handleChange}
									required
									className="h-[42px] bg-white rounded-[14px] border-[#d8e0ef]"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="password"
								className="font-['Nunito_Sans',Helvetica] font-bold text-[#7d8592] text-sm ml-1.5"
							>
								Contraseña
							</Label>
							<div className="relative">
								<Input
									id="password"
									type={
										showPassword ? 'text' : 'password'
									}
									name="password"
									onChange={handleChange}
									required
									value={formData.password}
									className="h-[42px] bg-white rounded-[14px] border-[#d8e0ef] pr-10"
								/>
								<Button
									type="button"
									variant="ghost"
									size="icon"
									className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
									onClick={() =>
										setShowPassword(!showPassword)
									}
								>
									<img
										src="/view.svg"
										alt={
											showPassword
												? 'Hide password'
												: 'Show password'
										}
										className="h-[18px] w-6"
									/>
								</Button>
							</div>
						</div>

						<div className="flex items-center justify-between pt-4">
							<Button variant="link">
								<Link
									to="/"
									className="font-['Nunito_Sans',Helvetica] font-semibold text-[#800040] text-[14.8px] underline p-0"
								>
									Atrás
								</Link>
							</Button>

							<Button
								type="submit"
								className="h-12 px-[41px] py-3 bg-[#800040] rounded-[14px] font-['Nunito_Sans',Helvetica] font-bold text-white text-[14.8px]"
							>
								Regístrate
							</Button>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
};
