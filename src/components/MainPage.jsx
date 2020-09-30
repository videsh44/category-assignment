import React, { useState } from "react";
import { connect } from "react-redux";
import { Menu, Layout, message, Button, Modal } from "antd";
import { createTeam } from "../actions";
import { useSelector } from "react-redux";
import { FolderOpenOutlined, PlusCircleOutlined } from "@ant-design/icons";
import CategoryDetails from "./CategoryDetails";
import AddMember from "./AddMember";
import CreateCategory from "./CreateCategory";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const AddTeam = ({ dispatch }) => {
  const teamData = useSelector((state) => state.team);

  const [selectedData, setSelectedData] = useState([]);
  const [selectedTeamName, setSelectedTeamName] = useState("");
  const [createNewModalShow, setCreateNewModalShow] = useState(false);
  const [loadAgain, setLoadAgain] = useState(false);

  const [addNewCategoryModalShow, setAddNewCategoryModalShow] = useState(false);

  const renderTeams = (team) => {
    return team.map((item) => (
      <Menu.Item onClick={() => onTeamClick(item)} key={item.id}>
        <span>
          <img width="20px" src={item.icon} />
        </span>{" "}
        {item.text}
      </Menu.Item>
    ));
  };

  const onTeamClick = (data) => {
    // console.log("data", data);
    setSelectedTeamName(data.text);
    setSelectedData(data);
  };

  const closeCreateNewModal = () => {
    setCreateNewModalShow(false);
  };

  const createNewMember = () => {
    setCreateNewModalShow(true);
  };

  const onAddCategoryClick = () => {
    setAddNewCategoryModalShow(true);
  };

  return (
    <div
      style={
        {
          // height: "50vh"
        }
      }
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="header">
          <div style={{ display: "flex" }}>
            <div style={{ width: "70%" }}>
              <span
                style={{
                  color: "#fff",
                  background: "silver",
                  padding: "0px 20px",
                  borderRadius: "15px",
                  fontSize: "25px",
                }}
              >
                {" "}
                VIDESH
              </span>
            </div>
            <div style={{ width: "30%", textAlign: "right" }}>
              <Button type="primary" onClick={onAddCategoryClick}>
                <PlusCircleOutlined /> Add Category
              </Button>
            </div>
          </div>
        </Header>
        <Layout>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}
            width={300}
            style={{ background: "#fff" }}
          >
            <Menu
              mode="inline"
              //defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <FolderOpenOutlined />
                    Categories
                  </span>
                }
              >
                {renderTeams(teamData)}
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <div
              style={{ fontSize: "19px", fontWeight: 700, padding: "5px 6px" }}
            >
              {selectedTeamName}
            </div>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {selectedTeamName === "" ? (
                "Please Select Category To See Its Content"
              ) : (
                <div>
                  <div style={{ marginBottom: "30px", textAlign: "right" }}>
                    <Button onClick={() => createNewMember()} type="primary">
                      <PlusCircleOutlined /> Add New Form
                    </Button>
                  </div>

                  <CategoryDetails
                    loadAgain={loadAgain}
                    selectedData={selectedData}
                  />
                </div>
              )}
            </Content>
          </Layout>
        </Layout>
      </Layout>

      {createNewModalShow === true ? (
        <Modal
          style={{ minWidth: "600px" }}
          title="Add New Member"
          closable={true}
          footer={null}
          onCancel={closeCreateNewModal}
          visible={createNewModalShow}
          destroyOnClose={true}
        >
          <AddMember
            selectedData={selectedData}
            setCreateNewModalShow={setCreateNewModalShow}
            setLoadAgain={setLoadAgain}
            loadAgain={loadAgain}
          />
        </Modal>
      ) : null}

      {addNewCategoryModalShow === true ? (
        <Modal
          style={{ minWidth: "600px" }}
          title="Add New Category"
          closable={true}
          footer={null}
          onCancel={() => setAddNewCategoryModalShow(false)}
          visible={addNewCategoryModalShow}
          destroyOnClose={true}
        >
          <CreateCategory
            setAddNewCategoryModalShow={setAddNewCategoryModalShow}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default connect()(AddTeam);
