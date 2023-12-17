import React, { useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Poster from './Poster';
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import CustomAppBar from '../Bar/CustomAppbar';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import instance from '../../shared/Request';
import { useNavigate } from 'react-router-dom';

export default function PostLogin() {
    const [liked, setLiked] = useState(false);
    const [authorId, setAuthorId] = useState(null); // 포스터 작성자 ID 상태
    const { postid } = useParams();
    const userId = localStorage.getItem("userId"); // 로컬 스토리지에서 사용자 ID 가져오기
    const navigate = useNavigate();

    const toggleLike = () => {
        setLiked(!liked);
    };

    // 수정 및 삭제 로직 구현
    const handleEdit = () => {
        navigate(`/postingBubble/${postid}`); // 수정 페이지로 이동
    };

    const handleDelete = async () => {
        if (window.confirm("이 게시물을 삭제하시겠습니까?")) {
            try {
                const response = await instance.delete(`/user/posts/${postid}`, {
                    data: { claimer_id: parseInt(userId) }
                });

                if (response.status === 200) {
                    alert("게시물이 삭제되었습니다.");
                    // 삭제 후 페이지 리다이렉트 또는 상태 업데이트
                } else {
                    alert("게시물 삭제에 실패했습니다.");
                }
            } catch (error) {
                console.error("게시물 삭제 중 오류 발생:", error);
                alert("게시물 삭제 중 오류가 발생했습니다.");
            }
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <CustomAppBar />
            <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
                <Paper>
                    <Poster />
                </Paper>
                <Grid container justifyContent="space-between" spacing={2}>
                    {userId === authorId && (
                        <>
                            <Grid item>
                                <IconButton onClick={handleEdit} aria-label="수정">
                                    <ModeEditIcon />
                                </IconButton>
                                <IconButton onClick={handleDelete} aria-label="삭제">
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </>
                    )}
                    <Grid item>
                        <IconButton aria-label="좋아요" onClick={toggleLike}>
                            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                        <RouterLink to={`/post/${postid}/comment`}>
                            <IconButton aria-label="댓글">
                                <CommentIcon />
                            </IconButton>
                        </RouterLink>
                        <IconButton aria-label="공유">
                            <ShareIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}