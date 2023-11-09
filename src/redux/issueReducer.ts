
import { createSlice, PayloadAction } from "@reduxjs/toolkit"


 export interface IssueInitialState {
     projectIssues: string[]
 }


const initialState: IssueInitialState = {
    projectIssues: ['dikkat: Maslaa 1', 'pangaa: Maslaa 2', 'samasyaa: Maslaa 3']
}

export const issueSlice = createSlice({
    name: 'issue',
    initialState,
    reducers: {
        addIssue: (state, action:PayloadAction<string>) => {
            state.projectIssues = [...state.projectIssues, action.payload]
        }
    }
})

   

export const { addIssue } = issueSlice.actions;
export default issueSlice.reducer;

