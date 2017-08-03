/**
 * Created by iosteam on 2017/6/26.
 */
/**
 * Created by chaijiang on 2017/6/8.
 */


/**
 * Created by chaijiang on 2017/3/31.
 */

import DashBoardDispatcher from '../../../dispatcher/DashBoardDispatcher'

import React, {Component} from 'react'
import ChooseStore from '../../../stores/ChooseStore'
import VersionTrendStore from '../../../stores/VersionTrendStore'
import { DatePicker } from 'antd';
import ChartsNoOption from './ChartsNoOption'
import PandectChoose from './PandectChoose'


export default class VersionTrend extends Component {

    constructor(props) {
        super(props)
        this.state = {
            para:ChooseStore.data.pansect.PortData,
        }

    }
    componentWillMount() {
        VersionTrendStore.addChangeListener(this._onChange4.bind(this))
    }

    _onChange4(){
        this.setState(VersionTrendStore)

    }
    render() {

        const true1=true
        let styles = {

            chart:{
                width:'98%',
                height: '350px',
                background:'white',
                margin:'10 auto',
                borderRadius: 5,
                position:'relative',
            },


        }
        return (
            <div style={styles.chart}>

                <ChartsNoOption data={VersionTrendStore.data.pansect.VersionTrend} index="VersionTrendStore" height='350'/>
            </div>
        )
    }
}