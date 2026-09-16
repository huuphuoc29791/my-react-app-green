import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get('products').then(res => setProducts(res.data.data));
	}, []);

	return (
		<>
			<h1>Product List</h1>

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
						<tr>
							<td>{p.name}</td>
							<td>{p.price}</td>
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
