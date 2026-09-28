import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [formData, setFormData] = useState({});

	const navigate = useNavigate();

	const handleChange = e => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		axios.post('auth/login', formData).then(res => {
			localStorage.setItem('token', res.data.token);
			navigate('/products');
		});
	};

	return (
		<>
			<h1>Login</h1>

			<Form className='col-md-3' onSubmit={handleSubmit}>
				<Form.Group className='mb-3'>
					<Form.Label>Email address:</Form.Label>
					<Form.Control
						type='email'
						name='email'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>Password:</Form.Label>
					<Form.Control
						type='password'
						name='password'
						onChange={handleChange}
					/>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Login
				</Button>
			</Form>
		</>
	);
};

export default Login;
