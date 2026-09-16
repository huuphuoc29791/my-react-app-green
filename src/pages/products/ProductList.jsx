import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get('products').then(res => setProducts(res.data.data));
	}, []);

	return (
		<>
			<h1>Product List</h1>

			<Link to='create' className='btn btn-success mb-2'>
				Add new product
			</Link>

			<Table striped bordered hover>
				<thead className='table-dark'>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Stock</th>
						<th>Category</th>
					</tr>
				</thead>
				<tbody>
					{products.map(p => (
						<tr key={p.id}>
							<td>{p.name}</td>
							<td>{p.price.toLocaleString()}</td>
							<td>{p.stock}</td>
							<td>{p.category_name}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default ProductList;
