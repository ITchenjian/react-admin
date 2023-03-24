import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import {
    Alert,
    Layout,
    Row,
    Col,
    Divider,
    Form,
    Button,
    Input,
    InputNumber,
    Checkbox,
    Space,
    Tooltip,
    Cascader,
    Select,
    DatePicker,
    Radio,
    Rate,
    Switch,
    Slider,
    AutoComplete,
    message
} from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import '@/style/view-style/form.scss'

const { Option } = Select

const residences = [
    {
        value: 'sichuan',
        label: '四川',
        children: [
            {
                value: 'chengdu',
                label: '成都',
                children: [
                    {
                        value: 'gaoxin',
                        label: '高新区'
                    }
                ]
            }
        ]
    },
    {
        value: 'gansu',
        label: '甘肃',
        children: [
            {
                value: 'lanzhou',
                label: '兰州',
                children: [
                    {
                        value: 'anning',
                        label: '安宁区'
                    }
                ]
            }
        ]
    }
]

class FromView extends Component {
    formRef = React.createRef()
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        visible: true,
        createModel: {
            switch: true
        }
    }

    handleClose = () => {
        this.setState({ visible: false })
    }

    handleFinish = values => {
        console.log('handleFinish', values);
        message.info('你很棒哦,这么快就填好了!')
    }
    handleFinishFailed = (data) => {
        console.log('handleFinishFailed:', data)
    }

    handleConfirmBlur = e => {
        const { value } = e.target
        this.setState({ confirmDirty: this.state.confirmDirty || !!value })
    }

    compareToFirstPassword = (rule, value, callback) => {
        if (value && value !== this.formRef.current.getFieldValue('password')) {
            return Promise.reject(new Error('两次输入密码不一致!'));
        } else {
            return Promise.resolve();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        if (value && this.state.confirmDirty) {
            this.formRef.current.validateFields(['confirm'], { force: true })
        }
        callback()
    }

    handleWebsiteChange = value => {
        let autoCompleteResult
        if (!value) {
            autoCompleteResult = []
        } else {
            autoCompleteResult = ['@google.com', '@163.com', '@qq.com'].map(domain => `${value}${domain}`)
        }
        this.setState({ autoCompleteResult })
    }

    handleSwitchChange = value => {
        // setState执行的是浅层的复制合并
        const obj = this.state.createModel
        obj.switch = value
        this.setState({ createModel: obj })
        console.log(this.state)
    }
    handleAgreementChange = e => {
        const obj = this.state.createModel
        obj.agreement = e.target.checked
        this.setState({ createModel: obj })
        console.log(this.state)
    }

    render() {

        const formItemLayout = {
            labelCol: {
                xs: { span: 16 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 16 },
                sm: { span: 10 }
            }
        }
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 16,
                    offset: 0
                },
                sm: {
                    span: 10,
                    offset: 6
                }
            }
        }

        const websiteOptions = this.state.autoCompleteResult.map(website => ({
            label: website,
            value: website,
        }))

        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['表单', '基础表单']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider></Divider>
                    <p>用于创建一个实体或收集信息。</p>
                    <p>需要对输入的数据类型进行校验时。</p>
                </div>

                <Row>
                    <Col span={10}>
                        <div className='base-style'>
                            <div>
                                {this.state.visible ? (
                                    <Alert
                                        message="你最好认真的填写表单!"
                                        type="warning"
                                        closable
                                        banner
                                        afterClose={this.handleClose}
                                    />
                                ) : null}
                            </div>
                            <Divider orientation="left">基础功能</Divider>
                            <Form {...formItemLayout} onFinish={this.handleFinish} onFinishFailed={this.handleFinishFailed} ref={this.formRef}>
                                <Form.Item
                                    name="username"
                                    label={
                                        <span>
                                            用户名&nbsp;
                                            <Tooltip title='可以尽量好听点，真的!'>
                                                <QuestionCircleOutlined />
                                            </Tooltip>
                                        </span>
                                    }
                                    rules = {[{ required: true, message: '请输入用户名' }]}>
                                    <Input placeholder='请输入用户名' />
                                </Form.Item>
                                <Form.Item name="sex" label="性别" rules = {[{ required: true, message: '请选择性别' }]}>
                                    <Radio.Group>
                                        <Radio value="man">男</Radio>
                                        <Radio value="women">女</Radio>
                                        <Radio value="unknow">不详</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item name="hobby" label="爱好" rules = {[{ required: true, message: '请至少选择一个爱好' }]} initialValue = {['A', 'B']}>
                                    <Checkbox.Group style={{ width: '100%' }}>
                                        <Row>
                                            <Col span={8}>
                                                <Checkbox value='A'>A</Checkbox>
                                            </Col>
                                            <Col span={8}>
                                                <Checkbox disabled value='B'>
                                                    B
                                                </Checkbox>
                                            </Col>
                                            <Col span={8}>
                                                <Checkbox value='C'>C</Checkbox>
                                            </Col>
                                        </Row>
                                    </Checkbox.Group>
                                </Form.Item>
                                <Form.Item name="age" label="年龄" rules={[{ required: true, message: '请输入年龄' }]}>
                                    <InputNumber placeholder='请输入年龄' style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item name="date-picker" label="出生年月" rules={[{ type: 'object', required: true, message: '请选择日期' }]}>
                                    <DatePicker style={{ width: '100%' }} placeholder='请选择日期' />
                                </Form.Item>

                                <Form.Item name="email" label="邮箱" rules={[{
                                        type: 'email',
                                        message: '请输入正确的邮箱!'
                                    }, {
                                        required: true,
                                        message: '请输入邮箱'
                                    }
                                ]}>
                                    <AutoComplete
                                        options={websiteOptions}
                                        onChange={this.handleWebsiteChange}
                                        placeholder='请输入邮箱'>
                                        <Input />
                                    </AutoComplete>
                                </Form.Item>

                                <Form.Item name="password" label="密码" rules={[{
                                    required: true,
                                    message: '请输入密码!'
                                }]} hasFeedback>
                                    <Input.Password placeholder="请输入密码" autoComplete="off"/>
                                </Form.Item>

                                <Form.Item name="confirm" label="确认密码" dependencies={['password']} rules={[{
                                    required: true,
                                    message: '请确认密码!'
                                }, {
                                    validator: this.compareToFirstPassword
                                }]} hasFeedback>
                                    <Input.Password onBlur={this.handleConfirmBlur} placeholder="请确认密码" autoComplete="off"/>
                                </Form.Item>

                                <Form.Item name="adress" label="家庭住址" rules={[{ type: 'array', required: true, message: '请选择住址!' }]} initialValue = {['sichuan', 'chengdu', 'gaoxin']}>
                                    <Cascader options={residences} placeholder='请选择住址' />
                                </Form.Item>
                                <Form.Item label="联系电话">
                                    <Space.Compact>
                                        <Form.Item
                                        name="prefix"
                                        noStyle
                                        rules={[{ required: true, message: '请输入电话区号!' }]}
                                        >
                                            <Select style={{ width: 70 }}>
                                                <Option value='86'>+86</Option>
                                                <Option value='87'>+87</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                        name="phone"
                                        noStyle
                                        extra="你最好写真实的电话号码."
                                        rules={[{ required: true, message: '请输入联系电话!' }]}
                                        >
                                            <Input style={{ width: 'calc(100% - 70px)'}} />
                                        </Form.Item>
                                    </Space.Compact>
                                </Form.Item>
                                <Form.Item name="rate" label="评分" extra="这个项目怎么样." initialValue={5}>
                                    <Rate disabled allowHalf />
                                </Form.Item>
                                <Form.Item name="switch" label="switch" valuePropName="checked" initialValue={true}>
                                    <Switch onChange={this.handleSwitchChange} />
                                </Form.Item>
                                <Form.Item name="slider" label="slider" initialValue={30}>
                                    <Slider disabled={this.state.createModel.switch ? false : true} />
                                </Form.Item>
                                <Form.Item name="agreement" valuePropName="checked" {...tailFormItemLayout}>
                                    <Checkbox onChange={this.handleAgreementChange}>
                                        阅读并理解 <a href='https://github.com/ITchenjian'>此协议</a>
                                    </Checkbox>
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        disabled={this.state.createModel.agreement ? false : true}>
                                        注册
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default FromView
