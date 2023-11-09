import React, { useState } from "react";
import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import ProjectCard from "./components/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { addIssue } from "./redux/issueReducer";


const App = () => {
  const issueList = useSelector((state: any) => state.issue.projectIssues);
  const dispatch = useDispatch();
  console.log('state', issueList);


  const [textInput, setTextInput] = useState('');
  const handleTextInputChange = (e: any) => {
    setTextInput(e.target.value);
  };

  
    
  const handleSubmitClick = () => {
    dispatch(addIssue(textInput));
  }


  return (
    <div className="home_page">
      <Box sx={{ ml: '5rem', mr: '5rem' }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Project ke Issue parr nazar
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Stack spacing={2}>
            <Typography variant="h5">
            Koi nayaa issue ho to add karoo
            </Typography>
            <TextField
              id="outlined-basic"
              label="Naam"
              variant="outlined"
              onChange={handleTextInputChange}
              value={textInput}
            />
            <Button variant="contained" onClick={handleSubmitClick}>kardo</Button>
          </Stack>
        </Box>
        <Box sx={{ ml: '1rem', mt: '3rem' }}>
          <Typography variant="h5" >
            Jinn Masloon par abhi  baat chall rahi haai
          </Typography>
          {
            issueList.map((issue: any) => <ProjectCard key={issue} issueTitle={issue} />)
          }
      
        </Box>
      </Box>
    </div>
  )
}
export default App;