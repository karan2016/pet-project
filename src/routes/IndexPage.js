import React from 'react';
import {Layout} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import HomePageHeader from './../components/HomePageHeader';
import HomePageFooter from './../components/HomePageFooter';
import HomePageBanner from './../components/HomePageBanner';
import {HomePageDesc} from './../components/HomePageBanner';
import LayoutLess from './../components/StylesReset/layout.less';
function IndexPage() {
    return (
        <div>
            <Layout>
                <Layout>
                    <Header className={LayoutLess.AntLayoutHeader}>
                        <HomePageHeader />
                    </Header>
                    <Content>
                        <HomePageBanner />
                        <HomePageDesc />
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
