import React from 'react';
import {Layout} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import PageHeader from './../components/layout/pageHeader';
import HomePageFooter from './../components/HomePageFooter';
import HomePageBanner from './../components/HomePageBanner';
import HomePageContent from './../components/HomePageContent';
import LayoutLess from './../components/StylesReset/layout.less';

function IndexPage() {
    return (
        <div>
            <Layout>
                <Layout>
                    <Header className={LayoutLess.AntLayoutHeader}>
                        <PageHeader />
                    </Header>
                    <Content>
                        <HomePageBanner />
                        <HomePageContent />
                    </Content>
                    <Footer className={LayoutLess.AntLayoutFooter}>
                        <HomePageFooter />
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
}

export default IndexPage;
