import { Outlet } from 'react-router-dom';

import Front from '../Front';

const ProtectedRouterAgency = ({ varziable }) => {
	console.log(varziable);

	if (varziable !== 'ROLE_AGENCY') {
		return <Front />;
	} else {
		return <Outlet />;
	}
};

export default ProtectedRouterAgency;
