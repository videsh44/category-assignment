const initialState = [];

/**
    id: 1,
    text: "Static Category",
    members: [
      {
        user_id: 3,
        name: "test1",
        discription: "Some Discription"
      }
    ]
     */

const team = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CATEGORY":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          cat_description: action.cat_description,
          icon: action.icon,
          members: [],
        },
      ];
    case "ADD_CATEGORY_FORM":
      return state.map((team) =>
        team.id === action.id
          ? {
              ...team,
              members: [
                ...team.members,
                {
                  user_id: action.user_id,
                  name: action.name,
                  discription: action.discription,
                  uid: action.Uid,
                  email: action.email,
                  phone: action.phone,
                  fileIconSrc: action.fileIconSrc,
                  dateReceived: action.dateReceived,
                  address: action.address,
                  jobStatus: action.jobStatus,
                },
              ],
            }
          : team
      );
    case "CHANGE_CATEGORY":
      return state.map((team) =>
        team.id === action.id
          ? {
              ...team,
              members: [...team.members, action.data],
            }
          : team
      );
    case "UPDATE_CATEGORY_FORM":
      return state.map((team) =>
        team.id === action.id
          ? {
              ...team,

              members: team.members.map((mem) =>
                mem.user_id === action.user_id
                  ? {
                      ...mem,

                      user_id: action.user_id,
                      name: action.name,
                      discription: action.discription,
                      uid: action.Uid,
                      email: action.email,
                      phone: action.phone,
                      fileIconSrc: action.fileIconSrc,
                      dateReceived: action.dateReceived,
                      address: action.address,
                      jobStatus: action.jobStatus,
                    }
                  : mem
              ),
            }
          : team
      );
    case "DELETE_FORM":
      return state.map((team) =>
        team.id === action.id
          ? {
              ...team,
              members: team.members.filter(
                (mem) => mem.user_id !== action.user_id
              ),
            }
          : team
      );
    default:
      return state;
  }
};

export default team;
