import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { connect } from "react-redux";
import { addTeamMembers } from "../actions";

const { TextArea } = Input;

const AddMember = ({
  dispatch,
  selectedData,
  setCreateNewModalShow,
  setLoadAgain,
  loadAgain,
}) => {
  const id = selectedData.id;
  const text = selectedData.text;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [phone, setPhone] = useState("");

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

  const onEmailChange = (event) => {
    if (
      event.target.value === "" ||
      event.target.value === "" ||
      event.target.value === undefined ||
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        event.target.value
      )
    ) {
      setEmail(null);
    } else {
      setEmail(event.target.value);
    }
  };

  const onUidChange = (event) => {
    if (
      event.target.value === "" ||
      event.target.value === "" ||
      event.target.value === undefined
    ) {
      setUid(null);
    } else {
      setUid(event.target.value);
    }
  };

  const onPhoneChange = (event) => {
    let phoneno = /^\d{10}$/;
    if (!event.target.value.match(phoneno)) {
      setPhone(null);
    } else {
      setPhone(event.target.value);
    }
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const createNew = () => {
    if (name === "" || name === " " || name === undefined || name === null) {
      setName(null);
      message.warning("Please Enter Name");
      return;
    }
    if (
      email === "" ||
      email === " " ||
      email === undefined ||
      email === null
    ) {
      setEmail(null);
      message.warning("Please Enter Email");
      return;
    }

    if (uid === "" || uid === " " || uid === undefined || uid === null) {
      setUid(null);
      message.warning("Please Enter Uid");
      return;
    }

    if (phone === null) {
      message.warning("Please Enter Valid Phone or Leave it Blank");
    }

    dispatch(addTeamMembers(id, text, name, description, uid, email, phone));
    message.success("Form Added Succesfully");
    setCreateNewModalShow(false);
    setLoadAgain(!loadAgain);
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
          Name
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="text"
              placeholder="Name"
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
          Email
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="text"
              placeholder="Email"
              style={
                email === null
                  ? {
                      width: "100%",
                      border: "0.5px solid red",
                    }
                  : {
                      width: "100%",
                    }
              }
              onChange={onEmailChange}
            />
          </div>
          {email === null ? (
            <div style={{ color: "red", marginTop: "5px" }}>
              * Required (Enter valid Email)
            </div>
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
          Uid
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="text"
              placeholder="Uid"
              style={
                uid === null
                  ? {
                      width: "100%",
                      border: "0.5px solid red",
                    }
                  : {
                      width: "100%",
                    }
              }
              onChange={onUidChange}
            />
          </div>
          {uid === null ? (
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
          Phone
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="text"
              placeholder="Phone"
              style={
                phone === null
                  ? {
                      width: "100%",
                      border: "0.5px solid red",
                    }
                  : {
                      width: "100%",
                    }
              }
              onChange={onPhoneChange}
            />
          </div>
          {phone === null ? (
            <div style={{ color: "red", marginTop: "5px" }}>
              * Please Enter Valid Phone Number
            </div>
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
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <TextArea
              placeholder="Member Description"
              style={{ width: "100%" }}
              onChange={onDescriptionChange}
              rows={4}
            />
          </div>
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

export default connect()(AddMember);
