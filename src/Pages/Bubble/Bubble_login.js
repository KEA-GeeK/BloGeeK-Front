import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from '../../Logo.png';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import PostListLogin from './PostList_login';
// import axios from 'axios'; // Import Axios
import CustomAppBar from '../Bar/CustomAppbar';

export default function BubbleLogin() {
  const { category } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
 
    // 예시: 가상의 데이터(dummyData)를 사용하는 부분
    const fetchData = async () => {
      // 실제 데이터 로딩 로직을 이곳에 추가
      // 예시로 가상의 데이터(dummyData)를 사용합니다.
      const dummyData = [
        { id: 1, title: '테스트 포스트 1', content: '테스트 내용 1', category: '기타', like: 8, userid: "epnjh0807" },
        { id: 2, title: '테스트 포스트 2', content: '테스트 내용 2', category: '패션&뷰티', like: 7, userid: "test1"  },
        { id: 3, title: '테스트 포스트 3', content: '테스트 내용 1', category: '기타', like: 6, userid: "test2"  },
        { id: 4, title: '테스트 포스트 4', content: '테스트 내용 2', category: '취미', like: 5, userid: "test3"  },
        { id: 5, title: '테스트 포스트 5', content: '테스트 내용 1', category: '취미', like: 4, userid: "test4"  },
        { id: 6, title: '테스트 포스트 6', content: '테스트 내용 2', category: '기타', like: 3, userid: "test4"  },
        { id: 7, title: '테스트 포스트 7', content: '테스트 내용 1', category: '문화생활', like: 2, userid: "test5"  },
        { id: 8, title: '테스트 포스트 8', content: '테스트 내용 2', category: '패션&뷰티', like: 1, userid: "epnjh0807"  },
        { id: 9, title: '테스트 포스트 9', content: '테스트 내용 1', category: '기타', like: 0, userid: "test6"  },
        { id: 10, title: '테스트 포스트 10', content: '테스트 내용 2', category: '교육', like: 9, userid: "tes7"  },
        { id: 11, title: '테스트 포스트 11', content: '테스트 내용 1', category: '교육', like: 10, userid: "test8"  },
        { id: 12, title: '테스트 포스트 12', content: '테스트 내용 2', category: '건강', like: 11, userid: "test9"  },
        // 추가적인 가상의 데이터를 필요한 만큼 추가할 수 있습니다.
      ];

      // category가 존재하면 해당 카테고리의 데이터만 필터링하여 가져옵니다.
      const filteredData = category ? dummyData.filter(item => item.category === category) : dummyData;
      console.log(filteredData)

      // 가져온 데이터를 상태에 업데이트합니다.
      setFilteredData(filteredData);
    };

    fetchData();
  }, [category]);

  // const { category } = useParams();
  // const [filteredData, setFilteredData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Make a request to your API endpoint
  //       const response = await axios.get('/api/posts/all');
  //       const data = response.data;

  //       // If a category is selected, filter the data by category
  //       const filteredData = category ? data.filter(item => item.category === category) : data;

  //       setFilteredData(filteredData);
  //     } catch (error) {
  //       console.error('Error fetching data: ', error);
  //       // Handle error appropriately
  //     }
  //   };

  //   fetchData();
  // }, [category]);



  return (
    <React.Fragment>
      <CssBaseline />
      {/* 상단 AppBar */}
      <CustomAppBar />
      {/* 페이지 내용 */}
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Box
          component="form"
          justifyContent="space-evenly"
          sx={{
            display: 'flex',
            flexDirection: 'row', // 요소들을 수평으로 정렬
            alignItems: 'center', // 수직 가운데 정렬
            '& > :not(style)': { m: 1 }, // 요소들 간의 간격 설정
            width: '100%',
          }}
          noValidate
        >
          <InputBase
            sx={{ 
              ml: 1, 
              flex: 0.7,
              border: '1px solid #888888', // 테두리 스타일 설정
              borderRadius: '4px', // 테두리의 모서리를 둥글게 만듭니다.
              padding: '6px 12px', // 내부 패딩 설정
            }}
            placeholder="검색어를 입력해주세요"
            inputProps={{ 'aria-label': "검색어를 입력해주세요" }}
          />
          <Button
            variant="contained"
            to=""
            sx={{
              padding: '0.3rem 1rem',
              backgroundColor: '#D4AB39',
              color: 'white',
              '&:hover': {
                backgroundColor: '#D4AB39',
              },
            }}
          >
            Go!
          </Button>
        </Box>

        {/* 내용 상자 */}
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 } }}>
          {/* 내용 제목 */}
          <PostListLogin data={filteredData} />
        </Paper>
      </Container>
    </React.Fragment>
  );
}
