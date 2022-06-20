import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button, Space, notification } from 'antd';
import { AgGridReact } from 'ag-grid-react';

import { getEmployees, deleteEmployee as deleteEmployeeAction } from '../../redux/actions/employees.action';
import TableActionColumn from '../Shared/TableActionColumn';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './Employees.css'


const Employees = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const employees = useSelector(state => state.employeesState.employees);
    const [cafeId, setCafeId] = useState(null);

    useEffect(() => {
        if (params.cafeId && params.cafeId !== '0') {
            setCafeId(params.cafeId);
            dispatch(getEmployees(params.cafeId));
        }
        else {
            dispatch(getEmployees());
        }
    }, [dispatch, params.cafeId]);

    const renderRowActionsColumn = (e) => {
        return (
            <TableActionColumn
                itemId={e.data.id}
                onEditClick={() => { navigate(`/update-employee/${e.data.employeeId}`) }}
                onDeleteClick={(itemId) => deleteEmployee(itemId)}
            />
        )
    }

    const [columnDefs] = useState([
        { field: 'employeeId' },
        { field: 'name' },
        { field: 'emailAddress' },
        { field: 'phoneNumber' },
        { field: 'daysWorked' },
        { field: 'cafeName' },
        { field: '', cellRenderer: (e) => renderRowActionsColumn(e) }
    ]);

    const addNewEmployeeClicked = () => {
        navigate('/update-employee/0')
    }

    const deleteEmployee = (itemId) => {
        dispatch(deleteEmployeeAction(itemId));
        notification['success']({
            message: 'Item deleted successfully',
        });
    }

    return (
        <>
            <div className="employee-header">
                {
                    cafeId && cafeId !== '0' &&
                    <h3>Employees of cafe</h3>
                }
                <div className="add-new-employee-btn-container">
                    <Space>
                        {cafeId && cafeId !== '0' && <Link to="/"> Back to cafes </Link>}
                        <Button type="primary" onClick={addNewEmployeeClicked}>
                            Add New Employee
                        </Button>
                    </Space>

                </div>
            </div>
            <div className="ag-theme-alpine employees-container">
                <AgGridReact
                    rowData={employees}
                    columnDefs={columnDefs}
                    animateRows={true}
                />
            </div>
        </>
    );
}

export default Employees;