/**
 * Created by liangshuang6 on 2017/6/28.
 */
/**
 * Created by chaijiang on 2017/6/8.
 */


/**
 * Created by chaijiang on 2017/6/8.
 */
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var VersionTrendStore =Object.assign({}, EventEmitter.prototype, {

    data: {
        //**********************总览******************************／
        pansect: {



            //版本趋势
            VersionTrend: {
                title: '版本趋势',

                type: [],
                tooltip:'axis',
                xAxisData: [
                    {
                        name: '版本',
                        type:'',
                        data:[]
                    }
                ],
                yAxisData: {
                    name: '时间（s）',
                    type:'value',
                    data:'',
                    scale:true,

                },
                nameLocation: 'end',
                nameGap: 22,
                boundaryGap: true,
                dataZoom: false,
                //color: ['#fff','#fff', '#6c7989','#98c5cc' ,'#dc7262', '#ebc554',  '#acbfaa', '#ac82aa','#fff', '#fff', '#fff'],
                color: ['#d48265','#99CCCC', '#6c7989','#98c5cc' ,'#dc7262', '#ebc554',  '#acbfaa', '#ac82aa','#6e7074', '#546570', '#c4ccd3'],
                animation: true,
                data: [
                    {
                        type: 'line',
                        name: 'MAPI',
                        data: [10,20,30,40],
                        barWidth: 20
                    },
                    {
                        type: 'line',
                        name: '平台',
                        data: [20,30,40,50],
                        barWidth: 20
                    },
                    {
                        type: 'line',
                        name: '客户端',
                        data: [30,40,50,60],
                        barWidth: 20
                    }
                ],
            },


        },


        /***********************选择框中内容***********************
        //微博版本
        wbVersion:[
            {key:'All',value:"All"},
            {key:'7.2.0',value:"7.2.0"},
            {key:'7.3.0',value:"7.3.0"},
            {key:'7.4.0',value:"7.4.0"},
            {key:'7.5.0',value:"7.5.0"},
        ],
        //手机机型
        phoneType:[
            {key:'All',value:"All"},
            {key:'HTC',value:"HTC"},
            {key:'小米',value:"小米"},
        ],
        //系统版本
        sysVersion:[
            {key:'All',value:"All"},
            {key:'10.2.1',value:"10.2.1"},
            {key:'10.1.2',value:"10.1.2"},
            {key:'9.3.0',value:"9.3.0"},
            {key:'9.2.0',value:"9.2.0"},


        ]
        **//*********************选择框中内容**********************/

    },


    // Emit Change event
    emitChange: function (value) {
        this.emit('change')
    },

    // Add change listener
    addChangeListener: function (callback) {
        this.on('change', callback)
    },

    // Remove change listener
    removeChangeListener: function (callback) {
        this.removeListener('change', callback)
    }
})
module.exports = VersionTrendStore;



