/**
 * Created by chaijiang on 2017/3/31.
 */

import React, {Component} from 'react'
import $ from 'jquery'
import '../../../node_modules/echarts/map/js/china';
import { Select } from 'antd';

import { Checkbox, Row, Col } from 'antd';
const CheckboxGroup = Checkbox.Group;
import DashBoardDispatcher from '../../../dispatcher/DashBoardDispatcher'
import ChooseStore from '../../../stores/ChooseStore'
const Option = Select.Option;
export default class ChartsNoOption extends Component {

    constructor(props) {
        super(props)
        this.state = {
            index:this.props.index,
        }
        this.initLine = this.initLine.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount(){
    }
    componentDidMount() {
        this.initLine()
    }
    componentDidUpdate(){
        this.initLine()
    }
    handleChange(value){
        DashBoardDispatcher.dispatch({
            action: 'CHANGE_select',
            data: {
                which:this.props.index,
                selected: value
            }
        })

    }
    initLine(){
        if(this.props.value=='snet'){
            console.log('1111111')
        }

        const index = this.props.index

        const dom = $('#' + index)

        const chartData = this.props.data

        dom.css({
            width: '100%',
            height: '100%'
        })

        let echarts = require('echarts');

        // 基于准备好的dom，初始化echarts实例

        let myChart = echarts.init(document.getElementById(index));
        // 绘制图表

        myChart.setOption({
            title: {
                text: chartData.title,
                textAlign:'left',
                textStyle:{
                    fontSize:17,
                    fontWeight:'bold'
                },
                top:10,
                left:20
            },
            tooltip: {
                trigger: chartData.tooltip,
                formatter:chartData.tooltipset
            },
            legend: {
                data: chartData.type,

                //data:["启动总耗时","启动净耗时","初始化应用耗时","splash耗时","1sad","sssswel","slfeed","sau","sadcost", "sadload"],
                top: this.props.height-50,
                left:'right'
            },

            toolbox: {
                show : true,
                right:20,
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }

            },
            calculable : true,
            xAxis : chartData.xAxisData,
            yAxis : chartData.yAxisData,
            color: chartData.color,
            visualMap: chartData.visualMap,
            grid: {
                left: '40px',
                right: '70px',
                bottom: '60px',
                top:'90px',
                containLabel: true,

            },
            selectedMode : 'multiple',
            series : chartData.data,
            animation : chartData.animation
        });


    }


    render() {

        const styles = {
            root: {
                width: '100%',
                height: 'auto',
                margin: 0,
                padding: 0,
                textAlign: 'center',
            },


        }




        return (
            <div style={styles.root}>
                <div style={styles.root} id={this.props.index}>

                </div>

            </div>

        )
    }
}


/*

 <div style={{width:'70%',background:'lightgray',float:'right',zIndex: 100,position:'relative',margin:-(this.props.height-10)+'px 120px auto auto'}}>
 <CheckboxGroup  onChange={this.handleChange}>
 <Row>
 <Col span={5}><Checkbox value="stotal">启动1总耗时</Checkbox></Col>
 <Col span={5}><Checkbox value="snet">启动净耗时</Checkbox></Col>
 <Col span={5}><Checkbox value="sload">初始化应用耗时</Checkbox></Col>
 <Col span={5}><Checkbox value="ssplash">splash耗时</Checkbox></Col>
 <Col span={4}><Checkbox value="sad">广告展示耗时</Checkbox></Col>
 </Row>
 <Row>
 <Col span={5}><Checkbox value="swel">欢迎回来耗时</Checkbox></Col>
 <Col span={5}><Checkbox value="slfeed">加载feed耗时</Checkbox></Col>
 <Col span={5}><Checkbox value="sau">用户授权耗时</Checkbox></Col>
 <Col span={5}><Checkbox value="sadcost">广告耗时</Checkbox></Col>
 <Col span={4}><Checkbox value="sadload">广告加载耗时</Checkbox></Col>
 </Row>
 </CheckboxGroup>
 </div>
 */
