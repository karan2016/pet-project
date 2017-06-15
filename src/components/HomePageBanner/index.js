import React from 'react';
import {Row, Col} from 'antd';
import styles from './index.less';

function HomePageBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.msgBox}>
                <h2>呆萌博士1.0上线了！</h2>
                <div className={styles.line}></div>
                <p>打造全新的宠物平台</p>
                <a href="">
                    <span>下载APP</span>
                </a>
            </div>
        </div>
    )
}

export default HomePageBanner;
