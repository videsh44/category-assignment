import { Button, Input, message } from "antd";
import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { createTeam } from "../actions";

const { TextArea } = Input;

const CreateCategory = ({ dispatch, setAddNewCategoryModalShow }) => {
  const teamData = useSelector((state) => state.team);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isIconFileUplaoded, setIsIconFileUplaoded] = useState(false);
  const [fileIconSrc, setFileIconSrc] = useState("");

  const onNameChange = (event) => {
    if (
      event.target.value === "" ||
      event.target.value === "" ||
      event.target.value === undefined
    ) {
      setName(null);
    } else {
      setName(event.target.value);
    }
  };

  const onDescriptionChange = (event) => {
    if (
      event.target.value === "" ||
      event.target.value === "" ||
      event.target.value === undefined
    ) {
      setDescription(null);
    } else {
      setDescription(event.target.value);
    }
  };

  const filechangeIconHandler = (event) => {
    var readerIcon = new FileReader();
    var url = readerIcon.readAsDataURL(event.target.files[0]);
    readerIcon.onloadend = (e) => {
      setIsIconFileUplaoded(true);
      setFileIconSrc(readerIcon.result);
      // console.log(readerIcon.result);
    };
  };

  const reuploadIconMedia = () => {
    setIsIconFileUplaoded(false);
    setFileIconSrc("");
  };

  const createNew = () => {
    if (name === "" || name === " " || name === undefined || name === null) {
      setName(null);
      message.warning("Please Enter Name");
      return;
    }
    if (
      description === "" ||
      description === " " ||
      description === undefined ||
      description === null
    ) {
      setDescription(null);
      message.warning("Please Enter description");
      return;
    }

    if (
      fileIconSrc === "" ||
      fileIconSrc === " " ||
      fileIconSrc === undefined ||
      fileIconSrc === null
    ) {
      setDescription(null);
      message.warning("Please Upload Icon");
      return;
    }

    for (let i = 0; i < teamData.length; i++) {
      if (teamData[i].text === name) {
        message.warning("Category with this Name Already exists");
        return;
      }
    }

    dispatch(createTeam(name, description, fileIconSrc));
    message.success("Category Added Succesfully");
    setAddNewCategoryModalShow(false);
    //setLoadAgain(!loadAgain);
  };

  return (
    <div>
      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Category Name
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="text"
              placeholder="Category Name"
              style={
                name === null
                  ? {
                      width: "100%",
                      border: "0.5px solid red",
                    }
                  : {
                      width: "100%",
                    }
              }
              onChange={onNameChange}
            />
          </div>
          {name === null ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Description
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <TextArea
              placeholder="Category Description"
              style={
                description === null
                  ? {
                      width: "100%",
                      border: "0.5px solid red",
                    }
                  : {
                      width: "100%",
                    }
              }
              onChange={onDescriptionChange}
              rows={4}
            />
          </div>
          {description === null ? (
            <div style={{ color: "red", marginTop: "5px" }}>* Required</div>
          ) : null}
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Icon Upload
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          {isIconFileUplaoded === false ? (
            <label>
              <Input
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                onChange={filechangeIconHandler}
              />
              <span
                style={{
                  border: "1px solid #1890ff",
                  background: "#fff",
                  color: "#1890ff",
                  fontWeight: 400,
                  cursor: "pointer",
                  fontSize: "14px",
                  padding: "6.5px 15px",
                  borderRadius: "4px",
                  lineHeight: "1.499",
                }}
              >
                Upload
              </span>
            </label>
          ) : (
            <div style={{ maxWidth: "100%" }}>
              <div style={{ marginBottom: "20px", textAlign: "right" }}>
                <Button type="danger" onClick={() => reuploadIconMedia()}>
                  Change Media
                </Button>
              </div>
              <div>
                <img src={fileIconSrc} alt="icon" style={{ maxWidth: "60%" }} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ margin: "60px 0px 30px 0px", textAlign: "center" }}>
        <Button type="primary" onClick={() => createNew()}>
          Add New
        </Button>
      </div>
    </div>
  );
};

export default connect()(CreateCategory);
