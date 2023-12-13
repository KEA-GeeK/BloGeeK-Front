import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { CssBaseline, Container, Paper, TextField, Grid } from '@mui/material';
import CustomAppBar from '../../Bar/CustomAppbar';
import Comments from './Comments';

export default function CommentUi() {
    const navigate = useNavigate();
    const { postId } = useParams(); // 라우트 파라미터와 일치하는지 확인
    const [commentText, setCommentText] = useState('');

    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };

    const handleCommentSubmit = async () => {
        if (!commentText.trim()) {
            alert('Please enter a comment.');
            return;
        }

        // Retrieve the authorId (the logged-in user's ID) from local storage
        const authorId = localStorage.getItem('userid');
        if (!authorId) {
            alert('You must be logged in to post a comment.');
            return;
        }

        try {
            const response = await axios.post(`/api/posts/${postId}/comment/write`, {
                contents: commentText,
                post_id: parseInt(postId),
                author_id: parseInt(authorId),
            });
            console.log(response.data);
            alert('Comment submitted successfully!');
            setCommentText(''); // Clear the comment input field
            // Optionally, refresh comments or navigate
        } catch (error) {
            console.error('Error submitting comment:', error);
            alert('Error submitting comment.');
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <CustomAppBar />
            <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
                <Paper>
                    <Comments />
                </Paper>

                <Grid container justifyContent="center" alignItems="flex-end" style={{ padding: '16px' }}>
                    <Grid item xs={9}>
                        <TextField
                            fullWidth
                            id="comment-input"
                            hiddenLabel
                            variant="outlined"
                            value={commentText}
                            onChange={handleCommentChange}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <button
                            style={{
                                padding: '0.3rem 1.5rem',
                                backgroundColor: '#D4AB39',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                            onClick={handleCommentSubmit}
                        >
                            작성
                        </button>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
