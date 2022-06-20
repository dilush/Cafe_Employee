import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom'
import { Button, Row, Col, Form, Input, Space, notification } from 'antd';

import { addCafe, updateCafe } from '../../redux/actions/cafes.action';
import CommonInput from '../Shared/CommonInput';

const { TextArea } = Input;

const UpdateCafe = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cafes = useSelector(state => state.cafesState.cafes);
    const [cafe, setCafe] = useState(null);

    useEffect(() => {
        if (params.id !== '0') {
            let matchingCafe = cafes.find(c => c.id === params.id);
            if (matchingCafe) {
                setCafe(matchingCafe);
            }
        }
        else {
            setCafe({
                id: '0',
                name: '',
                description: '',
                location: '',
                logo: 'https://picsum.photos/200/80'
            });
        }
    }, [params.id, cafes]);

    const onFinish = async (values) => {
        // sample logo
        values.logo = 'https://picsum.photos/200/80';

        if (values.id === '0') {
            dispatch(addCafe(values));
            notification['success']({
                message: 'Item added successfully',
            });
        }
        else {
            dispatch(updateCafe(values));
            notification['success']({
                message: 'Item updated successfully',
            });
        }
        navigate('/');
    };

    const fileChanged = (e) => {
        let file = e.currentTarget.files[0];

        // size validation
        if (file.size > 2000000 ) {
            notification['error']({
                message: 'Images size maximum 2mb allowed',
            });
        }
    }


    return (
        <>
            {
                cafe &&
                <Form
                    name="updateCafeForm"
                    layout="vertical"
                    initialValues={cafe}
                    onFinish={onFinish}
                >
                    <div className="form-title-container">
                        {
                            cafe.id === '0' &&
                            <h3>Add new cafe</h3>
                        }
                        {
                            cafe.id !== '0' &&
                            <h3>Update existing cafe</h3>
                        }

                        <div className="action-btn-container">
                            <Space>
                                <Link to="/">Cancel </Link>
                                <Button type="primary" htmlType="submit"> Submit </Button>
                            </Space>
                        </div>
                    </div>
                    <div className="form-container">
                        <Form.Item hidden={true} name="id"> <Input /></Form.Item>

                        <Row gutter={25}>
                            <Col span={13}>
                                <CommonInput label="Name" name="name" required={true} regEx={/^.{6,10}$/}
                                    regExMessage="Name should be in between 6 to 10 character" />

                                <CommonInput label="Location" name="location" required={true} />

                                <Form.Item label="Description" name="description"
                                    rules={[{ required: true, message: 'Please enter description' }]}>
                                    <TextArea rows={4} placeholder="Maximum length is 256 characters" maxLength={256} />
                                </Form.Item>

                            </Col>
                            <Col>
                                <input type='file' accept="image/*" onChange={fileChanged} />
                            </Col>
                        </Row>

                    </div>
                </Form>
            }
        </>

    );
}

export default UpdateCafe;