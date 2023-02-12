import React from 'react';
import { HashRouter } from 'react-router-dom';
import AdminRoutes from './router/admin-routes';
// import 'antd/dist/reset.css';

function App() {
	return (
		<HashRouter>
			<AdminRoutes />
		</HashRouter>
	);
}

export default App;
