import React from 'react';
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

function HomePageDesc() {
    return (
        <div>
            <h3>title</h3>
            <ul>
                <li>
                    <div className="img"></div>
                    <div>desc</div>
                </li>
                <li>
                    <div className="img"></div>
                    <div>desc</div>
                </li>
                <li>
                    <div className="img"></div>
                    <div>desc</div>
                </li>
            </ul>
        </div>
    )
}

export {HomePageDesc};