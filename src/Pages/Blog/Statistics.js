import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import CustomAppBar from '../Bar/CustomAppbar';
import BarChart from './Barchart';
import Grid from '@mui/material/Grid';
import ProblemComments from './ProblemComments';

export default function Statistics() {
  return (
    <React.Fragment>
      <CssBaseline />
      <CustomAppBar />
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid item xs={12} align="center" sx={{ fontWeight: "bold", fontSize: 22, mt: 8 }}>
              댓글 반응 분석
            </Grid>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2 }, backgroundColor: "#FFFDFD" }}>
              <BarChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item xs={12} align="center" sx={{ fontWeight: "bold", fontSize: 22, mt: 8 }}>
              문제 댓글 정보
            </Grid>
            <Paper variant="outlined" sx={{ minHeight: 340, my: { xs: 3, md: 6 }, p: { xs: 2 }, backgroundColor: "#FFFDFD" }}>
              <ProblemComments comments={ProblemComments} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
