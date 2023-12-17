import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { format } from 'date-fns';

const BlogPost = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // API에서 포스트 데이터를 가져오는 함수
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${postId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Fetching post failed:", error);
      }
    };

    fetchPost();
  }, [postId]);

  return (
    <div style={{ minHeight: 150 }}>
      {post ? (
        <Card>
          <CardHeader
            title={post.post_title}
            subheader={`작성자 ID: ${post.author_id} | 작성 날짜: ${format(new Date(post.create_at), 'yyyy-MM-dd HH:mm')}`}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: post.contents }} />
          </CardContent>
        </Card>
      ) : (
        <Typography variant="title" component="h1">
          Loading...
        </Typography>
      )}
    </div>
  );
};

export default BlogPost;
