import React, { useState } from 'react';
import axios from 'axios';
import { CssBaseline, Container, Button, TextField, FormControl, InputLabel, NativeSelect, Paper } from '@mui/material';
import CustomAppBar from '../Bar/CustomAppbar';
import Editor from './Editor';
import { Navigate } from 'react-router-dom';

export default function PostingBubble() {
    const [postTitle, setPostTitle] = useState('');
    const [contents, setContents] = useState('');
    const [categoryId, setCategoryId] = useState(9); // Default to '선택안함'
    const authorId = parseInt(localStorage.getItem('userid'));

    if (!authorId) {
        alert('You must be logged in to post.');
        return <Navigate to="/login" />; // Replace '/login' with your login route
    }


    // Assuming Editor component has a method to get its content
    const handleEditorChange = (content) => {
        setContents(content);
    };

    const handleSubmit = async () => {
        // const authorId = parseInt(localStorage.getItem('userid')); // Get authorId from localStorage or default to 0

        try {
            const response = await axios.post('/api/posts/write', {
                post_title: postTitle,
                contents: contents,
                author_id: authorId,
                category_id: categoryId,
            });
            console.log(response.data);
            alert('Post submitted successfully!');
        } catch (error) {
            console.error('Error posting data:', error);
            alert('Error submitting post.');
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
                            defaultValue={9}
                            onChange={(e) => setCategoryId(parseInt(e.target.value))}
                            inputProps={{
                                name: '카테고리',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={1}>생활</option>
                            <option value={2}>문화생활</option>
                            <option value={3}>취미</option>
                            <option value={4}>교육</option>
                            <option value={5}>사회</option>
                            <option value={6}>건강</option>
                            <option value={7}>패션/뷰티</option>
                            <option value={9}>선택안함</option>
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
                    작성하기
                </Button>
            </Container>
        </React.Fragment>
    );
}
