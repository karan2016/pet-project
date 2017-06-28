import React from 'react';
import {Layout} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import ServiceComponent from './../components/ServiceComponent';
import DocumentTitle from 'react-document-title';
import autoAdaptive from './../utils/autoAdaptive';

autoAdaptive();

function ServicePage() {
    return (
        <div>
            <DocumentTitle title='保障服务'></DocumentTitle>
            <ServiceComponent />
        </div>
    );
}

export default ServicePage;
