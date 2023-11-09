 
  import { configureStore } from "@reduxjs/toolkit";
  import IssueReducer from "./issueReducer";
  
  export const store = configureStore({
      reducer: {
          issue: IssueReducer
      }
  });

  

   

  