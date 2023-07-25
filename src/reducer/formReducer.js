const formReducer = (state, action) => {
    if (action.type === "CHANGE_FIRST") {
      return { ...state, firstName: action.payload };
    } else if (action.type === "CHANGE_LAST") {
      return { ...state, lastName: action.payload };
    } else if (action.type === "CHANGE_MAIL") {
      return { ...state, Mail: action.payload }; // Update the "Mail" property, not "lastName"
    } else if (action.type === "CHANGE_PASSWORD") {
      return { ...state, password: action.payload }; // Update the "password" property, not "lastName"
    } else {
      return state;
    }
  };
  
  export default formReducer;
  