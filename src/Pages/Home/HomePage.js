import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from '../../Logo.png';
import { Link as RouterLink } from 'react-router-dom';
import { Paper } from '@mui/material';
import BubbleChart from './BubbleChart';
import CustomAppBar from '../Bar/CustomAppbar';

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 가상의 데이터 생성 (임의로 생성한 예시 데이터)
    const generateRandomData = () => {
      const categories = ['생활', '문화생활', '교육', '취미', '사회', '건강', '패션&뷰티', '기타'];
      const generatedData = categories.map(category => ({
        category,
        amount: Math.round(Math.random() * 30) + 1, // 임의의 수로 amount 생성
      }));
      return generatedData;
    };

    // 생성된 가상 데이터를 state에 설정
    setData(generateRandomData());
  }, []);
  
  return (
    <React.Fragment>
      <CssBaseline />
      {/* 상단 AppBar */}
      <CustomAppBar />
      {/* 페이지 내용 */}
      {/* 페이지 내용 */}
      <Container component="main" maxWidth="md" sx={{ mt: 'auto' }}>
        <Box sx={{ mt: 6 }}>
          {/* 페이지 제목 */}
          <Typography component="h1" variant="h4" align="center" sx={{ fontFamily: 'DMSerifDisplay-Regular' }}>
            Generate the Excellence,<br />
            Empower the Knowledge!
          </Typography>
          {/* "Look Around" 버튼 */}
          <Box sx={{ display: 'flex', justifyContent: 'center', m: 4 }}>
            <RouterLink to="/bubble_login">
              <Button
                variant="contained"
                to=""
                sx={{
                  padding: '0.3rem 3rem',
                  backgroundColor: '#D4AB39',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#D4AB39',
                  },
                }}
              >
                Look Around
              </Button>
            </RouterLink>
          </Box>
        </Box>
        {/* 내용 상자 */}
        <Paper >
          {/* 내용 제목 */}
          <BubbleChart data={data} />
        </Paper>
      </Container>
    </React.Fragment>
  );
}
