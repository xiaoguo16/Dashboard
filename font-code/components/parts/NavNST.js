/**
 * Created by iosteam on 2017/6/14.
 */
import React, {Component} from 'react'


import DashBoardDispatcher from '../../dispatcher/DashBoardDispatcher'
import AppStore2 from '../../stores/AppStore2'
import TimeDisStore from '../../stores/TimeDisStore'
import TimeTrendStore from '../../stores/TimeTrendStore'
import Pandect from './NewStartTime/Pandect'


import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
import { Row, Col } from 'antd';
import { Button } from 'antd';


export default class NavNST extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current:'1',
            style1:'navDetail2',
        }
        this.handleClick1 = this.handleClick1.bind(this)

    }

    /**************************页面加载前********************************************/
    componentWillMount(){
        AppStore2.addChangeListener(this._onChange.bind(this))

        DashBoardDispatcher.dispatch({
            action: 'GET_META',
            data: {
            }
        })
        window.addEventListener('resize', this._resize.bind(this));
    }

    /**************************页面加载前********************************************/

    componentDidMount(){
    }
    componentWillUnmount() {
        AppStore2.removeChangeListener(this._onChange);
    };
    _onChange(){
        this.setState(AppStore2)
        console.log('AppStore2')
    }
    _resize(){
        AppStore2.emitChange("changeport")

    }
    //*****************************导航切换函数*********************
    handleClick1 () {
        this.setState({
            current: '1',
            style1:'navDetail2',
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
                position:'relative',
                paddingTop: '40',
            },
            head:{
                height:'90px',
                lineHeight:'90px',
                width:'100%',
                //background:'rgba(48, 56, 65, 1)',
                background: 'rgba(78, 94, 120, 1)',
                color:'white',
                fontSize:30,
                zIndex:'1',

            },
            right:{
                height:'auto',
                width:'86%',
                margin:'0 auto',
                marginTop:'20px'
            },

        }


        //*******************根据导航切换右边内容***********************************／
        let divRight= (
            <Pandect data={AppStore2.data.pansect}/>
        )

        //*****样式控制*************************************／




        return (
            <div style={styles.root}>
                <div style={styles.head}><span style={{marginLeft:'20px'}}>全新启动时间</span></div>

                <div style={styles.right}>
                    {divRight}
                </div>
                <div style={{clear:'both'}}></div>
            </div>

        )
    }
}