import { Drawer } from 'antd'

const App = (props) => {
    const onClose = () => {
        props.setVisible(false)
    };
    return (
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={props.visible}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    );
}

export default App;