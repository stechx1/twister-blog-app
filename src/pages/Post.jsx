import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import service from '../services/service';
import parse from 'html-react-parser';

const Post = () => {
  const [postData, setPostData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const { slug } = useParams();

  useEffect(() => {
    const getPostData = async () => {
      try {
        const data = await service.getPostBySlug(slug);
        setPostData(data);
        const img = await service.getFilePreview(data.featuredImg);
        setImageUrl(img);
      } catch (error) {
        throw new Error(error);
      }
    };
    getPostData();
  }, [slug]);

  return (
    <div>
      {postData ? (
        <>
          <div className='w-full h-[450px] overflow-hidden'>
            <img
              src={imageUrl}
              alt='img'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='my-8 container mx-auto'>
            <h2 className='text-3xl font-semibold text-center'>
              {postData.title}
            </h2>
            <div className='browser-css'>
              {postData.content
                ? parse(postData.content)
                : 'Loading content...'}
            </div>
          </div>
        </>
      ) : (
        <div>Loading post data...</div>
      )}
    </div>
  );
};

export default Post;
