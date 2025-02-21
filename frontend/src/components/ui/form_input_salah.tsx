import React, { useState } from "react";
import { Upload, Table, Button, Input, Space } from "antd";
import {
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { UploadFile } from "antd";

interface MenuItem {
  key: string;
  menu: string;
  image: string;
  url: string;
}

const FormInputCoba: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [menuData] = useState<MenuItem[]>([
    {
      key: "1",
      menu: "Dashboard",
      image: "image1.png",
      url: "https://example.com",
    },
    {
      key: "2",
      menu: "Reports",
      image: "image2.png",
      url: "https://example.com/reports",
    },
  ]);

  const columns = [
    { title: "MENU", dataIndex: "menu", key: "menu" },
    { title: "IMAGE", dataIndex: "image", key: "image" },
    { title: "URL", dataIndex: "url", key: "url" },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Space>
          <Button icon={<EditOutlined />} type="primary">
            EDIT
          </Button>
          <Button icon={<DeleteOutlined />} danger>
            DELETE
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>PPD Enterprise Pelni</h2>
      <h3>Pengaturan Master Menu</h3>

      <label>Nama Menu</label>
      <Input placeholder="Masukkan Nama Menu" style={{ marginBottom: 10 }} />

      <label>Route URL</label>
      <Input
        defaultValue="https://ppd-enterprise.pelni.co.id/"
        style={{ marginBottom: 10 }}
      />

      {/* <label>Upload Image</label> */}
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture"
        fileList={fileList}
        onChange={({ fileList }) => setFileList(fileList)}
      >
        <Button type="primary" icon={<UploadOutlined />}>
          Upload Image
        </Button>
      </Upload>

      <Button type="primary" style={{ marginTop: 10 }}>
        SUBMIT
      </Button>

      <h3 style={{ marginTop: 20 }}>List Menu PPD Enterprise</h3>
      <Table
        dataSource={menuData}
        columns={columns}
        pagination={{ pageSize: 4 }}
      />
    </div>
  );
};

export default FormInputCoba;
