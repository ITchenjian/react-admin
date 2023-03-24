import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

const CustomBreadcrumb = props => {

    const extraBreadcrumbItems = props.arr.map(res => {
        if (typeof res === 'object') {
            return {
                key: res.path,
                title: <Link to={res.path}>{res.title}</Link>,
            };
        } else {
            return {
                key: res,
                title: res,
            }
        }
    });

    const breadcrumbItems = [{
        title: <Link to='/index'>首页</Link>,
        key: 'home',
    }].concat(extraBreadcrumbItems)

    return <Breadcrumb style={{ marginBottom: 16 }} items={breadcrumbItems}></Breadcrumb> 
}

CustomBreadcrumb.propTypes = {
    arr: PropTypes.array.isRequired
}

function shouldRender(nextProps, prevProps) {
    if (nextProps.arr.join() === prevProps.arr.join()) {
        return true
    }
    return false
}

export default React.memo(CustomBreadcrumb, shouldRender)
