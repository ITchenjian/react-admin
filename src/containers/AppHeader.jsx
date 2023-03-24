import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Layout, Avatar, Badge } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, GithubOutlined, BellOutlined, EditOutlined, SettingOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout

const AppHeader = props => {
    let { menuClick, avatar, menuToggle, loginOut } = props

    const getItem = (label, key, icon, children, type) => {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const menuItems = [
            getItem('用户设置', 'sub1', '', [{type: 'divider'}, getItem('个人设置', '1', <EditOutlined />), getItem('系统设置', '2', <SettingOutlined />)], 'group'),
            {type: 'divider'},
            getItem(<span onClick={loginOut}>退出登录</span>, 'sub2', <LogoutOutlined />),
        ];

    return (
        <Header className='header'>
            <div className='left'>
                { menuToggle ? <MenuUnfoldOutlined style={{ fontSize: '2rem' }} onClick={menuClick} /> : <MenuFoldOutlined style={{ fontSize: '2rem' }} onClick={menuClick} /> }
            </div>
            <div className='right'>
                <div className='mr15'>
                    <a rel='noopener noreferrer' href='https://github.com/ITchenjian/react-admin' target='_blank'>
                        <GithubOutlined style={{ color: '#000' }} />
                    </a>
                </div>
                <div className='mr15'>
                    <Badge dot={true} offset={[-2, 0]}>
                        <a href='https://github.com/ITchenjian/react-admin' style={{ color: '#000' }}>
                            <BellOutlined />
                        </a>
                    </Badge>
                </div>
                <div>
                    <Dropdown menu={{items: menuItems}} overlayStyle={{ width: '20rem' }}>
                        <div className='ant-dropdown-link'>
                            <Avatar icon={<UserOutlined />} src={avatar} alt='avatar' style={{ cursor: 'pointer' }} />
                        </div>
                    </Dropdown>
                </div>
            </div>
        </Header>
    )
}

AppHeader.propTypes = {
    menuClick: PropTypes.func,
    avatar: PropTypes.string,
    menuToggle: PropTypes.bool,
    loginOut: PropTypes.func
}

export default React.memo(AppHeader)
