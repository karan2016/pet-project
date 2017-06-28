import React from 'react';
import styles from './index.less';
import {Row, Col} from 'antd';
import { Link } from 'dva/router';

function PageHeader(params) {
    return (
        <Row>
            <Col xs={24} sm={24} md={5} lg={5}>
            <Link to="/">
                <img src="http://orqgau7u6.bkt.clouddn.com/logo.png" alt="logo"/>                
            </Link>
            </Col>
        </Row>
    )
}

export default PageHeader;