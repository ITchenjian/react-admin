import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Tabs, Select, Radio, Button } from 'antd'

const { Option } = Select

function callback(key) {
    console.log(key)
}


class TabsViews extends Component {
    state = {
        activeKey: '1',
        tabPosition: 'top',
        size: 'small',
        tabItems: [
            {
              key: '1',
              label: `Tab 1`,
              children: `Content of Tab Pane 1`,
            },
            {
              key: '2',
              label: `Tab 2`,
              children: `Content of Tab Pane 2`,
            },
            {
              key: '3',
              label: `Tab 3`,
              children: `Content of Tab Pane 3`,
            }
        ]
    }
    newTabIndex = 0

    changeTabPosition = tabPosition => {
        this.setState({ tabPosition })
    }

    onChange = e => {
        this.setState({ size: e.target.value })
    }

    onTabsChange = activeKey => {
        this.setState({ activeKey })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey)
    }

    add = () => {
        const { tabItems } = this.state
        const activeKey = `newTab${this.newTabIndex++}`
        tabItems.push({ label: 'New Tab', children: 'New Tab Pane', key: activeKey })
        this.setState({ tabItems: [...tabItems], activeKey })
        console.log(this.state)
    }

    remove = targetKey => {
        let { activeKey } = this.state
        let lastIndex
        this.state.tabItems.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1
            }
        })
        const tabItems = this.state.tabItems.filter(pane => pane.key !== targetKey)
        if (tabItems.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = tabItems[lastIndex].key
            } else {
                activeKey = tabItems[0].key
            }
        }
        this.setState({ tabItems, activeKey })
    }

    render() {
        const { size, tabPosition, activeKey, tabItems } = this.state
        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['展示', '标签页']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>提供平级的区域将大块内容进行收纳和展现，保持界面整洁</p>
                    <p>Ant Design 依次提供了三级选项卡，分别用于不同的场景</p>
                    <p>- 卡片式的页签，提供可关闭的样式，常用于容器顶部。</p>
                    <p>- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。</p>
                    <p>- RadioButton 可作为更次级的页签来使用。</p>
                </div>
                <Row gutter={8}>
                    <Col span={12}>
                        <div className='base-style'>
                            <Divider orientation='left'>基础</Divider>
                            <Tabs defaultActiveKey='1' onChange={callback} items={tabItems}></Tabs>
                        </div>
                        <div className='base-style'>
                            <Divider orientation='left'>控制大小</Divider>
                            <div>
                                <Radio.Group value={size} onChange={this.onChange} style={{ marginBottom: 16 }}>
                                    <Radio.Button value='small'>Small</Radio.Button>
                                    <Radio.Button value='default'>Default</Radio.Button>
                                    <Radio.Button value='large'>Large</Radio.Button>
                                </Radio.Group>
                                <Tabs defaultActiveKey='1' size={size} items={tabItems}></Tabs>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <Divider orientation='left'>控制显示位置</Divider>
                            <div>
                                <div style={{ marginBottom: 16 }}>
                                    Tab position：
                                    <Select
                                        value={tabPosition}
                                        onChange={this.changeTabPosition}
                                        dropdownMatchSelectWidth={false}>
                                        <Option value='top'>top</Option>
                                        <Option value='bottom'>bottom</Option>
                                        <Option value='left'>left</Option>
                                        <Option value='right'>right</Option>
                                    </Select>
                                </div>
                                <Tabs tabPosition={tabPosition} items={tabItems}></Tabs>
                            </div>
                        </div>
                        <div className='base-style'>
                            <Divider orientation='left'>可增加删除</Divider>
                            <div>
                                <div style={{ marginBottom: 16 }}>
                                    <Button onClick={this.add}>ADD</Button>
                                </div>
                                <Tabs
                                    hideAdd
                                    onChange={this.onTabsChange}
                                    activeKey={activeKey}
                                    type='editable-card'
                                    onEdit={this.onEdit}
                                    items={tabItems}>
                                </Tabs>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default TabsViews
