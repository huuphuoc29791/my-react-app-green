import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './layouts/Layout';

import ProductList from './pages/products/ProductList';
import ProductCreate from './pages/products/ProductCreate';
import ProductDetails from './pages/products/ProductDetails';
import ProductEdit from './pages/products/ProductEdit';

import Login from './pages/auth/Login';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='login' element={<Login />} />

					<Route path='products'>
						<Route index element={<ProductList />} />
						<Route path='create' element={<ProductCreate />} />
						<Route path=':id' element={<ProductDetails />} />
						<Route path=':id/edit' element={<ProductEdit />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
