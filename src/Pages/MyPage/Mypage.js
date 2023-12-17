import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Logo from '../../Logo.png';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CustomAppBar from '../Bar/CustomAppbar';

export default function Mypage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <CustomAppBar />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, backgroundColor: "#FFFDFD" }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '130px' }}>
            
            <Avatar
              alt="프로필 이미지"
              src={Logo}
              sx={{ width: 120, height: 120, zIndex: 1, mt: 10 }}
            />
          </div>

          <React.Fragment>
            <Grid container spacing={3} alignItems="center" marginTop={1}>
              <Grid item xs={12} sm={4} align="center" sx={{ fontWeight: "bold", fontSize: 22, mt: 8 }}>
                블로그 이름
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  hiddenLabel
                  id="outlined-basic" variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ mt: 8 }}
                />
              </Grid>
              <Grid item xs={12} sm={4} sx={{mt : 4}}align="center">
                블로그 소개글
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  hiddenLabel
                  id="outlined-basic" variant="outlined"
                  size="small"
                  fullWidth
                  sx={{mt: 4}}
                />
              </Grid>
            </Grid>
          </React.Fragment>
          <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
              <Button
                variant="contained"
                to="/" // 홈 페이지로 이동하는 링크
                sx={{
                  padding: '0.3rem 3rem',
                  backgroundColor: '#D4AB39',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#D4AB39',
                  },
                }}
              >
                수정완료
              </Button>
            </Box>
          </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
