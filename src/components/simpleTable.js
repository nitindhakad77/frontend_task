import { React } from "react";
import {Table} from "antd"
import { Button } from "antd";
import 'antd/dist/antd.css';

const SimpleTable = ({ dataSource,editUser, deleteUser}) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span className="edit">
          <Button type="primary" onClick={() => editUser(record)}>
            Edit
          </Button>
          <Button type="primary" danger onClick={() => deleteUser(record.id)} style={{ marginLeft: 8 }}>
            Delete
          </Button>
        </span>
      ),
    },  
    
  ];
  return (
    <div className="table-container">
      {dataSource.length ? (
        <Table dataSource={dataSource} columns={columns} rowKey="id" />
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
