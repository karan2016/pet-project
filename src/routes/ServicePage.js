import React from 'react';
import {Layout} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import ServiceComponent from './../components/ServiceComponent';

function ServicePage() {
    return (
        <div>
            <ServiceComponent />
        </div>
    );
}

export default ServicePage;
