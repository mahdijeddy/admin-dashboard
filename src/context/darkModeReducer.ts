import { State , Action } from "./darkModeContext";
const DarkModeReducer = (state:State, action:Action) => {
    switch (action.type) {
      case "TOGGLE_DARK_MODE": {
        return {
          darkMode: !state.darkMode,
        };
      }
     
     
      default:
        return state;
    }
  };
  
  export default DarkModeReducer;