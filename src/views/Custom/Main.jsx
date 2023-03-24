import { lazy, useState } from 'react';
import { Button } from 'antd';

const Modal = lazy(() => import('./components/Modal'))
const Drawer = lazy(() => import('./components/Drawer'))
const Comp = {
    Modal: props => (<Modal visible={props.visible} setVisible={props.setVisible}/>),
    Drawer: props => (<Drawer visible={props.visible} setVisible={props.setVisible}/>)
}
const Main = () => {
    const [current, setCurrent] = useState('Modal')
    const [visible, setVisible] = useState(false)

    const openDialog = (current) => {
        setCurrent(current);
        setVisible(true);
    }

    return (
        <>
            <Button type="primary" onClick={() => openDialog('Modal')}>Modal</Button>
            <Button type="primary" onClick={() => openDialog('Drawer')}>Drawer</Button>
            {Comp[current]({current, visible, setVisible})}
        </>
    )
}

export default Main;