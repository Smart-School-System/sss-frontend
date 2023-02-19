import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './router';
// import 'antd/dist/reset.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
	return (
		<HashRouter>
			<AppRoutes />
		</HashRouter>
	);
}

export default App;
