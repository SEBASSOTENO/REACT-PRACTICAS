import React from 'react';

import '../assets/style/examen.scss';
import SSO from '../components/SSO';
import Vacaciones from '../components/Vacaciones';
import ClaseDigital from '../components/ClaseDigital';

const Layout = () => (
    <div className="Examen2">
        <SSO/>
        <Vacaciones/>
        <ClaseDigital/>
    </div>
);

export default Layout;