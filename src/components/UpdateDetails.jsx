import React, { useEffect, useState } from "react";
import { Input, Button, message, Select, DatePicker } from "antd";
import { connect } from "react-redux";
import { updateTeamMembers } from "../actions";

const { TextArea } = Input;
const { Option } = Select;

const UpdateDetails = ({
  dispatch,
  selectedDataForUpdate,
  setCreateNewModalShow,
  setReLoader,
  reLoader,
  globalId,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [dateReceived, setDateReceived] = useState("");
  const [isIconFileUplaoded, setIsIconFileUplaoded] = useState(false);
  const [fileIconSrc, setFileIconSrc] = useState("");
  const [address, setAddress] = useState("");
  const [jobStatus, setJobStatus] = useState("");

  useEffect(() => {
    if (
      selectedDataForUpdate &&
      Object.keys(selectedDataForUpdate).length !== 0
    ) {
      // console.log(selectedDataForUpdate);
      setName(selectedDataForUpdate.name);
      setDescription(selectedDataForUpdate.discription);
      setEmail(selectedDataForUpdate.email);
      setUid(selectedDataForUpdate.uid);
      setPhone(selectedDataForUpdate.phone);
      setDateReceived(selectedDataForUpdate.dateReceived);
      setFileIconSrc(selectedDataForUpdate.fileIconSrc);
      setAddress(selectedDataForUpdate.address);
      setJobStatus(selectedDataForUpdate.jobStatus);
    }
    return () => {};
  }, []);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onUidChange = (event) => {
    setUid(event.target.value);
  };

  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const onDateChange = (date, dateString) => {
    // console.log(dateString);
    setDateReceived(dateString);
  };

  const onAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const createNew = () => {
    let userId = selectedDataForUpdate.user_id;

    if (name === "" || name === " " || name === undefined || name === null) {
      setName(null);
      message.warning("Please Enter Name");
      return;
    }
    if (
      email === "" ||
      email === " " ||
      email === undefined ||
      email === null ||
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
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

    let phoneno = /^\d{10}$/;

    if (phone === "" || phone === undefined || phone === null) {
    } else {
      if (!phone.match(phoneno)) {
        message.warning("Please Enter Valid Phone or Leave it Blank");
        setPhoneError(true);
        return;
      }
    }

    dispatch(
      updateTeamMembers(
        globalId,
        userId,
        name,
        description,
        uid,
        email,
        phone,
        fileIconSrc,
        dateReceived,
        address,
        jobStatus
      )
    );
    message.success("Form Updated Succesfully");
    setCreateNewModalShow(false);
    setReLoader(!reLoader);
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
              value={name}
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
              value={email}
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
              value={uid}
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
              value={phone}
              style={
                phoneError
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
          {phoneError ? (
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
              value={description}
              style={{ width: "100%" }}
              onChange={onDescriptionChange}
              rows={4}
            />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Date Received
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <DatePicker
              //value={dateReceived}
              disabled
              onChange={onDateChange}
            />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Icon
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          {fileIconSrc ? (
            <div style={{ maxWidth: "100%" }}>
              <div>
                <img src={fileIconSrc} alt="icon" style={{ maxWidth: "60%" }} />
              </div>
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
          Address
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Input
              type="text"
              placeholder="Address"
              value={address}
              style={{
                width: "100%",
              }}
              onChange={onAddressChange}
            />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", marginBottom: "25px" }}>
        <div
          style={{
            width: "140px",
            fontWeight: 600,
          }}
        >
          Status
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <div>
            <Select
              placeholder="Select Status"
              value={jobStatus}
              style={{ width: "100%" }}
              onChange={(val) => setJobStatus(val)}
            >
              <Option value="active">Active</Option>
              <Option value="pending">Pending</Option>
              <Option value="expired">Expired</Option>
            </Select>
          </div>
        </div>
      </div>

      <div style={{ margin: "60px 0px 30px 0px", textAlign: "center" }}>
        <Button type="primary" onClick={() => createNew()}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default connect()(UpdateDetails);
