import { Outlet } from 'react-router-dom';

import Front from '../Front';

const ProtectedRouterClient = ({ varziable }) => {
	if (varziable !== 'ROLE_CLIENT' && varziable !== 'ROLE_CLIENT_FACEBOOK') {
		return <Front />;
	} else {
		return <Outlet />;
	}
};
export default ProtectedRouterClient;
