import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './pages/products/ProductList';

axios.defaults.baseURL = 'http://localhost:3000/api/';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='products'>
					<Route index element={<ProductList />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
