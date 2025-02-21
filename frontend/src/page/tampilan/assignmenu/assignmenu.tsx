import React, { useState } from "react";
import { Form, Input, Button, TreeSelect, Table } from "antd";

const { TreeNode } = TreeSelect;

const Assignmenu: React.FC = () => {
  const [form] = Form.useForm();
  const [dataAkses, setDataAkses] = useState<
    { nrp: string; nama: string; menu: string[] }[]
  >([]);

  const handleSubmit = (values: { pegawai: string; menu: string[] }) => {
    if (!values.pegawai || values.menu.length === 0) return;
    setDataAkses([
      ...dataAkses,
      {
        nrp: values.pegawai.split(" ")[0],
        nama: values.pegawai,
        menu: values.menu,
      },
    ]);
    form.resetFields();
  };

  const columns = [
    { title: "NRP", dataIndex: "nrp", key: "nrp" },
    { title: "NAMA", dataIndex: "nama", key: "nama" },
    {
      title: "Menu",
      dataIndex: "menu",
      key: "menu",
      render: (menus: string[]) => menus.join(", "),
    },
    {
      title: "Aksi",
      key: "action",
      render: () => (
        <>
          <Button size="small" type="primary" style={{ marginRight: 8 }}>
            SHOW
          </Button>
          <Button size="small" type="default">
            EDIT
          </Button>
        </>
      ),
    },
  ];

  return (
    // <div className="p-6 ml-65 mt-[-195px]">
    <div>
      {/* Judul */}
      <h1 className="text-3xl font-bold">Assign Menu</h1>
      <h2 className="text-xl">PPD Enterprise Pelni</h2>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item
            label="NRP / Nama Pegawai"
            name="pegawai"
            rules={[{ required: true, message: "Masukkan NRP/Nama Pegawai!" }]}
          >
            <Input placeholder="Masukkan NRP atau Nama Pegawai" />
          </Form.Item>

          <Form.Item
            label="Menu"
            name="menu"
            rules={[{ required: true, message: "Pilih setidaknya satu menu!" }]}
          >
            <TreeSelect
              style={{ width: "100%" }}
              placeholder="Pilih Menu"
              allowClear
              multiple
              treeCheckable
              showCheckedStrategy={TreeSelect.SHOW_PARENT}
            >
              <TreeNode value="Node1" title="Node1">
                <TreeNode value="Child Node1" title="Child Node1" />
                <TreeNode value="Child Node2" title="Child Node2" />
              </TreeNode>
              <TreeNode value="Node2" title="Node2">
                <TreeNode value="Child Node3" title="Child Node3" />
                <TreeNode value="Child Node4" title="Child Node4" />
              </TreeNode>
            </TreeSelect>
          </Form.Item>

          {/* Tombol Submit Geser ke Kanan */}
          <Form.Item className="pl-[380vh]">
            <Button
              type="primary"
              htmlType="submit"
              className="text-sm px-4 py-1"
            >
              SUBMIT
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Data Akses User */}
      <h2 className="text-xl font-bold mt-6">Data Akses User</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mt-2">
        <Table
          columns={columns}
          dataSource={dataAkses}
          pagination={false}
          rowKey="nrp"
        />
      </div>
    </div>
  );
};

export default Assignmenu;
