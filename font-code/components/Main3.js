/**
 * Created by iosteam on 2017/6/14.
 */
/**
 * Created by chaijiang on 2017/3/31.
 */
import React, {Component} from 'react'

import AppDispatcher from '../dispatcher/AppDispatcher'
import AppStore from '../stores/AppStore'
import Pandect from './parts/FeedRefresh/Pandect'
import Client from './parts/FeedRefresh/Client'
import ErrorCount from './parts/FeedRefresh/ErrorCount'

import NavFR from './parts/NavFR'
import NavMM from './parts/NavMM'
import NavNST from './parts/NavNST'

import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
import { Row, Col } from 'antd';
import { Button } from 'antd';

require('./css/style.css')


module.exports= class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {


            current:'13',
            style11:'navDetail11',
            style12:'navDetail11',
            style13:'navDetail12',
        }


        this.handleClick11 = this.handleClick11.bind(this)
        this.handleClick12 = this.handleClick12.bind(this)
        this.handleClick13 = this.handleClick13.bind(this)

    }


    //*****************************导航切换函数*********************
    handleClick11 () {
        //window.location.href="http://dashboard.client.weibo.cn/performance/refresh_feed";
        window.location.href='http://localhost:8082/refresh_feed';
        /*
        this.setState({
            current: '11',
            style11:'navDetail12',
            style12:'navDetail11',
            style13:'navDetail11',

        });
        */
    }
    handleClick12 () {
       // window.location.href="http://dashboard.client.weibo.cn/performance/video";
       window.location.href='http://localhost:8082/video';
        /*
        this.setState({
            current: '12',
            style11:'navDetail11',
            style12:'navDetail12',
            style13:'navDetail11',

        });
        */
    }
    handleClick13 () {
        this.setState({
            current: '13',
            style11:'navDetail11',
            style12:'navDetail11',
            style13:'navDetail12',

        });
    }


    render() {
        const styles = {
            root: {
                width: '100%',
                height: 'auto',
                minHeight: '100%',
                margin: 0,
                padding: '0',
                background: 'rgba(78, 94, 120, 1)',
                fontSize:16,
                color:'white',
                position:'relative'
            },
            head:{
                height:125,
                width:'110% ',
                background:'rgba(48, 56, 65, 1)',
                color:'white',
                fontSize:30,
                padding:'20 50',
                position:'fixed',
                zIndex:'1',
                marginLeft:'-40',

            },

            nav:{
                float:'left',
                width:'12%',
                fontSize:16,
                height:'100%',
                marginTop:90,
                background:'rgba(57, 69, 88, 1)',
                //background:"-webkit-linear-gradient('rgba(57, 69, 88, 0.5)', 'rgba(57, 69, 88, 1)')",
                color:'rgba(164, 167, 174, 1)',
                position:'fixed',
            },
            navDetail1:{
                width:'100%',
                height:'60px',
                lineHeight:'60px',
                textAlign:'center',
            },
            navDetail2:{
                width:'100%',
                height:'60px',
                lineHeight:'60px',
                textAlign:'center',
                background:'rgba(75, 83, 100, 1)'
            },
            navDetail11:{
                float:'left',
                width:'200px',
                height:'40px',
                lineHeight:'40px',
                textAlign:'center',
                background:'rgba(36, 108, 130, 0.5)',
                borderRadiusTop:5 ,
                fontSize:15,
                display:'inline-block',
                marginLeft:'1px',
                //border:'solid 0.5px #fff'
                //marginTop: '60',


                //position:'relative',
            },
            navDetail12:{
                float:'left',
                width:'200px',
                height:'40px',
                lineHeight:'40px',
                textAlign:'center',
                background:'rgba(53, 134, 189, 1)',
                borderRadius: 5,
                position:'relative',
                fontSize:15,
                display:'inline-block',
                marginLeft:'2px',
                //border:'solid 1px #fff'

                //marginTop: '60',
            },
            navFont:{
                //float:'left',
                width:'600px',
                height:'60px',
                lineHeight:'60px',
                //textAlign:'center',
                //background:'rgba(53, 134, 189, 1)',
                borderRadius: 5,
                position:'relative',
                fontSize:30,
                //marginTop: '60',
            },
            right:{
                float:'right',
                height:'auto',
                width:'86%',
                marginTop:'10%',
                marginRight:10,
            },
            btnBoard:{
                float:'left',
                width:'610px',
                height:'44px',
                lineHeight:'40px',
                textAlign:'center',
                background:'clear',
                borderRadius: 5,
                position:'relative',
                fontSize:15,
                display:'inline-block',
                left: '-10px',
                top: '4.5px'
            },


        }

        //*******************根据导航切换右边内容***********************************／
        let divDown = (
            <NavNST/>
        )
        if(this.state.current==12){
            divDown=(

                <NavMM/>
            )
        }
        if(this.state.current==11){
            divDown=(

                <NavFR/>
            )
        }


        //*****样式控制*************************************／

        let t11= this.state.style11
        let t12= this.state.style12
        let t13= this.state.style13



        return (
            <div style={styles.root}>
                <div style={styles.head}>
                    <div style={styles.navFont}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户端性能分析Dashboard</span></div>



                    <section className="tabs">
                        <input id="tab-1" type="radio" name="radio-set" className={"tab-selector-1"}  onClick={this.handleClick11} />
                        <label htmlFor="tab-1" className={"tab-label-1"}>Feed刷新</label>



                        <input id="tab-2" type="radio" name="radio-set" className="tab-selector-2" checked="checked" />
                        <label htmlFor="tab-2" className="tab-label-2">全新启动时间</label>


                    </section>


                </div>

                <div>
                    {divDown}
                </div>

            </div>

        )
    }
}

