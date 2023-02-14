import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './router';
import 'slick-carousel/slick/slick.css';

function App() {
	return (
		<HashRouter>
			<AppRoutes />
            
		</HashRouter>
	);
}

export default App;
