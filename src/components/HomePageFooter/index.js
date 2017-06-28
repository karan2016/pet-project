import React from 'react';
import styles from './index.less';
import {Row, Col} from 'antd';

function HomePageFooter() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <Row type="flex" justify="center" align="middle">
                    <Col xs={10} md={4} lg={4}>
                        <ul>
                            <li>关于我们</li>
                            <li>加入我们</li>
                            <li>联系我们</li>
                            <li>商务合作</li>
                        </ul>
                    </Col>
                    <Col xs={10} md={4} lg={4}>
                        <ul>
                            <li>关于我们</li>
                            <li>加入我们</li>
                            <li>联系我们</li>
                            <li>商务合作</li>
                        </ul>
                    </Col>
                    <Col xs={20} md={8} lg={8}>
                        <ul>
                            <li>关于我们</li>
                            <li>加入我们</li>
                            <li>联系我们</li>
                            <li>商务合作</li>
                        </ul>
                    </Col>
                    <Col className={styles.verticalMiddle}>
                        <p>24小时服务热线</p>
                        <p className={styles.title}>18500612676</p>
                    </Col>
                </Row>
            </div>
            <div className={styles.addr}>&copy; 上海浦东新区南汇新城镇环湖西二路888号C楼</div>
        </div>
    )
}

export default HomePageFooter;