import { useParams } from 'react-router-dom';
import usePostData from '../hooks/usePostData';
import { AddPostForm } from '../components';

const EditPostPage = () => {
  const { slug } = useParams();
  const { postData } = usePostData(slug);

  return (
    // TODO: Enter title and styling
    <div>
      <AddPostForm postData={postData} />
    </div>
  );
};

export default EditPostPage;
