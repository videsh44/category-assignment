import React, { useState, useEffect } from "react";
import {
  Table,
  Input,
  Popconfirm,
  Divider,
  Modal,
  Button,
  Badge,
  Avatar,
  DatePicker,
} from "antd";
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

const { RangePicker } = DatePicker;

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
      const list = globalData.filter(
        (item) =>
          item.name.toLowerCase().includes(filterString.toLowerCase()) ||
          item.address.toLowerCase().includes(filterString.toLowerCase()) ||
          item.jobStatus.toLowerCase().includes(filterString.toLowerCase()) ||
          item.email.toLowerCase().includes(filterString.toLowerCase()) ||
          item.phone.toLowerCase().includes(filterString.toLowerCase()) ||
          item.discription.toLowerCase().includes(filterString.toLowerCase())
      );
      setData(list);
    } else {
      setData(globalData);
    }
  };

  const onDateFilterChange = (dates, dateStrings) => {
    //console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    //console.log("dateStrings", dateStrings);
    console.log("dates", dates);
    if (dates.length > 1) {
      let startDateArray = dateStrings[0].split("-");
      let endDateArray = dateStrings[1].split("-");

      let startDateTimeStamp = new Date(
        startDateArray[2],
        +startDateArray[0],
        startDateArray[1]
      ).getTime();
      let endDateTimeStamp = new Date(
        endDateArray[2],
        +endDateArray[0],
        endDateArray[1]
      ).getTime();

      const list = globalData.filter((item) => {
        let rowDateArray = item.dateReceived.split("-");
        let rowDateTimeStamp = new Date(
          rowDateArray[2],
          +rowDateArray[0],
          rowDateArray[1]
        ).getTime();
        if (
          startDateTimeStamp <= rowDateTimeStamp &&
          rowDateTimeStamp <= endDateTimeStamp
        ) {
          return item;
        }
      });
      setData(list);
    } else {
      setData(globalData);
    }
  };

  const onEditClick = (data) => {
    setSelectedDataForUpdate(data);
    setCreateNewModalShow(true);
  };

  const renderStatus = (status) => {
    switch (status) {
      case "active":
        return (
          <span>
            <Badge status="success" />
            active
          </span>
        );
      case "pending":
        return (
          <span>
            <Badge color="yellow" />
            pending
          </span>
        );
      case "expired":
        return (
          <span>
            <Badge color="red" />
            expired
          </span>
        );

      default:
        return (
          <span>
            <Badge color="yellow" />
            pending
          </span>
        );
    }
  };

  const expandedRowRender = (data) => {
    const columns = [
      {
        title: "Icon",
        dataIndex: "fileIconSrc",
        key: "fileIconSrc",
        render: (record) =>
          record === "" || record === null || record === undefined ? (
            "-"
          ) : (
            <Avatar src={record} />
          ),
      },
      {
        title: "Date",
        dataIndex: "dateReceived",
        key: "dateReceived",
        render: (record) =>
          record === "" || record === null || record === undefined ? (
            "-"
          ) : (
            <span>{record}</span>
          ),
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        render: (record) =>
          record === "" || record === null || record === undefined ? (
            "-"
          ) : (
            <span>{record}</span>
          ),
      },
      {
        title: "UId",
        dataIndex: "uid",
        key: "uid",
        render: (record) => <span>{record}</span>,
      },
      {
        title: "Status",
        dataIndex: "jobStatus",
        key: "jobStatus",
        render: (record) => <span>{renderStatus(record)}</span>,
      },
    ];

    return (
      <Table
        rowKey={(k, i) => i}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
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
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div>
          <Input
            placeholder="Search "
            prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            value={SearchfilterString}
            allowClear
            onChange={(e) =>
              SearchValFromTable(e.target.value ? e.target.value : null)
            }
            style={{ width: 350, marginBottom: "30px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <RangePicker onChange={onDateFilterChange} />
        </div>
      </div>

      <Table
        loading={loading}
        rowKey={(k, i) => k.user_id}
        dataSource={data}
        columns={columns}
        pagination={{ pageSize: 5 }}
        expandedRowRender={(record) => expandedRowRender([record])}
        expandIconColumnIndex={0}
        scroll={{ x: 1300 }}
        //expandIconAsCell={false}
      />

      {createNewModalShow === true ? (
        <Modal
          style={{ width: "100%" }}
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
          style={{ width: "100%" }}
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
