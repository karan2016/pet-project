import React from 'react';
import {Row, Col} from 'antd';
import styles from './index.less';


function HomePageContent() {
    return (
        <Row className={styles.content}>
            <Col span={24} className={styles.desc}>
                <Row  type="flex" justify="space-around">
                    <Col span={24} className={styles['desc-title']}>回家会享受幸福</Col>
                    <Col xs={20} sm={20} md={6} lg={6} xl={6}>
                        <div className={styles['desc-img-wrap']}>
                            <img src="" alt="dog"/>
                        </div>
                        <p>以前宠物只是单指人们为了消除孤寂或出于娱乐目的而豢养的动物。
                            现今宠物定义为，出于非经济目的而豢养的动植物。宠物是为了精神的目的而豢养的动植物。
                            一般为了消除孤寂，或娱乐而豢养，以前的宠物一般是哺乳纲或鸟纲的动物，因为这些动物脑子比较发达，容易和人交流。
                            如今，除了广为人知的活体宠物外，还有诸多的虚拟宠物。
                        </p>
                    </Col>
                    <Col xs={20} sm={20} md={6} lg={6} xl={6}>
                        <div className={styles['desc-img-wrap']}>
                            <img src="" alt="dog"/>
                        </div>
                        <p>以前宠物只是单指人们为了消除孤寂或出于娱乐目的而豢养的动物。
                            现今宠物定义为，出于非经济目的而豢养的动植物。宠物是为了精神的目的而豢养的动植物。
                            一般为了消除孤寂，或娱乐而豢养，以前的宠物一般是哺乳纲或鸟纲的动物，因为这些动物脑子比较发达，容易和人交流。
                            如今，除了广为人知的活体宠物外，还有诸多的虚拟宠物。
                        </p>
                    </Col>
                    <Col xs={20} sm={20} md={6} lg={6} xl={6}>
                        <div className={styles['desc-img-wrap']}>
                            <img src="" alt="dog"/>
                        </div>
                        <p>以前宠物只是单指人们为了消除孤寂或出于娱乐目的而豢养的动物。
                            现今宠物定义为，出于非经济目的而豢养的动植物。宠物是为了精神的目的而豢养的动植物。
                            一般为了消除孤寂，或娱乐而豢养，以前的宠物一般是哺乳纲或鸟纲的动物，因为这些动物脑子比较发达，容易和人交流。
                            如今，除了广为人知的活体宠物外，还有诸多的虚拟宠物。
                        </p>
                    </Col>
                </Row>
            </Col>
            <Col span={24} className={styles.about}>
                <Row  type="flex" justify="space-around">
                    <Col xs={20} sm={20} md={8} lg={8} xl={8}>
                        <div className={styles['about-title']}>
                            <h3>关于用户</h3>
                            <p>宠物的美好时光</p>
                        </div>
                        <div className={styles['about-content']}>
                            <div className={styles['about-img-wrap']}>
                                <img src="" alt="dog"/>
                            </div>
                            <p>谈到宠物，人们通常会将其与猫.鱼.鸟等许多小动物联系起来。但是在最近，宠物市场上新出现了例如水晶虾、蜥蜴、变色龙、蛇、蜘蛛、蜈蚣、
                                仓鼠等与我们日常生活中或惯常思维所理解的宠物不一样的“另类宠物”。
                                另外，在网络世界中也有一些虚拟网络宠物出现，不断满足着人们饲养宠物的需要。
                                日常生活的丰富多彩，人们对新事物的不断追求，使得各种各样的个性宠物不断出现，这就远远超出了我们所习惯理解
                            </p>
                        </div>
                    </Col>
                    <Col xs={20} sm={20} md={8} lg={8} xl={8}>
                        <div className={styles['about-title']}>
                            <h3>关于用户</h3>
                            <p>宠物的美好时光</p>
                        </div>
                        <div className={styles['about-content']}>
                            <div className={styles['about-img-wrap']}>
                                <img src="" alt="dog"/>
                            </div>
                            <p>谈到宠物，人们通常会将其与猫.鱼.鸟等许多小动物联系起来。但是在最近，宠物市场上新出现了例如水晶虾、蜥蜴、变色龙、蛇、蜘蛛、蜈蚣、
                                仓鼠等与我们日常生活中或惯常思维所理解的宠物不一样的“另类宠物”。
                                另外，在网络世界中也有一些虚拟网络宠物出现，不断满足着人们饲养宠物的需要。
                                日常生活的丰富多彩，人们对新事物的不断追求，使得各种各样的个性宠物不断出现，这就远远超出了我们所习惯理解
                            </p>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col span={24} className={styles.city}>
                <Row  type="flex" justify="space-around">
                    <Col span={24} className={styles['city-title']}>已覆盖的城市及社区</Col>
                    <Col span={18} className={styles['city-content']}>
                        <ul>
                            <li>汤臣一品</li>
                            <li>汤臣一品</li>
                            <li>汤臣一品</li>
                            <li>汤臣一品</li>
                            <li>汤臣一品</li>
                            <li>汤臣一品</li>
                            <li>汤臣一品</li>
                            <li>汤臣一品</li>
                            <li>汤臣一品</li>
                            <li>汤臣一品</li>
                            <li>汤臣一品</li>
                            <li>汤臣一品</li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default HomePageContent;
