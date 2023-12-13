import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/Login/LoginPage';
import SignUpPage from './Pages/SignUp/SignUpPage';
import HomePage from './Pages/Home/HomePage';
import HomePageLogin from './Pages/Home/HomePage_login';
import Bubble from './Pages/Bubble/Bubble';
import BubbleLogin from './Pages/Bubble/Bubble_login';
import Myblog from './Pages/Blog/MyBlog';
import Mypage from './Pages/MyPage/Mypage';
import Editor from './Pages/Post/Editor';
import PostingBubble from './Pages/Post/Posting_bubble';
import PostLogin from './Pages/Post/Post_login';
import CommentUi from './Pages/Post/Comment/CommentUI';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/join" element={<SignUpPage />} />
          <Route path="/home_login" element={<HomePageLogin />} />
          <Route path="/bubble" element={<Bubble />} />
          <Route path="/bubble_login" element={<BubbleLogin />} />
          <Route path="/bubble_login/:category" element={<BubbleLogin />} />
          <Route path="/myblog" element={<Myblog />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/editor' element={<Editor />} />
          <Route path='/postingBubble' element={<PostingBubble />} />
          <Route path='/post/:postid' element={<PostLogin />} />
          <Route path='/post/:postId/comment' element={<CommentUi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
