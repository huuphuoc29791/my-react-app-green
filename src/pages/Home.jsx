import { useAuth } from '../contexts/AuthContext';

const Home = () => {
	const { user } = useAuth();

	return (
		<>
			<h1>Homepage</h1>

			{user && <h3>Xin chào {user.name}</h3>}
		</>
	);
};

export default Home;
