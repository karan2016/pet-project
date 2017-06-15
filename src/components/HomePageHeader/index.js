import React from 'react';
import styles from './index.less';

function HomePageHeader(params) {
    return (
        <div className={styles.clearfix}>
            <div className={styles.logoWrap}>
                <span className={styles.logo}></span>
                <span className={styles.name}>呆萌博士</span>
            </div>
            <a href="" className={styles.login}>
                <span>注册/登录</span>
            </a>
            <div className={styles.searchBox}>
                <input type="text" placeholder="搜索你想要的"/>
            </div>
        </div>
    )
}

export default HomePageHeader;