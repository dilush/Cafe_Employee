import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, notification } from 'antd';
import { AgGridReact } from 'ag-grid-react';

import { getCafes, deleteCafe as deleteCafeAction } from '../../redux/actions/cafes.action';
import TableActionColumn from '../Shared/TableActionColumn';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './Cafes.css'


const Cafes = () => {
    const cafes = useSelector(state => state.cafesState.cafes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCafes());
    }, [dispatch]);

    const [columnDefs] = useState([
        { field: 'logo', cellRenderer: () => {return <img alt="cafe_logo" src="https://picsum.photos/200/90"/>} },
        { field: 'name' },
        { field: 'description' },
        { field: 'employeeCount', onCellClicked: (e) => employeeClicked(e.data.id) },
        { field: 'location', filter: true },
        { field: '', cellRenderer: (e) => renderRowActionsColumn(e) }
    ]);

    const employeeClicked = (itemId) => {
        navigate(`/employees/${itemId}`);
    }

    const addNewCafeClicked = () => {
        navigate('/update-cafe/0');
    }

    const deleteCafe = (itemId) => {
        dispatch(deleteCafeAction(itemId));
        notification['success']({
            message: 'Item deleted successfully',
        });
    }

    const renderRowActionsColumn = (e) => {
        const clickedItemId = e.data.id;
        return (
            <TableActionColumn
                itemId={clickedItemId}
                onEditClick={() => { navigate(`/update-cafe/${clickedItemId}`) }}
                onDeleteClick={(itemId) => deleteCafe(itemId)}
            />
        )
    }

    return (
        <>
            <div className="add-new-cafe-btn-container">
                <Button className="add-new-cafe-btn" type="primary" onClick={addNewCafeClicked}>
                    Add New Cafe
                </Button>
            </div>
            <div className="ag-theme-alpine cafes-container">
                <AgGridReact
                    rowData={cafes}
                    columnDefs={columnDefs}
                    animateRows={true}
                />
            </div>
        </>
    );

}

export default Cafes;