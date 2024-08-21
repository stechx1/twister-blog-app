import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import service from '../services/service';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { Button } from '../components';
import { Modal } from '../components/Modal/Modal';

const Post = () => {
  const [postData, setPostData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const { slug } = useParams();
  const userData = useSelector((state) => state.auth.userData);

  const navigate = useNavigate();

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

  const deletePost = async () => {
    try {
      const response = await service.deleteFile(postData?.featuredImg);
      if (response) {
        try {
          await service.deletePost(postData?.$id);
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          {userData?.$id === postData.userId && (
            <div className='flex justify-center items-center my-8'>
              <div className='flex gap-4'>
                <Button state='secondary'>Edit</Button>
                <Button
                  onClick={() => setOpenModal(true)}
                  className='bg-red-500 hover:bg-red-600'
                >
                  Delete
                </Button>
              </div>
            </div>
          )}
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
          <Modal
            open={openModal}
            setOpen={setOpenModal}
            title={'Delete Post'}
            content={'Do you really want to delete the post? '}
            okButtonText={'Delete'}
            okButtonAction={deletePost}
          />
        </>
      ) : (
        <div>Loading post data...</div>
      )}
    </div>
  );
};

export default Post;
