
import React, { useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from '../../Logo.png';
import Poster from './Poster';
import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import CustomAppBar from '../Bar/CustomAppbar';

export default function PostLogin() {
    const [liked, setLiked] = useState(false);
    const { postid } = useParams(); // Retrieve the post ID from URL parameters

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <CustomAppBar />
            <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
                <Paper>
                    <Poster />
                </Paper>
                <Grid container justifyContent="flex-start" spacing={2}>
                    <Grid item>
                        <IconButton aria-label="좋아요" onClick={toggleLike}>
                            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <RouterLink to={`/post/${postid}/comment`}>
                            <IconButton aria-label="댓글">
                                <CommentIcon />
                            </IconButton>
                        </RouterLink>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="공유">
                            <ShareIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
