import { EyeIcon, EyeOffIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import {
	Card,
	CardContent,
} from '../../components/ui/card';
import { Checkbox } from '../../components/ui/checkbox';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const SignIn = (): JSX.Element => {
	const [showPassword, setShowPassword] =
		useState(false);
	const navigate = useNavigate();

	// Para Iniciar Sesión
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault(); // evita recargar la página
		try {
			const response = await fetch(
				'http://localhost:3300/api/login',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email, password }),
				}
			);
			const data = await response.json();
			console.log(data);

			if (response.ok) {
				navigate('/cuestionsmain');
				setTimeout(() => {
					alert('Inicio de sesión exitoso');
				}, 100);
			} else {
				alert(data.message || 'Error al iniciar sesión');
			}
		} catch (err) {
			console.error('Error en la petición:', err);
			alert('No se pudo conectar con el servidor');
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center gap-[98px] bg-[#f2f2f3]">
			<header className="flex flex-wrap min-h-20 items-center justify-center gap-[10px_10px] px-4 py-2.5 self-stretch w-full bg-[#800040]">
				<div className="flex flex-wrap min-w-[66px] max-w-[66px] h-[60px] items-center justify-center gap-[10px_10px] flex-1 grow">
					<div className="gap-2.5 px-[17px] py-[5px] self-stretch flex items-center flex-1 grow relative">
						<div className="absolute w-[68px] h-[62px] -top-px -left-px bg-[#f2f2f3] rounded-xl" />
						<img
							className="relative flex-1 grow h-[51.3px] mt-[-0.65px] mb-[-0.65px] object-cover z-10"
							alt="Conference logo"
							src="/image-1.png"
						/>
					</div>
				</div>

				<div className="flex flex-wrap min-w-[162px] h-[50px] items-center justify-end gap-[10px_10px] flex-1 grow">
					<h1 className="flex-1 font-['Nunito_Sans',Helvetica] font-bold text-white text-[27px]">
						Conferencias
					</h1>
				</div>
			</header>

			<form
				onSubmit={handleLogin}
				className="flex flex-col items-center gap-[55px] self-stretch w-full"
			>
				<Card className="border-none shadow-none bg-transparent w-full max-w-[328px] mx-auto">
					<CardContent className="p-0">
						<div className="flex flex-col items-center justify-center gap-8 px-4">
							<h2 className="self-stretch mt-[-1.00px] font-['Nunito_Sans',Helvetica] font-bold text-[#0a1629] text-[22px] text-center">
								Iniciar sesión
							</h2>

							<div className="flex flex-col items-start gap-2.5 self-stretch w-full">
								<div className="relative self-stretch w-full h-[85px]">
									<Label
										htmlFor="email"
										className="absolute top-[-7px] left-1.5 font-['Nunito_Sans',Helvetica] font-bold text-[#7d8592] text-sm z-10"
									>
										Correo electrónico
									</Label>
									<Input
										id="email"
										type="email"
										placeholder="ejemplo@ipn.mx"
										className="absolute w-full h-[42px] top-[27px] left-0 bg-white rounded-[14px] border border-solid border-[#d8e0ef] px-4 py-[7px] font-['Nunito_Sans',Helvetica] text-sm"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
							</div>

							<div className="flex flex-col items-start gap-2.5 self-stretch w-full">
								<div className="relative self-stretch w-full h-[85px]">
									<Label
										htmlFor="password"
										className="absolute top-[-7px] left-1.5 font-['Nunito_Sans',Helvetica] font-bold text-[#7d8592] text-sm z-10"
									>
										Contraseña
									</Label>
									<div className="absolute w-full h-[42px] top-[27px] left-0">
										<Input
											id="password"
											type={
												showPassword
													? 'text'
													: 'password'
											}
											className="w-full h-full bg-white rounded-[14px] border border-solid border-[#d8e0ef] pr-12"
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
										/>
										<button
											type="button"
											onClick={() =>
												setShowPassword(!showPassword)
											}
											className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
										>
											{showPassword ? (
												<EyeOffIcon className="w-6 h-6 text-[#7d8592]" />
											) : (
												<EyeIcon className="w-6 h-6 text-[#7d8592]" />
											)}
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="flex items-center px-4 py-0 mt-8 self-stretch w-full">
							<div className="flex items-center gap-2 flex-1">
								<Checkbox
									id="remember"
									className="w-[15px] h-[15px] data-[state=checked]:bg-[#800040]"
								/>
								<Label
									htmlFor="remember"
									className="font-['Nunito_Sans',Helvetica] font-normal text-[#7d8592] text-[13px]"
								>
									Recordarme
								</Label>
							</div>

							<div className="flex items-center justify-end flex-1">
								<a
									href="#"
									className="font-['Nunito_Sans',Helvetica] font-normal text-[#7d8592] text-[13px] text-right underline"
								>
									Has olvidado tu contraseña?
								</a>
							</div>
						</div>
					</CardContent>
				</Card>

				<Button
					className="inline-flex items-center justify-center gap-2 px-6 py-3 w-full max-w-[156px] bg-[#800040] rounded-[14px] hover:bg-[#6b0036] transition-colors"
					type="submit"
				>
					<span className="font-['Nunito_Sans',Helvetica] font-bold text-white text-[14.8px] whitespace-nowrap">
						Ingresar
					</span>
					<img
						className="h-6 w-auto"
						alt="Arrow icon"
						src="/icn-general-arrow-go-white.svg"
					/>
				</Button>
				<p className="font-['Nunito_Sans',Helvetica] font-normal text-[#7d8592] text-[13px] text-right">
					¿Nuevo usuario?&nbsp;&nbsp;
					<Link
						to="/signup"
						className="font-['Nunito_Sans',Helvetica] font-normal text-[#800040] text-[13px] text-right margin-right: 40px"
					>
						Regístrate ahora
					</Link>
				</p>
			</form>
		</div>
	);
};
