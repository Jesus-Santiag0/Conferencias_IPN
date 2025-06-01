import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';

import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignIn/SignUp';
import { Cuestionsmain } from './screens/SignIn/Cuestionsmain';
import { Cuestionsmainfumec } from './screens/SignIn/Cuestionsmainfumec';
import { Cuestions } from './screens/SignIn/Cuestions';
import { Cuestions2 } from './screens/SignIn/Cuestions2';
import { Cuestionsmain2 } from './screens/SignIn/Cuestionsmain2';
import { Cuestionsmain2fumec } from './screens/SignIn/cuestionsmain2fumec';
import { Conferences } from './screens/SignIn/Conferences';
import { Details } from './screens/SignIn/Details';

createRoot(
	document.getElementById('app') as HTMLElement
).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route
					path="/cuestionsmain"
					element={<Cuestionsmain />}
				/>
				<Route
					path="/cuestionmainfumec"
					element={<Cuestionsmainfumec />}
				/>
				<Route
					path="/cuestionsmain2"
					element={<Cuestionsmain2 />}
				/>
				<Route
					path="/cuestionsmain2fumec"
					element={<Cuestionsmain2fumec />}
				/>
				<Route
					path="/cuestions"
					element={<Cuestions />}
				/>
				<Route
					path="/cuestions2"
					element={<Cuestions2 />}
				/>
				<Route
					path="/conferences"
					element={<Conferences />}
				/>
				<Route path="/details" element={<Details />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);

// createRoot(
// 	document.getElementById('app') as HTMLElement
// ).render(
// 	<StrictMode>
// 		<SignIn />
// 	</StrictMode>
// );
