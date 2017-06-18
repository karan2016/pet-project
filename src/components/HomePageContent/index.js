import React from 'react';
import {Row, Col} from 'antd';
import styles from './index.less';

class DescElement extends React.Component {
  render() {
    let props = this.props;
    return (
        <div>
            <img src={props.imgUrl} alt={props.imgTitle}/>
            <p>{props.text}</p>
        </div>
    );
  }
}

function renderShowModule(props) {
    return (
        <Col xs={20} sm={20} md={6} lg={6} xl={6} className={styles.showModule}>
            <div className="ctn">
                <img src={props.imgUrl} alt={props.imgTitle}/>
                <p>{props.text}</p>
            </div>
        </Col>
    );
}

function renderAboutModule(props) {
     return (
        <Col xs={20} sm={20} md={8} lg={8} xl={8}>
            <div className={styles['about-title']}>
                <h3>{props.type}</h3>
                <p>{props.title}</p>
            </div>
            <div className={styles['about-content']}>
                <div className={styles['about-img-wrap']}>
                    <img src={props.imgUrl} alt="dog"/>
                </div>
                <p>
                    <img className={styles['to-left']} src="http://orqgau7u6.bkt.clouddn.com/toLeft.png" alt=""/>
                    {props.text}
                    <img className={styles['to-right']} src="http://orqgau7u6.bkt.clouddn.com/toRight.png" alt=""/>
                </p>
            </div>
        </Col>
    );
}

function renderCityModule(props) {
    const items = props.map(item => {
        return (
            <span>{item}</span>
        );
    });
    return (
        <li>
            {items}
        </li>
    );
}

let descArray = [{
        imgUrl: "http://orqgau7u6.bkt.clouddn.com/1.png",
        imgTitle: "title1",
        text: "以前宠物只是单指人们为了消除孤寂或出于娱乐目的而豢养的动物。现今宠物定义为，出于非经济目的而豢养的动植物。宠物是为了精神的目的而豢养的动植物。一般为了消除孤寂，或娱乐而豢养，以前的宠物一般是哺乳纲或鸟纲的动物，因为这些动物脑子比较发达，容易和人交流。如今，除了广为人知的活体宠物外，还有诸多的虚拟宠物。"
    }, {
        imgUrl: "http://orqgau7u6.bkt.clouddn.com/1.png",
        imgTitle: "title1",
        text: "以前宠物只是单指人们为了消除孤寂或出于娱乐目的而豢养的动物。现今宠物定义为，出于非经济目的而豢养的动植物。宠物是为了精神的目的而豢养的动植物。一般为了消除孤寂，或娱乐而豢养，以前的宠物一般是哺乳纲或鸟纲的动物，因为这些动物脑子比较发达，容易和人交流。如今，除了广为人知的活体宠物外，还有诸多的虚拟宠物。"
    },{
        imgUrl: "http://orqgau7u6.bkt.clouddn.com/1.png",
        imgTitle: "title1",
        text: "以前宠物只是单指人们为了消除孤寂或出于娱乐目的而豢养的动物。现今宠物定义为，出于非经济目的而豢养的动植物。宠物是为了精神的目的而豢养的动植物。一般为了消除孤寂，或娱乐而豢养，以前的宠物一般是哺乳纲或鸟纲的动物，因为这些动物脑子比较发达，容易和人交流。如今，除了广为人知的活体宠物外，还有诸多的虚拟宠物。"
    }];

let aboutArray = [{
        type: "关于用户",
        title: "宠物的美好时光",
        imgUrl: "http://orqgau7u6.bkt.clouddn.com/4.png",
        imgTitle: "title1",
        text: "谈到宠物，人们通常会将其与猫.鱼.鸟等许多小动物联系起来。但是在最近，宠物市场上新出现了例如水晶虾、蜥蜴、变色龙、蛇、蜘蛛、蜈蚣、仓鼠等与我们日常生活中或惯常思维所理解的宠物不一样的“另类宠物”。另外，在网络世界中也有一些虚拟网络宠物出现，不断满足着人们饲养宠物的需要。日常生活的丰富多彩，人们对新事物的不断追求，使得各种各样的个性宠物不断出现，这就远远超出了我们所习惯理解"
    }, {
        type: "关于用户",
        title: "宠物的美好时光",
        imgUrl: "http://orqgau7u6.bkt.clouddn.com/4.png",
        imgTitle: "title1",
        text: "谈到宠物，人们通常会将其与猫.鱼.鸟等许多小动物联系起来。但是在最近，宠物市场上新出现了例如水晶虾、蜥蜴、变色龙、蛇、蜘蛛、蜈蚣、仓鼠等与我们日常生活中或惯常思维所理解的宠物不一样的“另类宠物”。另外，在网络世界中也有一些虚拟网络宠物出现，不断满足着人们饲养宠物的需要。日常生活的丰富多彩，人们对新事物的不断追求，使得各种各样的个性宠物不断出现，这就远远超出了我们所习惯理解"
    }];

let cityArray = [
    ['汤臣一品', '汤臣一品', '汤臣一品', '汤臣一品','汤臣一品'],
    ['汤臣一品', '汤臣一品', '汤臣一品', '汤臣一品','汤臣一品'],
    ['汤臣一品', '汤臣一品', '汤臣一品', '汤臣一品','汤臣一品'],
    ['汤臣一品', '汤臣一品', '汤臣一品', '汤臣一品','汤臣一品'],
    ['汤臣一品', '汤臣一品', '汤臣一品', '汤臣一品','汤臣一品']
];

function HomePageContent() {
    return (
        <Row className={styles.content}>
            <Col span={24} className={styles.desc}>
                <Row type="flex" justify="space-around" class={styles.descContent}>
                    <Col span={24} className={styles['desc-title']}>回家会享受幸福</Col>
                    {descArray.map(item => renderShowModule(item))}               
                </Row>
            </Col>
            <Col span={24} className={styles.about}>
                <Row type="flex" justify="space-around">
                   {aboutArray.map(item => renderAboutModule(item))}
                </Row>
            </Col>
            <Col span={24} className={styles.city}>
                <Row  type="flex" justify="space-around">
                    <Col span={24} className={styles['city-title']}>已覆盖的城市及社区</Col>
                    <Col span={18} className={styles['city-content']}>
                        <ul>
                            {cityArray.map(item => renderCityModule(item))}
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default HomePageContent;
