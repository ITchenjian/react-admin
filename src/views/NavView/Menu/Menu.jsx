import { Component } from 'react'
import { Layout, Divider, Row, Col, Menu, Button, Switch } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import CustomBreadcrumb from '@/components/CustomBreadcrumb'

class MenuView extends Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

    state = {
        current: 'mail',
        collapsed: false,
        openKeys: ['sub1'],
        mode: 'inline',
        theme: 'light',

        menuData: [{
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined />,
        }, {
            label: 'Navigation Two',
            key: 'app',
            icon: <AppstoreOutlined />,
            disabled: true,
        }, {
            label: 'Navigation Three - Submenu',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [{
                type: 'group',
                label: 'Item 1',
                children: [{
                    label: 'Option 1',
                    key: 'setting:1',
                }, {
                    label: 'Option 2',
                    key: 'setting:2',
                }]
            }, {
                type: 'group',
                label: 'Item 2',
                children: [{
                    label: 'Option 3',
                    key: 'setting:3',
                }, {
                    label: 'Option 4',
                    key: 'setting:4',
                }],
            }]
        }, {
            label: (<a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>),
            key: 'alipay',
        }]
    }

    handleClick = e => {
        console.log('click ', e)
        this.setState({
            current: e.key
        })
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys })
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            })
        }
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    changeMode = value => {
        this.setState({
            mode: value ? 'vertical' : 'inline'
        })
    }

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light'
        })
    }

    render() {
        const { current, openKeys, collapsed, mode, theme, menuData } = this.state
        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['导航', '下拉菜单']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>
                        导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。
                    </p>
                </div>
                <Row gutter={8}>
                    <Col>
                        <div className='base-style'>
                            <Divider orientation='left'>顶部导航</Divider>
                            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" items={menuData} />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <Divider>内嵌菜单</Divider>
                            <Menu onClick={this.handleClick} style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" items={menuData}/>
                        </div>

                        <div className='base-style'>
                            <Divider>只展开当前父级菜单</Divider>
                            <Menu mode="inline" openKeys={openKeys} onOpenChange={this.onOpenChange} style={{ width: 256 }} items={menuData}/>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <Divider>可收缩菜单</Divider>
                            <div style={{ width: 256 }}>
                                <Button type='primary' onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                                    { collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
                                </Button>
                                <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" inlineCollapsed={collapsed} items={menuData} />
                            </div>
                        </div>

                        <div className='base-style'>
                            <Divider>可切换动态菜单</Divider>
                            <div>
                                <Switch onChange={this.changeMode} /> Change Mode
                                <span className='ant-divider' style={{ margin: '0 1em' }} />
                                <Switch onChange={this.changeTheme} /> Change Theme
                                <br />
                                <br />
                                <Menu style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode={mode} theme={theme} items={menuData} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default MenuView
