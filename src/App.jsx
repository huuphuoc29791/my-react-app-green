import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './layouts/Layout';

import ProductList from './pages/products/ProductList';
import ProductCreate from './pages/products/ProductCreate';

axios.defaults.baseURL = 'http://localhost:3000/api/';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='products' element={<Layout />}>
					<Route index element={<ProductList />} />
					<Route path='create' element={<ProductCreate />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
