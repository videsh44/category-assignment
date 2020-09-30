import { Button, message, Select } from "antd";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { changeCategoryAction, deleteTeamMember } from "../actions";

const { Option } = Select;

const ChangeCategory = (props) => {
  const teamData = useSelector((state) => state.team);

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setCategoryOptions(teamData);
    return () => {};
  }, []);

  const renderOptions = () => {
    return categoryOptions.map((cat) => (
      <Option key={cat.id} value={cat.id} disabled={cat.id === props.globalId}>
        {cat.text}
      </Option>
    ));
  };

  const onCategoryChange = (val) => {
    setSelectedCategory(val);
  };

  const createNew = () => {
    if (
      selectedCategory === "" ||
      selectedCategory === " " ||
      selectedCategory === undefined ||
      selectedCategory === null
    ) {
      message.warning("Please Select Category");
      return;
    }

    props.dispatch(
      changeCategoryAction(selectedCategory, props.selectedDetailsForCategory)
    );
    props.dispatch(
      deleteTeamMember(props.globalId, props.selectedDetailsForCategory.user_id)
    );
    message.success("Category Changed Succesfully");
    props.setShowCategoryModal(false);
    props.setReLoader(!props.reLoader);
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
          Category
          <span style={{ color: "red", paddingLeft: "4px" }}>*</span>
        </div>
        <div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
          <Select
            placeholder="Select Category"
            //  defaultValue="lucy"
            style={{ width: "100%" }}
            onChange={onCategoryChange}
          >
            {renderOptions()}
          </Select>
        </div>
      </div>
      <div style={{ margin: "60px 0px 30px 0px", textAlign: "center" }}>
        <Button type="primary" onClick={() => createNew()}>
          Change
        </Button>
      </div>
    </div>
  );
};

export default connect()(ChangeCategory);
