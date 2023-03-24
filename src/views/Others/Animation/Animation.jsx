import { Component } from 'react'
import { Layout, Divider, Row, Col, Button, Tabs } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/animation.scss'

const typeIn = [
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp',
    'fadeIn',
    'fadeInDown',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'fadeInUp',
    'fadeInUpBig',
    'flipInX',
    'flipInY',
    'rotateIn'
]
const typeOut = [
    'bounceOut',
    'bounceOutDown',
    'bounceOutLeft',
    'bounceOutRight',
    'bounceOutUp',
    'fadeInDown',
    'fadeOut',
    'fadeOutDown',
    'fadeOutDownBig',
    'fadeOutLeft',
    'fadeOutLeftBig',
    'fadeOutRight',
    'fadeOutRightBig',
    'fadeOutUp',
    'fadeOutUpBig',
    'rotateOut'
]
const typeOther = [
    'bounceIn',
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shake',
    'headShake',
    'swing',
    'tada',
    'wobble',
    'jello'
]

class AnimationView extends Component {
    state = {
        fontType: 'animate__animated animate__bounceInRight'
    }
    changeType = v => {
        console.log(v)
        this.setState({
            fontType: `animate__animated animate__${v}`
        })
    }
    render() {
        return (
            <Layout className='animate__animated animate__fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['其他', '动画']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>当页面需要动态效果时。</p>
                </div>
                <Row gutter={8} style={{ marginTop: '3rem' }}>
                    <Col span={10}>
                        <Tabs type='card' tabPosition='left' items={[{
                            key: '1',
                            label: '进场',
                            children: (typeIn.map((v, i) => (
                                <Button
                                    type='primary'
                                    size='small'
                                    key={i}
                                    onClick={this.changeType.bind(this, v)}
                                    ghost>
                                    {v}
                                </Button>
                            )))
                        }, {
                            key: '2',
                            label: '退场',
                            children: (typeOut.map((v, i) => (
                                <Button
                                    type='primary'
                                    size='small'
                                    key={i}
                                    onClick={this.changeType.bind(this, v)}
                                    ghost>
                                    {v}
                                </Button>
                            )))
                        }, {
                            key: '3',
                            label: '其它',
                            children: (typeOther.map((v, i) => (
                                <Button
                                    type='primary'
                                    size='small'
                                    key={i}
                                    onClick={this.changeType.bind(this, v)}
                                    ghost>
                                    {v}
                                </Button>
                            )))
                        }]}>
                        </Tabs>
                    </Col>
                    <Col span={14}>
                        <div
                            style={{ fontSize: '4.8rem', textAlign: 'center', padding: '2rem' }}
                            className={this.state.fontType}>
                            Animate.css
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default AnimationView
