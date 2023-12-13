import { Height } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';

const BlogPost = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // postId를 기반으로 게시글 및 댓글 데이터를 가져오는 로직을 작성
    // 예: 서버 API 호출 또는 데이터베이스에서 데이터 가져오기

    // 가져온 게시글 정보를 setPost를 사용해 설정
    const fetchedPost = { 
      id: postId, 
      title: 'BloGeeK 알아보기!', 
      content: '이런 저런 내용을 함께 작성해보아요!' 
    };
    setPost(fetchedPost);
    
  }, [postId]);

  return (
    <div style={{minHeight: 150}}>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>
            <span dangerouslySetInnerHTML={{ __html: post.content }} />
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogPost;
