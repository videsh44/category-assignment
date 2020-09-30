import React, { useState, useEffect } from "react";
import { Table, Input, Popconfirm, Divider, Modal, Button } from "antd";
import { useSelector } from "react-redux";
import { deleteTeamMember } from "../actions";
import { connect } from "react-redux";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import UpdateDetails from "./UpdateDetails";
import ChangeCategory from "./ChangeCategory";

const TeamMembers = (props) => {
  //console.log("props", props.selectedData.members);
  const teamData = useSelector((state) => state.team);

  const [data, setData] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reLoader, setReLoader] = useState(false);
  const [SearchfilterString, setSearchfilterString] = useState("");
  const [selectedDataForUpdate, setSelectedDataForUpdate] = useState([]);
  const [createNewModalShow, setCreateNewModalShow] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedDetailsForCategory, setSelectedDetailsForCategory] = useState(
    []
  );

  useEffect(() => {
    //console.log("TeamMember", teamData);
    setLoading(true);
    let tempList = [];
    for (let i = 0; i < teamData.length; i++) {
      if (teamData[i].id === props.selectedData.id) {
        for (let j = 0; j < teamData[i].members.length; j++) {
          tempList.push(teamData[i].members[j]);
        }
      }
    }
    //  console.log("tempList", tempList);
    setData(tempList);
    setGlobalData(tempList);
    setLoading(false);

    return () => {
      setData([]);
    };
  }, [props.selectedData.id, props.loadAgain, reLoader]);

  const SearchValFromTable = (filterString) => {
    setSearchfilterString(filterString);
    if (filterString) {
      const list = globalData.filter((item) =>
        item.name.toLowerCase().includes(filterString.toLowerCase())
      );
      setData(list);
    } else {
      setData(globalData);
    }
  };

  const onEditClick = (data) => {
    setSelectedDataForUpdate(data);
    setCreateNewModalShow(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 120,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
          <span>{record}</span>
        ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
          <span>{record}</span>
        ),
    },
    {
      title: "Discription",
      dataIndex: "discription",
      key: "discription",
      width: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
          <span>{record}</span>
        ),
    },
    {
      title: "Action",
      key: "action",
      width: 300,
      render: (record) => (
        <span>
          <span>
            <EditOutlined
              onClick={() => onEditClick(record)}
              style={{ cursor: "pointer", color: "#22a4ef", fontSize: "20px" }}
            />
          </span>
          <Divider type="vertical" />
          <span>
            <Popconfirm
              title="Are you sure delete this?"
              onConfirm={() => onDeleteMember(record)}
            >
              <span
                // onClick={() => onDeleteMember(record)}
                style={{ color: "red", cursor: "pointer" }}
              >
                <DeleteOutlined style={{ fontSize: "20px" }} />
              </span>
            </Popconfirm>
          </span>
          <Divider type="vertical" />
          <Button
            onClick={() => onChangeCategory(record)}
            style={{ marginTop: "10px" }}
            type="ghost"
          >
            Change Category
          </Button>
        </span>
      ),
    },
  ];

  const onDeleteMember = (data) => {
    // console.log(data);
    props.dispatch(deleteTeamMember(props.selectedData.id, data.user_id));
    setReLoader(!reLoader);
  };

  const onChangeCategory = (data) => {
    setSelectedDetailsForCategory(data);
    setShowCategoryModal(true);
  };

  return (
    <div>
      <div>
        <Input
          placeholder="Search using Name"
          prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          value={SearchfilterString}
          allowClear
          onChange={(e) =>
            SearchValFromTable(e.target.value ? e.target.value : null)
          }
          style={{ width: 350, marginBottom: "30px" }}
        />
      </div>
      <Table
        loading={loading}
        rowKey={(k, i) => i}
        dataSource={data}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />

      {createNewModalShow === true ? (
        <Modal
          style={{ minWidth: "600px" }}
          title="Update"
          closable={true}
          footer={null}
          onCancel={() => setCreateNewModalShow(false)}
          visible={createNewModalShow}
          destroyOnClose={true}
        >
          <UpdateDetails
            reLoader={reLoader}
            setReLoader={setReLoader}
            selectedDataForUpdate={selectedDataForUpdate}
            globalId={props.selectedData.id}
            setCreateNewModalShow={setCreateNewModalShow}
          />
        </Modal>
      ) : null}

      {showCategoryModal === true ? (
        <Modal
          style={{ minWidth: "600px" }}
          title="Change Category"
          closable={true}
          footer={null}
          onCancel={() => setShowCategoryModal(false)}
          visible={showCategoryModal}
          destroyOnClose={true}
        >
          <ChangeCategory
            reLoader={reLoader}
            setReLoader={setReLoader}
            selectedDetailsForCategory={selectedDetailsForCategory}
            globalId={props.selectedData.id}
            setShowCategoryModal={setShowCategoryModal}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default connect()(TeamMembers);
