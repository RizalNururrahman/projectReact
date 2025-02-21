import React, { useState } from "react";
import { Upload, Table, Button, Input, Space, message } from "antd";
import {
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";

interface MenuItem {
  key: string;
  menu: string;
  image: string;
  url: string;
}

const FormMastermenu: React.FC = () => {
  const [namaMenu, setNamaMenu] = useState("");
  const [routeUrl, setRouteUrl] = useState(
    "https://ppd-enterprise.pelni.co.id/"
  );
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [menuData, setMenuData] = useState<MenuItem[]>([
    // {
    //   key: "1",
    //   menu: "ikan",
    //   image: "ikan.png",
    //   url: "https://google.com",
    // },
    // {
    //   key: "2",
    //   menu: "kuda",
    //   image: "kuda.png",
    //   url: "https://google.com",
    // },
  ]);

  // Fungsi menangani upload
  // const handleUpload = ({ fileList }: { fileList: UploadFile[] }) => {
  //   setFileList(fileList);
  // };
  const handleUpload = ({ fileList }: { fileList: UploadFile[] }) => {
    const updatedFileList = fileList.map((file) => ({
      ...file,
      preview: file.originFileObj
        ? URL.createObjectURL(file.originFileObj) // Buat preview lokal
        : file.url || "", // Jika `url` ada, gunakan itu
    }));

    setFileList(updatedFileList);
  };

  // Fungsi menangani submit
  // const handleSubmit = () => {
  //   if (!namaMenu || !routeUrl || fileList.length === 0) {
  //     message.error("Harap isi semua bidang dan unggah gambar!");
  //     return;
  //   }

  //   const newMenu: MenuItem = {
  //     key: (menuData.length + 1).toString(),
  //     menu: namaMenu,
  //     image: fileList[0].name,
  //     url: routeUrl,
  //   };

  //   setMenuData([...menuData, newMenu]);
  //   message.success("Menu berhasil ditambahkan!");

  //   // Reset form
  //   setNamaMenu("");
  //   setRouteUrl("https://ppd-enterprise.pelni.co.id/");
  //   setFileList([]);
  // };
  const handleSubmit = () => {
    if (!namaMenu || !routeUrl || fileList.length === 0) {
      message.error("Harap isi semua bidang dan unggah gambar!");
      return;
    }

    const imageUrl = fileList[0].preview ?? fileList[0].url ?? ""; // Pastikan URL gambar tidak undefined

    if (!imageUrl) {
      message.error("Gambar tidak valid, silakan unggah kembali!");
      return;
    }

    const newMenu: MenuItem = {
      key: (menuData.length + 1).toString(),
      menu: namaMenu,
      image: imageUrl, // Simpan URL gambar
      url: routeUrl,
    };

    setMenuData([...menuData, newMenu]);
    message.success("Menu berhasil ditambahkan!");

    // Reset form
    setNamaMenu("");
    setRouteUrl("https://ppd-enterprise.pelni.co.id/");
    setFileList([]);
  };

  // const columns = [
  //   { title: "MENU", dataIndex: "menu", key: "menu" },
  //   {
  //     title: "IMAGE",
  //     dataIndex: "image",
  //     key: "image",
  //     render: (text: string) => (
  //       <img src={text} alt="Menu" style={{ width: 50 }} />
  //     ),
  //   },
  //   { title: "URL", dataIndex: "url", key: "url" },
  //   {
  //     title: "Actions",
  //     key: "actions",
  //     render: () => (
  //       <Space>
  //         <Button icon={<EditOutlined />} type="primary">
  //           EDIT
  //         </Button>
  //         <Button icon={<DeleteOutlined />} danger>
  //           DELETE
  //         </Button>
  //       </Space>
  //     ),
  //   },
  // ];
  const columns = [
    { title: "MENU", dataIndex: "menu", key: "menu" },
    {
      title: "IMAGE",
      dataIndex: "image",
      key: "image",
      render: (text: string) => (
        <img
          src={text}
          alt="Menu"
          style={{
            width: 50,
            height: 50,
            objectFit: "cover",
            borderRadius: 5, // Opsional untuk tampilan lebih rapi
          }}
          onError={(e) =>
            (e.currentTarget.src = "https://via.placeholder.com/50")
          } // Jika error, tampilkan placeholder
        />
      ),
    },
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
      <h3>PPD Enterprise Pelni</h3>
      <h1 className="font-bold">Pengaturan Master Menu</h1>

      <label>Nama Menu</label>
      <Input
        value={namaMenu}
        onChange={(e) => setNamaMenu(e.target.value)}
        placeholder="Masukkan Nama Menu"
        style={{ marginBottom: 10 }}
      />

      <label>Route URL</label>
      <Input
        value={routeUrl}
        onChange={(e) => setRouteUrl(e.target.value)}
        style={{ marginBottom: 10 }}
      />

      <label>Upload Image</label>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture"
        fileList={fileList}
        onChange={handleUpload}
        beforeUpload={() => false}
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>

      <Button type="primary" style={{ marginTop: 10 }} onClick={handleSubmit}>
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

export default FormMastermenu;
