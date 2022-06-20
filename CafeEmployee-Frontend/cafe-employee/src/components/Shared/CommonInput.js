import { Form, Input } from 'antd';

const CommonInput = (props) => {
    return (
        <Form.Item label={props.label} name={props.name}
            rules={[
                (props.required === true) ? { required: true, message: 'This field is required' } : {},
                (props.regEx) ? {
                    pattern: props.regEx,
                    message: props.regExMessage ? props.regExMessage : "Invalid pattern",
                } : {}
            ]}>
            <Input />
        </Form.Item>
    );
}

export default CommonInput;