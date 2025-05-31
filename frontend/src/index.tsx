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
import { Cuestions } from './screens/SignIn/Cuestions';
import { Cuestionsmain2 } from './screens/SignIn/Cuestionsmain2';
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
					path="/cuestionsmain2"
					element={<Cuestionsmain2 />}
				/>
				<Route
					path="/cuestions"
					element={<Cuestions />}
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
