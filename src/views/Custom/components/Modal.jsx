// import { useState } from 'react';
import { Modal } from 'antd';

const App = (props) => {
	const handleOk = () => {
		props.setVisible(false)
	};
	const handleCancel = () => {
		props.setVisible(false)
	};

	return (
		<>
			<Modal title="Basic Modal" open={props.visible} onOk={handleOk} onCancel={handleCancel}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	);
};
export default App;