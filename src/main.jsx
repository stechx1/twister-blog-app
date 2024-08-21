import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/Login.jsx';
import SignupPage from './pages/SignUp.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Home from './pages/Home.jsx';
import Post from './pages/Post.jsx';
import CreateBlog from './pages/CreateBlog.jsx';
import EditPostPage from './pages/EditPost.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <ProtectedRoute element={<Home />} /> },
      { path: '/post/:slug', element: <ProtectedRoute element={<Post />} /> },
      {
        path: '/create-blog',
        element: <ProtectedRoute element={<CreateBlog />} />,
      },
      {
        path: '/edit/:slug',
        element: <ProtectedRoute element={<EditPostPage />} />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/sign-up',
    element: <SignupPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
