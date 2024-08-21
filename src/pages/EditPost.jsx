import { useParams } from 'react-router-dom';
import usePostData from '../hooks/usePostData';
import { AddPostForm } from '../components';

const EditPostPage = () => {
  const { slug } = useParams();
  const { postData } = usePostData(slug);

  return (
    <div className='container mx-auto'>
      <div className='my-10'>
        <h1 className='text-3xl font-semibold text-center'>Edit Blog</h1>
      </div>

      <div className=''>
        <AddPostForm postData={postData} />
      </div>
    </div>
  );
};

export default EditPostPage;
