const initialState = {
    users: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DELETE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  
