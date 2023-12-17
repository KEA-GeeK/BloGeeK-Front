import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CssBaseline, Container, Button, TextField, FormControl, InputLabel, NativeSelect, Paper } from '@mui/material';
import CustomAppBar from '../Bar/CustomAppbar';
import Editor from './Editor';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import instance from '../../shared/Request'; // instance를 가져옵니다.

export default function PostingBubble() {
    const { postId } = useParams(); // URL에서 postId를 가져옵니다.
    const isEditMode = postId != null; // postId가 있으면 수정 모드로 간주합니다.
    const [postTitle, setPostTitle] = useState('');
    const [contents, setContents] = useState('');
    const [category, setCategory] = useState('ETC');
    const authorId = parseInt(localStorage.getItem('userid'));

    useEffect(() => {
        if (isEditMode) {
            // 수정 모드일 때 기존 게시글 데이터를 불러옵니다.
            const fetchPostData = async () => {
                try {
                    const response = await instance.get(`/user/posts/${postId}`);
                    if (response.data) {
                        setPostTitle(response.data.post_title);
                        setContents(response.data.contents);
                        setCategory(response.data.category);
                    }
                } catch (error) {
                    console.error('Error fetching post data:', error);
                }
            };

            fetchPostData();
        }
    }, [postId, isEditMode]);

    if (!authorId) {
        alert('You must be logged in to post.');
        return <Navigate to="/login" />;
    }

    const handleEditorChange = (content) => {
        setContents(content);
    };

    const handleSubmit = async () => {
        try {
            const response = await instance.post('/posts/write', {
                post_title: postTitle,
                contents: contents,
                claimer_id: authorId,
                category: category,
            });
            console.log(response.data);
            alert('Post submitted successfully!');
        } catch (error) {
            console.error('Error posting data:', error);
            alert('Error submitting post.');
        }
    };

    const handleCategoryChange = (e) => {
        const categoryId = parseInt(e.target.value);
        switch (categoryId) {
            case 1: setCategory('CULTURAL_LIFE'); break;
            case 2: setCategory('EDUCATION'); break;
            case 3: setCategory('FASHION_BEAUTY'); break;
            case 4: setCategory('HEALTH'); break;
            case 5: setCategory('HOBBIES'); break;
            case 6: setCategory('LIFESTYLE'); break;
            case 7: setCategory('SOCIETY'); break;
            default: setCategory('ETC');
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <CustomAppBar />
            <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 30 }}>
                    <FormControl width="20px">
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            카테고리
                        </InputLabel>
                        <NativeSelect
                            defaultValue={8}
                            onChange={handleCategoryChange}
                            inputProps={{
                                name: '카테고리',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={1}>문화생활</option>
                            <option value={2}>교육</option>
                            <option value={3}>패션/뷰티</option>
                            <option value={4}>건강</option>
                            <option value={5}>취미</option>
                            <option value={6}>생활</option>
                            <option value={7}>사회</option>
                            <option value={8}>기타</option>
                        </NativeSelect>
                    </FormControl>
                    <TextField
                        label="제목"
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: '70%', marginRight: 5 }}
                        onChange={(e) => setPostTitle(e.target.value)}
                    />
                </div>
                <Paper>
                    <Editor onContentChange={handleEditorChange} />
                </Paper>
            </ Container>
            <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                    padding: '0.3rem 1.5rem',
                    backgroundColor: '#D4AB39',
                    marginTop: 5,
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#D4AB39',
                    },
                }}
            >
                {isEditMode ? '저장하기' : '작성하기'}
            </Button>
        </React.Fragment>
    );
}
