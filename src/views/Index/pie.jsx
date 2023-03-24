import { Component } from 'react';
import {connect} from "react-redux";
import { menuToggleAction } from '@/store/actionCreators';
import * as echarts from 'echarts';
/* import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend' */

class Pie extends Component {
    constructor(props) {
        super(props);
        this.myChart = null;
    }

    componentDidMount() {
        this.myChart = echarts.init(document.getElementById('pie'))
        this.myChart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })
        window.addEventListener('resize', () => {
            this.myChart.resize()
        })
    }

    componentDidUpdate(preProps, preState) {
        if(this.props.menuToggle !== preProps.menuToggle) {
            this.myChart.resize()
        }
    }

    render() {
        return <div id='pie' style={{ height: 300 }}></div>
    }
}

const stateToProp = state => ({
    menuToggle: state.menuToggle
})

const dispatchToProp = dispatch => ({
    menuClick() {
        dispatch(menuToggleAction())
    }
})

export default connect(
    stateToProp,
    dispatchToProp
)(Pie)
