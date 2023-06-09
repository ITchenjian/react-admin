import { Component } from 'react';
import {connect} from "react-redux";
import { menuToggleAction } from '@/store/actionCreators';
import * as echarts from 'echarts';
// import 'echarts/lib/chart/line'
/* import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend' */

class Line extends Component {
    constructor(props) {
        super(props);
        this.myChart = null;
    }
    componentDidMount() {
        this.myChart = echarts.init(document.getElementById('line'))
        this.myChart.setOption({
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    data: [150, 232, 201, 154, 190, 330, 410]
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
        return <div id='line' style={{ height: 300 }}></div>
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
)(Line)
