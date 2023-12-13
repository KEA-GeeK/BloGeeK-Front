import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReplyIcon from '@mui/icons-material/Reply';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const Comment = ({ commentId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    // commentId를 기반으로 댓글 데이터를 가져오는 로직을 작성
    // 서버 API 호출 또는 데이터베이스에서 데이터 가져오기

    // 가져온 댓글 정보를 setComment를 사용해 설정
    const fetchedComment = {
      id: commentId,
      content: '너무 재밌어요!',
      // 다른 댓글 정보 (프로필 사진 URL 등) 추가
    };
    setComment(fetchedComment);

  }, [commentId]);

  const handleEdit = () => {
    // 수정 버튼 클릭 시 실행할 동작 추가
  };

  const handleDelete = () => {
    // 삭제 버튼 클릭 시 실행할 동작 추가
  };

  const handleReply = () => {
    // 답글 달기 버튼 클릭 시 실행할 동작 추가
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {comment ? (
        <div>
          <Avatar src={comment.profilePictureUrl} />
          <Box flexGrow={1}>
            <p>{comment.content}</p>
          </Box>
          <Box>
            <IconButton aria-label="답글 달기" onClick={handleReply}>
              <ReplyIcon />
            </IconButton>
            <IconButton aria-label="수정" onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="삭제" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Comment;
