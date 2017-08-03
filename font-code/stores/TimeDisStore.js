/**
 * Created by chaijiang on 2017/6/8.
 */
/**
 * Created by chaijiang on 2017/6/8.
 */
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var TimeDisStore =Object.assign({}, EventEmitter.prototype, {

    data: {
        //**********************总览******************************／
        pansect: {

            //耗时分布
            timeConsumeDistribute: {
                title: '耗时分布',
                type: [],
                tooltip:'axis',
                xAxisData: [
                    {
                        name: '百分比',
                        type:'value',
                        data:[]
                    }
                ],
                yAxisData: {
                    name: '时间分布(s)',
                    type:'',
                    data:'',
                },
                nameLocation: 'end',
                nameGap: 22,
                boundaryGap: true,
                dataZoom: false,
                color: ['#d48265','#99CCCC' ,'#2f4554', '#61a0a8',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
                animation: true,
                data: [

                ],
            },


        },


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
module.exports = TimeDisStore;



