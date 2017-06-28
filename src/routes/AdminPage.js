import React from 'react';
import {Layout} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import PageHeader from './../components/layout/pageHeader';

function AdminPage() {
    return (
        <div>
            <PageHeader />
            hello, Admin
        </div>
    );
}

export default AdminPage;
