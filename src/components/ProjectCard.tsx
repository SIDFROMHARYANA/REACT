import React from "react";
import { Typography, Grid, Stack, Paper} from "@mui/material";
interface IProps {
    issueTitle: string
}
const ProjectCard : React.FC<IProps> = ({ issueTitle }) => {
    return(
        <div className="project_card">
            <Paper elevation={1} sx={{p: '10px', m:'1rem'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={2}>
                            <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                               Issue ka naam: {issueTitle}
                            </Typography>
                            <Stack direction='row' spacing={2}>
                                <Typography variant="body1">
                                    Kab kholla thha: kal
                                </Typography>
                                <Typography variant="body1">
                                    Kitna zaroori haai: medium
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default ProjectCard;