import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import instance from '../../shared/Request';
import CustomAppBar from '../Bar/CustomAppbar';

function AuthLinks() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3, mb: 2 }}>
      <Link component={RouterLink} to="/login" color="inherit" style={{ marginRight: '10px' }}>
        이미 회원이신가요?
      </Link>
    </Typography>
  );
}

function signup(name, email, password, gender, birthday, interests) {
  const requestBody = {
    email: email,
    account: name, // Assuming 'account' corresponds to 'name'
    password: password,
    gender: gender === 'Men' ? 'MAN' : 'WOMAN', // Adjust the mapping based on your radio group values
    birthday: birthday,
    interests: interests,
    roles: [
      {
        name: 'USER',
      },
    ],
  };

  return instance.post('/api/users/join', requestBody)
    .then(function (response) {
      if (response.data.code === 200 && response.data.isSuccess) {
        return response.data;
      } else {
        console.error('회원가입 오류:', response.data.message);
        throw new Error(response.data.message);
      }
    })
    .catch(function (error) {
      console.error('회원가입 오류:', error);
      throw error;
    });
}


export default function SignUpPage() {

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [selectedBirthday, setSelectedBirthday] = useState(null);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInterestChange = (event) => {
    if (event.target.checked) {
      setSelectedInterests([...selectedInterests, event.target.value]);
    } else {
      setSelectedInterests(selectedInterests.filter(interest => interest !== event.target.value));
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const name = data.get('name');
    const email = data.get('email');
    const password = data.get('password');
    const gender = data.get('gender');
    const birthday = selectedBirthday ? selectedBirthday.toISOString() : ''; // ISO 8601 형식으로 변환
    const interests = selectedInterests;
  
    try {
      await signup(name, email, password, gender, birthday, interests);
      alert('회원가입이 성공했습니다!');
      window.location.href = '/';
    } catch (error) {
      alert('회원가입에 실패했습니다.');
    }
  }
  
  return (
    <React.Fragment>
      <CssBaseline />
      <CustomAppBar />
      <Typography component="h1" variant="h4" align="center" marginTop={6} style={{ fontWeight: 'bold' }}>
        Join :)
      </Typography>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, backgroundColor: "#FFFDFD" }}>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={3} alignItems="center" marginTop={1}>
              <Grid item xs={12} sm={4} align="center">
                이름
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  hiddenLabel
                  id="name"
                  name="name"
                  type='name'
                  variant="filled"
                  size="small"
                  autoComplete="given-name"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4} align="center">
                이메일
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  hiddenLabel
                  required
                  id="email"
                  name="email"
                  autoComplete="email"
                  variant="filled"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4} align="center">
                비밀번호
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  hiddenLabel
                  required
                  id="password"
                  type='password'
                  variant="filled"
                  size="small"
                  name="password"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4} align="center">
                비밀번호 확인
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  hiddenLabel
                  required
                  id="passwordcheck"
                  type='password'
                  variant="filled"
                  size="small"
                  name="passwordcheck"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4} align="center">
                성별
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl>
                  <RadioGroup row >
                    <FormControlLabel value="Men" control={<Radio />} label="남" sx={{ marginRight: '35px', marginLeft: '15px' }} />
                    <FormControlLabel value="Women" control={<Radio />} label="여" sx={{ marginLeft: '35px' }} />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4} align="center">
                생년월일
              </Grid>
              <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          required
                          id="birthday"
                          name="birthday"
                          label="생년월일"
                          value={selectedBirthday}
                          onChange={(date) => setSelectedBirthday(date)}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
              <Grid item xs={12} sm={4} align="center">
                관심사
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormGroup row>
                  <FormControlLabel value="A" control={<Checkbox onChange={handleInterestChange} />} label="문화생활" />
                  <FormControlLabel value="B" control={<Checkbox onChange={handleInterestChange} />} label="취미" />
                  <FormControlLabel value="C" control={<Checkbox onChange={handleInterestChange} />} label="교육" />
                  <FormControlLabel value="D" control={<Checkbox onChange={handleInterestChange} />} label="사회" />
                  <FormControlLabel value="E" control={<Checkbox onChange={handleInterestChange} />} label="건강" />
                  <FormControlLabel value="F" control={<Checkbox onChange={handleInterestChange} />} label="생활" />
                  <FormControlLabel value="G" control={<Checkbox onChange={handleInterestChange} />} label="패션/뷰티" />
                  <FormControlLabel value="X" control={<Checkbox onChange={handleInterestChange} />} label="선택안함" />
                </FormGroup>
              </Grid>
            </Grid>
            <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    padding: '0.3rem 3rem',
                    backgroundColor: '#D4AB39',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#D4AB39',
                    },
                  }}
                >
              회원가입
            </Button>
            <AuthLinks />
          </Box>
          
        </Paper>
      </Container>
    </React.Fragment>
  );
}
