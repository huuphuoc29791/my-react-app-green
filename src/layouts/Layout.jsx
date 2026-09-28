import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Container>
				<Outlet />
			</Container>
		</>
	);
};

export default Layout;
