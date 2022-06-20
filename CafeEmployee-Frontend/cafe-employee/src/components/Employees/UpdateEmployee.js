import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button, Row, Col, Form, Input, Space, notification, Radio, Select } from 'antd';

import { addEmployee, updateEmployee } from '../../redux/actions/employees.action';
import CommonInput from '../Shared/CommonInput';
const { Option } = Select;

const UpdateEmployee = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const employees = useSelector(state => state.employeesState.employees);
    const cafes = useSelector(state => state.cafesState.cafes);
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        if (params.id !== '0') {
            let matchingEmployee = employees.find(c => c.employeeId === params.id);

            if (matchingEmployee) {
                setEmployee(matchingEmployee);
            }
        }
        else {
            setEmployee({
                id: '0',
                name: '',
                emailAddress: '',
                phoneNumber: '',
                gender: null,
                cafeId: ''
            })
        }
    }, [params.id, employees]);

    const onFinish = (values) => {
        if (values.id === '0') {
            dispatch(addEmployee(values));
            notification['success']({
                message: 'Item added successfully',
            });
        }
        else {
            dispatch(updateEmployee(values));
            notification['success']({
                message: 'Item updated successfully',
            });
        }
        navigate('/employees');
    };


    return (
        <>
            {
                employee &&
                <Form
                    name="updateEmployeeForm"
                    layout="vertical"
                    initialValues={employee}
                    onFinish={onFinish}
                >
                    <div className="form-title-container">
                        {
                            employee.id !== '0' &&
                            <h3>Add new employee</h3>
                        }
                        {
                            employee.id === '0' &&
                            <h3>Update existing employee</h3>
                        }

                        <div className="action-btn-container">
                            <Space>
                                <Link to="/employees">Cancel </Link>
                                <Button type="primary" htmlType="submit"> Submit</Button>
                            </Space>
                        </div>
                    </div>
                    <div className="form-container">
                        <Form.Item hidden={true} label="" name="id"> <Input /></Form.Item>

                        <Row gutter={20}>
                            <Col span={13}>
                                <CommonInput label="Name" name="name" required={true} regEx={/^.{6,10}$/}
                                    regExMessage="Name should be in between 6 to 10 character" />

                                <CommonInput label="Email address" name="emailAddress" required={true}
                                    regEx={/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/}
                                    regExMessage="Invalid email address" />

                                <CommonInput label="Phone number" name="phoneNumber" required={true}
                                    regEx={/(8|9)\d{7,7}$/}
                                    regExMessage="Invalid phone number, should starts with 8 or 9, and have 8 digits" />

                            </Col>

                            <Col span={11}>
                                <Form.Item label="Gender" name="gender">
                                    <Radio.Group>
                                        <Radio key={'male'} value={1}> Male </Radio>
                                        <Radio key={'female'} value={2}> Female </Radio>
                                    </Radio.Group>
                                </Form.Item>

                                <Form.Item name="cafeId" label="Assigned cafe" rules={[{ required: true }]}>
                                    <Select className="w-100" allowClear>
                                        {
                                            cafes && cafes.map((cafe) => {
                                                return (<Option key={cafe.id} value={cafe.id}>{cafe.name}</Option>);
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>

                        </Row>

                    </div>
                </Form>
            }
        </>
    );
}

export default UpdateEmployee;