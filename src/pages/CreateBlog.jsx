import { AddPostForm } from '../components';

const CreateBlog = () => {
  return (
    <div className='container mx-auto'>
      <div className='my-10'>
        <h1 className='text-3xl font-semibold text-center'>Create Blog</h1>
      </div>

      <div className=''>
        <AddPostForm />
      </div>
    </div>
  );
};

export default CreateBlog;
