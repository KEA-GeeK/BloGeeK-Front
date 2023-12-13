import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from '../../Logo.png';
import { Link as RouterLink } from 'react-router-dom';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import CustomAppBar from '../Bar/CustomAppbar';

export default function Myblog() {
  const users = [
    {
      id: "GeeK",
      state: "프론트 공부 중,,",
      follow: 0,
      followingb: 3,
      followingp: 0
    }
  ];

  const followers = [
    
  ];
  const followingp = [
    
  ];
  const followingb = [
    {
      id: 1,
      nickname: '교육'
    },
    {
      id: 2,
      nickname: '문화생활'
    },
    {
      id: 3,
      nickname: '패션/뷰티'
    }
  ];

  const posts = [
    {
      id: 1,
      title: "BloGeeK 알아보기!",
      views: 1,
      comments: 0,
      likes: 1,
      tag: '기타'
    },
    
    // 다른 게시글들도 추가
  ];
  const comments = [
    
    // 다른 댓글들도 추가
  ];

  const MAX_COMMENT_LENGTH = 20; // 최대 표시 길이 설정

  return (
    <React.Fragment>
      <CssBaseline />
      {/* 상단 AppBar */}
      <CustomAppBar/>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Paper sx={{ maxWidth: 200, height: '550px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
              <div
                style={{
                  width: '110px',
                  height: '110px',
                  backgroundColor: '#DDDDDD',
                  borderRadius: '50%',
                  position: 'absolute',
                  marginTop: 43,
                  marginBottom: 3
                }}
              />
              <Avatar
                alt="프로필 이미지"
                src={Logo}
                sx={{ width: 100, height: 100, marginTop: 5, marginBottom: 3 }}
              />
              {users.map((user) => (
                <div key={user.id}>
                  <Typography variant="h6" component="div" fontWeight={'bold'}>
                    {user.id}
                  </Typography>
                  <Typography variant="body2" component="div">
                    {user.state}
                  </Typography>
                  <Typography variant="body2" component="div" marginTop={4}>
                    follow | {user.follow}
                  </Typography>
                  <Typography variant="body2" component="div">
                    following | {user.followingp} / {user.followingb}
                  </Typography>
                </div>
              ))}
              <RouterLink to="/postingBubble">
                <Button
                  variant="contained"
                  to=""
                  sx={{
                    padding: '0.2rem',
                    mt: 5,
                    backgroundColor: '#D4AB39',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#D4AB39',
                    },
                  }}
                >
                  글 작성
                </Button>
              </RouterLink>
              <Link href="/" underline="none" style={{ color: 'black', cursor: 'pointer', marginTop:70}}>블로그 통계</Link>
                <Link href="/mypage" underline="none" style={{ color: 'black', cursor: 'pointer', marginTop:5}}>마이페이지</Link>
                <Link href="/" underline="none" style={{ color: 'black', cursor: 'pointer', marginTop:5}}>탈퇴</Link>
            </Paper>
          </Grid>
          {/* 페이지 내용 */}
          <Grid item xs={12} md={9}>
            <Container component="main" maxWidth="md" sx={{ mt: 'auto' }}>
              {/* 내용 상자 */}
              <Box sx={{ alignItems: 'flex-start', backgroundColor: '#D4AB39', width: 100, color: 'white', fontFamily: 'TmoneyRoundWindRegular', borderRadius: '5px', ml: 2, fontSize: 15 }}>Followers</Box>
              <Paper sx={{ m: 3, minHeight:200, maxHeight: 300, overflow: 'auto' }}>
                {followers.map((follower) => (
                  <Box
                    key={follower.id}
                    sx={{
                      p: 2,
                      margin: 2,
                      display: 'flex',
                      justifyContent: 'space-between', // 가운데 정렬을 위해 추가
                      alignItems: 'center',
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <ButtonBase sx={{ width: 64, height: 64 }}>
                        <img src={Logo} alt="이미지 설명" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </ButtonBase>
                      <Typography gutterBottom variant="subtitle1" component="div" style={{ marginLeft: 10 }}>
                        {follower.nickname}
                      </Typography>
                    </div>
                    <Button variant="contained" color="secondary" size='small' sx={{ fontSize: 15 }}>차단</Button> {/* 차단 버튼 */}
                  </Box>
                ))}
              </Paper>
              <Box sx={{ alignItems: 'flex-start', backgroundColor: '#D4AB39', width: 100, color: 'white', fontFamily: 'TmoneyRoundWindRegular', borderRadius: '5px', ml: 2, fontSize: 15 }}>Following</Box>
              <Container component="main" maxWidth="md" sx={{ mt: 'auto' }}>
                <Grid container spacing={2}>
                  {/* Paper 컴포넌트에서 각 following 출력 */}
                  <Grid item xs={12} sm={6}>
                    <Paper sx={{ minHeight:300, maxHeight: 300, overflow: 'auto', mt: 2, mb: 2 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Typography sx={{ justifyContent: 'flex', alignItems: 'flex-start', color: '#888888', ml: 5, mb: -5 }}>사용자</Typography>
                      </div>
                      {followingp.map((follower) => (
                        <Box
                          key={follower.id}
                          sx={{
                            p: 2,
                            margin: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: (theme) =>
                              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ButtonBase sx={{ width: 64, height: 64 }}>
                              <img src={Logo} alt="이미지 설명" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </ButtonBase>
                            <Typography gutterBottom variant="subtitle1" component="div" style={{ marginLeft: 10 }}>
                              {follower.nickname}
                            </Typography>
                          </div>
                          <Button variant="contained" color="secondary">취소</Button>
                        </Box>
                      ))}
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Paper sx={{ minHeight:300, maxHeight: 300, overflow: 'auto', mt: 2, mb: 2 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Typography sx={{ justifyContent: 'flex', alignItems: 'flex-start', color: '#888888', ml: 5, mb: -5 }}>버블</Typography>
                      </div>
                      {followingb.map((follower) => (
                        <Box
                          key={follower.id}
                          sx={{
                            p: 2,
                            margin: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: (theme) =>
                              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ButtonBase sx={{ width: 64, height: 64 }}>
                              <img src={Logo} alt="이미지 설명" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </ButtonBase>
                            <Typography gutterBottom variant="subtitle1" component="div" style={{ marginLeft: 10 }}>
                              {follower.nickname}
                            </Typography>
                          </div>
                          <Button variant="contained" color="secondary">취소</Button>
                        </Box>
                      ))}
                    </Paper>
                  </Grid>
                </Grid>
              </Container>

              <Box sx={{ alignItems: 'flex-start', backgroundColor: '#D4AB39', width: 100, color: 'white', fontFamily: 'TmoneyRoundWindRegular', borderRadius: '5px', ml: 2, fontSize: 15 }}>작성한 글</Box>
              <Paper sx={{ m: 3, minHeight:200, maxHeight: 300, overflow: 'auto' }}>
                {posts.map((post) => (
                  <Box
                    key={post.id}
                    sx={{
                      p: 2,
                      margin: 2,
                      flexGrow: 1,
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item>
                        <ButtonBase sx={{ width: 64, height: 64 }}>
                          <img src={Logo} alt="이미지 설명" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1" component="div" style={{ display: 'flex', alignItems: 'flex-start', ml: 2 }}>
                            {post.title}
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography variant="body2" color="text.secondary" style={{ display: 'flex', alignItems: 'flex-start', marginLeft: 2 }}>
                            <span>조회수: {post.views}</span>
                            <span style={{ marginLeft: 10 }}>댓글: {post.comments}</span>
                            <span style={{ marginLeft: 10 }}>좋아요: {post.likes}</span>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Paper>
              <Box sx={{ alignItems: 'flex-start', backgroundColor: '#D4AB39', width: 150, color: 'white', fontFamily: 'TmoneyRoundWindRegular', borderRadius: '5px', ml: 2, fontSize: 15 }}>작성한 댓글 및 답글</Box>
              <Paper sx={{ m: 3, minHeight:200, maxHeight: 300, overflow: 'auto' }}>
                {comments.map((comment) => {
                  const post = posts.find((post) => post.id === comment.postid);
                  const postTitle = post ? post.title : "게시물을 찾을 수 없음"; // 해당 게시물을 찾지 못하면 메시지 출력
                  const postTag = post ? post.tag : "게시물을 찾을 수 없음"; // 해당 게시물을 찾지 못하면 메시지 출력

                  const truncatedCommentText = comment.text.length > MAX_COMMENT_LENGTH ? comment.text.slice(0, MAX_COMMENT_LENGTH) + "..." : comment.text;


                  return (
                    <Box
                      key={comment.id}
                      sx={{
                        p: 2,
                        margin: 2,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                              {truncatedCommentText}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                              <span>{postTitle}</span>
                              <span>#{postTag}</span>
                              <Link href="/" underline="none" style={{ color: 'black', cursor: 'pointer', marginLeft: '10px' }}>이동</Link>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  );
                })}
              </Paper>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
