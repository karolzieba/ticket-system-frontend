import { Outlet } from 'react-router-dom';

import Front from './Front';


const ProtectedRouterLogin = ({ loggIn }) => {
	if (loggIn) {
		return <Front />;
	} else {
		return <Outlet />;
	}
};
export default ProtectedRouterLogin;
