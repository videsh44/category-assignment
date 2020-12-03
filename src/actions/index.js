import { v4 } from "node-uuid";

export const createTeam = (text, cat_description, icon) => ({
  type: "CREATE_CATEGORY",
  id: v4(),
  text,
  cat_description,
  icon,
});

export const addTeamMembers = (
  id,
  text,
  name,
  discription,
  Uid,
  email,
  phone,
  fileIconSrc,
  dateReceived,
  address,
  jobStatus
) => {
  return {
    type: "ADD_CATEGORY_FORM",
    id: id,
    text: text,
    user_id: v4(),
    name,
    discription,
    Uid,
    email,
    phone,
    fileIconSrc,
    dateReceived,
    address,
    jobStatus,
  };
};

export const updateTeamMembers = (
  id,
  user_id,
  name,
  discription,
  Uid,
  email,
  phone,
  fileIconSrc,
  dateReceived,
  address,
  jobStatus
) => {
  return {
    type: "UPDATE_CATEGORY_FORM",
    id: id,
    user_id: user_id,
    name,
    discription,
    Uid,
    email,
    phone,
    fileIconSrc,
    dateReceived,
    address,
    jobStatus,
  };
};

export const changeCategoryAction = (id, data) => {
  return {
    type: "CHANGE_CATEGORY",
    id: id,
    data: data,
  };
};

export const deleteTeamMember = (id, user_id) => {
  return {
    type: "DELETE_FORM",
    id: id,
    user_id: user_id,
  };
};
