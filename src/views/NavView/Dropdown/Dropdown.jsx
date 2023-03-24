import { Layout, Divider, Dropdown, Row, Col, message, Button } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/dropdown.scss'

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`)
}

const getItem = (label, key, disabled, icon, children, type) => {
    return {
        key,
        icon,
        disabled,
        children,
        label,
        type,
    };
}
const menuItems = [
        getItem('1st menu item', '0'), 
        getItem('2nd menu item', '1'),
        getItem('3rd menu item (disabled)', '2', true),
        getItem('sub menu', 'sub1', false, '', [getItem('4rd menu item', 'sub1-1'), getItem('5th menu item', 'sub1-2')], 'group')
    ];

function handleButtonClick(e) {
    message.info('Click on left button.')
    console.log('click left button', e)
}
const DropdownView = () => (
    <Layout className='animated fadeIn'>
        <div>
            <CustomBreadcrumb arr={['导航', '下拉菜单']}></CustomBreadcrumb>
        </div>
        <div className='base-style'>
            <h3>何时使用</h3>
            <Divider />
            <p>
                当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
            </p>
        </div>
        <Row gutter={8}>
            <Col span={8}>
                <div className='base-style'>
                    <Dropdown menu={{items: menuItems, onClick}} >
                        <Button type='link'>
                            Hover me <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className='base-style'>
                    <Dropdown menu={{items: menuItems, onClick}}  placement='bottomLeft'>
                        <Button>bottomLeft</Button>
                    </Dropdown>
                    <Dropdown menu={{items: menuItems, onClick}}  placement='bottom'>
                        <Button>bottom</Button>
                    </Dropdown>
                    <Dropdown menu={{items: menuItems, onClick}}  placement='bottomRight'>
                        <Button>bottomRight</Button>
                    </Dropdown>
                    <br />
                    <Dropdown menu={{items: menuItems, onClick}}  placement='topLeft'>
                        <Button>topLeft</Button>
                    </Dropdown>
                    <Dropdown menu={{items: menuItems, onClick}}  placement='top'>
                        <Button>top</Button>
                    </Dropdown>
                    <Dropdown menu={{items: menuItems, onClick}}  placement='topRight'>
                        <Button>topRight</Button>
                    </Dropdown>
                </div>
            </Col>
            <Col span={8}>
                <div className='base-style'>
                    <Dropdown menu={{items: menuItems, onClick}}  trigger={['click']}>
                        <Button type='link'>
                            Click me <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            </Col>
            <Col span={8}>
                <div className='base-style'>
                    <div id='components-dropdown-demo-dropdown-button'>
                        <Dropdown.Button onClick={handleButtonClick} menu={{items: menuItems, onClick}} >
                            Dropdown
                        </Dropdown.Button>
                        <Dropdown.Button menu={{items: menuItems, onClick}}  icon={<UserOutlined />}>
                            Dropdown
                        </Dropdown.Button>
                        <Dropdown.Button onClick={handleButtonClick} menu={{items: menuItems, onClick}}  disabled>
                            Dropdown
                        </Dropdown.Button>
                        <Dropdown menu={{items: menuItems, onClick}} >
                            <Button>
                                Button <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                </div>
            </Col>
        </Row>
    </Layout>
)

export default DropdownView
