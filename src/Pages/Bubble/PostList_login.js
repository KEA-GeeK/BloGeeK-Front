import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link as RouterLink } from 'react-router-dom';
import instance from '../../shared/Request';

const PostListLogin = ({ data }) => {
  const [sortBy, setSortBy] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 로그인 상태 확인
    const userid = localStorage.getItem('userid');
    setIsUserLoggedIn(!!userid);

    // API 호출하여 게시물 데이터 가져오기
    const fetchPosts = async () => {
      try {
        const response = await instance.get('/api/posts/list/all');
        setPosts(response.data); // API 응답으로 받은 데이터를 상태에 저장
      } catch (error) {
        console.error('Error fetching posts:', error);
        // 에러 처리
      }
    };

    fetchPosts();
  }, []);

  return (
    <React.Fragment>
      <Container sx={{ mt: 3, minHeight: 700 }} maxWidth="md">
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '24px' }}>
          {isUserLoggedIn && (
            <RouterLink to="/postingBubble">
              <Button
                sx={{
                  width: 120,
                  height: 40,
                  backgroundColor: '#D4AB39',
                  color: 'white',
                  fontFamily: 'TmoneyRoundWindRegular',
                  fontSize: 15,
                  '&:hover': {
                    backgroundColor: '#D4AB39',
                  },
                }}
                size="small"
              >
                글 작성하기
              </Button>
            </RouterLink>
          )}

          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={sortBy}
            onChange={handleChange}
            sx={{
              width: 120,
              height: 40,
              backgroundColor: '#D4AB39',
              color: 'white',
              '&:hover': {
                backgroundColor: '#D4AB39',
              },
            }}
          >
            <MenuItem value={0}>기본</MenuItem>
            <MenuItem value={1}>인기순</MenuItem>
            <MenuItem value={2}>최신순</MenuItem>
          </Select>
        </div>
        <Grid container spacing={4}>
          {filteredData.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <RouterLink to={`/post/${card.id}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <div>
                        <Typography variant="h5" gutterBottom>
                          {card.title}
                        </Typography>
                        <Typography>{card.userid}</Typography>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <FavoriteBorderIcon sx={{ marginRight: 1 }} />
                        <Typography marginRight={2}>{card.like}</Typography>
                      </div>
                    </div>
                  </CardContent>

                </Card>
              </RouterLink>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PostListLogin;