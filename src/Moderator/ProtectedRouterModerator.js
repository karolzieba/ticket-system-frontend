import { Outlet } from 'react-router-dom';

import Front from '../Front';

const ProtectedRouterModerarator = ({ varziable }) => {
	if (varziable !== 'ROLE_MODERATOR') {
		return <Front />;
	} else {
		return <Outlet />;
	}
};
export default ProtectedRouterModerarator;
