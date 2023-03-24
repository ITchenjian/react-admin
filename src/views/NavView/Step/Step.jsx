import { Component } from 'react'
import { Layout, Divider, Row, Col, Steps, Button, message } from 'antd'
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/step.scss'

const steps = [
    {
        title: 'First',
        content: 'First-content'
    },
    {
        title: 'Second',
        content: 'Second-content'
    },
    {
        title: 'Last',
        content: 'Last-content'
    }
]

class StepView extends Component {
    state = {
        current: 0,
        stepItems: [{
            title: 'Finished',
            description: 'This is a description.',
        }, {
            title: 'In Progress',
            description: 'This is a description.',
        }, {
            title: 'Waiting',
            description: 'This is a description.',
        }]
    }

    next() {
        const current = this.state.current + 1
        this.setState({ current })
    }

    prev() {
        const current = this.state.current - 1
        this.setState({ current })
    }
    onChange = current => {
        console.log('onChange:', current)
        this.setState({ current })
    }
    render() {
        const { current, stepItems } = this.state
        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['导航', '下拉菜单']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p>
                </div>
                <Row gutter={8}>
                    <Col span={12}>
                        <div className='base-style'>
                            <Steps direction="vertical" current={1} items={stepItems}/>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <Steps direction="vertical" size='small' current={1} items={stepItems}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='base-style'>
                            <Steps current={1} items={[{
                                title: 'Finished',
                                description: 'This is a description.'
                            }, {
                                title: 'In Progress',
                                subTitle: 'Left 00:00:08',
                                description: 'This is a description.'
                            }, {
                                title: 'Waiting',
                                description: 'This is a description.'
                            }]} />
                        </div>
                    </Col>
                    <Col>
                        <div className='base-style'>
                            <Steps size='small' current={1}  items={[{
                                title: 'Finished'
                            }, {
                                title: 'In Progress'
                            }, {
                                title: 'Waiting'
                            }]} />
                        </div>
                    </Col>
                    <Col>
                        <div className='base-style'>
                            <Steps items={[{
                                title: 'Login',
                                status: 'finish',
                                icon: <UserOutlined />,
                            }, {
                                title: 'Verification',
                                status: 'finish',
                                icon: <SolutionOutlined />,
                            }, {
                                title: 'Pay',
                                status: 'process',
                                icon: <LoadingOutlined />,
                            }, {
                                title: 'Done',
                                status: 'wait',
                                icon: <SmileOutlined />,
                            }]} />
                        </div>
                    </Col>
                    <Col>
                        <div className='base-style'>
                            <div>
                                <Steps current={current} onChange={this.onChange} items={steps} />
                                <div className='steps-content'>{steps[current].content}</div>
                                <div className='steps-action'>
                                    {current < steps.length - 1 && (
                                        <Button type='primary' onClick={() => this.next()}>
                                            Next
                                        </Button>
                                    )}
                                    {current === steps.length - 1 && (
                                        <Button type='primary' onClick={() => message.success('Processing complete!')}>
                                            Done
                                        </Button>
                                    )}
                                    {current > 0 && (
                                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                            Previous
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='base-style'>
                            <Steps current={1} status='error' items={stepItems} />
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default StepView
