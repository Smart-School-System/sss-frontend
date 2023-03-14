import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './router';
import 'slick-carousel/slick/slick.css';
import { API} from './libs/axiosClient';

function App() {
	useEffect(() => {
		API.GET('/students')
			.then((response) => console.log(response))
			.catch((error) => console.error(error));
	}, []);
	return (
		<HashRouter>
			<AppRoutes />
		</HashRouter>
	);
}

export default App;