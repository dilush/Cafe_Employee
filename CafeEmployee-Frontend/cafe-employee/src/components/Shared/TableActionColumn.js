import { Button, Modal, Space } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const TableActionColumn = (props) => {

    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure you want to delete this item?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk:()=>{
                props.onDeleteClick(props.itemId);
            }
        });
    }

    return (
        <>
            <Space>
                <Button type="primary" shape="circle" icon={<EditOutlined />}
                    onClick={props.onEditClick} />
                <Button type="primary" danger shape="circle" icon={<DeleteOutlined />}
                    onClick={showDeleteConfirm} />
            </Space>
        </>
    );
}

export default TableActionColumn;