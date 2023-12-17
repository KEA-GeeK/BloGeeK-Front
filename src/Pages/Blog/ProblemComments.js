import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProblemComments = ({ comments = [] }) => { // 기본값을 빈 배열로 설정
  // 댓글이 없는 경우 처리
  if (!Array.isArray(comments) || comments.length === 0) {
    return <div>문제 댓글이 없습니다.</div>;
  }

  const handleDelete = (commentId) => {
    console.log("Deleting comment with ID:", commentId);
    // 여기에 댓글 삭제 로직 추가
  };

  // 댓글로 이동 함수
  const handleNavigate = (postId) => {
    console.log("Navigating to post with ID:", postId);
    // 여기에 댓글이 있는 게시물로 이동하는 로직 추가
  };

  return (
    <List>
      {comments.map((comment) => (
        <ListItem key={comment.id}>
          <ListItemText primary={comment.text} secondary={`게시물 ID: ${comment.postId}`} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(comment.id)}>
              <DeleteIcon />
            </IconButton>
            <Button variant="outlined" startIcon={<ArrowForwardIcon />} onClick={() => handleNavigate(comment.postId)}>
              이동
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ProblemComments;
