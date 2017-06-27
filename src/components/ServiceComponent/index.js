import React from 'react';
import {Layout} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import styles from './index.less';
// styles.html.fontSize = window.innerWidth * 0.05 + 'px';
// document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth * 0.05 + 'px';
// rem = document.documentElement.clientWidth * dpr / 10
// console.log(document.documentElement.clientWidth * dpr / 10);


var dpr, rem, scale;
var docEl = document.documentElement;
var fontEl = document.createElement('style');
var metaEl = document.querySelector('meta[name="viewport"]');

dpr = window.devicePixelRatio || 1;
rem = docEl.clientWidth * dpr / 20;
scale = 1 / dpr;


// 设置viewport，进行缩放，达到高清效果
metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');

// 设置data-dpr属性，留作的css hack之用
docEl.setAttribute('data-dpr', dpr);

// 动态写入样式
docEl.firstElementChild.appendChild(fontEl);
fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';

// 给js调用的，某一dpr下rem和px之间的转换函数
window.rem2px = function(v) {
    v = parseFloat(v);
    return v * rem;
};
window.px2rem = function(v) {
    v = parseFloat(v);
    return v / rem;
};

window.dpr = dpr;
window.rem = rem;

function ServiceComponent() {
    return (
        <div className={styles['service-wrap']}>
            <div className={styles['service-assurance']}>
                <h2>呆萌博士托管服务保障</h2>
                <p>
                    亲爱的呆萌博士用户：<br/>
                    呆萌博士为所有在呆萌博士平台下单并托管的（符合平台规定）的宠物，发生相关托管问题时，提供此份家庭托管意外伤害保障服务。<br/>
                    我们相信平台上每一位托管家庭和宠物主人都是真心喜爱毛孩子们的，所有的意外，都能够通过有效的沟通、细心的照顾来降低事故的发生。<br/>
                    我们希望宠物主人在托管时，如实详尽的告知托管家庭，托管的宠物的喜好，性格、脾气和生活习惯。托管家庭在宠物寄养期间，按照宠物主人提供的养护
                    习惯，做到仔细照顾，小心看护，以保证托管的顺利完成。<br/>
                    注：保障服务条款会根据平台规则不断修订完善
                </p>
            </div>
            <br/>
            <br/>
            <br/>
            <div className={styles['service-card']}>
                <h3>
                    <img src="http://orqgau7u6.bkt.clouddn.com/Combined%20Shape.png" alt=""/>
                    <span>享受保障服务基础条件</span>
                    <img src="http://orqgau7u6.bkt.clouddn.com/Combined%20Shape.png" alt=""/>
                    </h3>
                    <div>
                        在呆萌博士平台下单产生实际托管的宠物<br/>
                        符合呆萌博士平台规定可寄养的宠物<br/>
                        免疫证明齐全的宠物；<br/>
                        寄养的宠物年龄为6个月~ 8岁（含8岁）；<br/>
                        不在发情期、怀孕期的宠物；<br/>
                        无主动攻击性（非烈性犬），可以与陌生人和动物友好相处的宠物；<br/>
                        未生病无隐性疾病，且半年内没有犬瘟、细小、冠状等致命传染性疾病发病史的犬类，及半年内没有猫瘟等致命性传染性疾病的猫类；<br/>
                        出门遛狗必牵牵引绳<br/>
                        保障服务的有效时间：在呆萌博士托管期间<br/>
                    </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className={styles['service-card']}>
                <h3>
                    <img src="http://orqgau7u6.bkt.clouddn.com/Combined%20Shape.png" alt=""/>
                    <span>享受保障服务基础条件</span>
                    <img src="http://orqgau7u6.bkt.clouddn.com/Combined%20Shape.png" alt=""/>
                    </h3>
                    <div>
                        <span><i>1</i>宠物疾病</span>
                        <p>
                            若是由于宠物自身原因、由人为无法控制的情况导致需送医治疗产生的医疗费用，由呆萌博士根据实际情况承担相应的费用。<br/>
                            · 最高赔付费用为2000元<br/>
                            · 赔付费用不足2000元（以实际情况为准）<br/>
                            · 若产生非实际情况报销，我们将不提供任何保障服务<br/>
                        </p>
                        <span><i>2</i>宠物受伤</span>
                         <p>
                        若寄养家庭尽到了看管责任，由于意外因素造成受伤（如被流浪狗攻击、遭遇车祸等）则呆萌博士赔偿相应的医疗费用。<br/>
                        · 最高赔付费用为2000元<br/>
                        · 赔付费用不足2000元（以实际情况为准）<br/>
                        · 若产生非实际情况报销，我们将不提供任何保障服务<br/>
                        </p>
                        <span><i>3</i>宠物破坏寄养家庭环境</span>
                        <p>
                            宠物在寄养期间，若破坏了托管家庭家中不可移动的物品，如不能移动的沙发、墙壁、地板等，由呆萌博士赔付，<br/>
                            · 最高赔付费用为1000元<br/>
                            · 赔付费用不足1000元（以实际情况为准）<br/>
                            · 若产生非实际情况报销，我们将不提供任何保障服务<br/>
                            仅限正规发票维修，且不承担换新费用。<br/>
                        </p>
                        <span><i>4</i>宠物伤人</span>
                        <p>
                            若是宠物符合托管条件，在托管期间宠物无故伤人，受伤者需到医院就医：如打狂犬疫苗等，所产生的相关的医疗费用，会根据费用标准，由呆萌博士承担医疗费用。<br/>
                            · 赔付医疗费用上限为300元（按照各大城市的狂犬疫苗费用，国产疫苗费用一般不超出300元）<br/>
                            · 赔付医疗费用不足300元（根据实际费用进行报销）<br/>
                        </p>
                        <span><i>5</i>宠物弃养</span>
                        <p>
                            宠物在托管期间，若托管的宠物遭遇弃养，弃养情况判定如下：托管结束后的3日内无法联系宠物主人或宠物主人明确表示弃养。<br/>
                            · 当托管的宠物遭遇弃养事件时，请托管家庭及时联系呆萌博士，呆萌博士将会全力协助托管家庭联系宠物主人，在确认弃养发生后，呆萌博士将协助寻找新的宠物主人，并向托管家庭支付订单结束之后30日内的托管费用。<br/>
                            · 根据订单实际支付的每日托管费用计算，最高赔付费用为1000元<br/>
                        </p>
                        <span><i>6</i>宠物丢失</span>
                        <p>
                            若是宠物丢失，呆萌博士会报销托管家庭找寻宠物的广告费用。（希望托管家庭仔细看护宠物，避免丢失）<br/>
                            · 最高支付费用为200元<br/>
                        </p>
                        <span><i>7</i>宠物死亡</span>
                        <p>
                            宠物在托管期间，若托管的宠物突然发生死亡的状况，托管家庭（或宠物主人）需第一时间与合作的宠物医院联系，由医生进行死亡原因诊断，并向呆萌博士客服进行报备；<br/>
                            · 若是由于宠物自身疾病导致，则由宠物主人承担责任；<br/>
                            · 若是由于托管家庭的不当行为导致宠物突发死亡的状况，如虐待宠物、喂宠物不宜的食物、外出未牵绳等情况，则由托管家庭承 担全部责任；<br/>
                            呆萌博士将会协助双方处理善后事宜，尽力帮助双方将事情进行妥善处理。<br/>
                        </p>
                    </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className={styles.logo}>
                <img src="http://orqgau7u6.bkt.clouddn.com/DIBU.png" alt=""/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default ServiceComponent;