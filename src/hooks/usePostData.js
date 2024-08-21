// hooks/usePostData.js
import { useState, useEffect } from 'react';
import service from '../services/service';

const usePostData = (slug) => {
  const [postData, setPostData] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const data = await service.getPostBySlug(slug);
        setPostData(data);
        const img = await service.getFilePreview(data.featuredImg);
        setImageUrl(img);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPostData();
  }, [slug]);

  return { postData, imageUrl, error };
};

export default usePostData;
