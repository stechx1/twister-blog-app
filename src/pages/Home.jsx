import { useForm } from 'react-hook-form';
import { BlogCard } from '../collections/Home/BlogCard';
import { Button, EmptyState, Input } from '../components';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import service from '../services/service';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { register, handleSubmit } = useForm();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate()
  const onSubscribe = (data) => {
    toast.success(`${data.email} Subscibed Successfully`);
  };
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const posts = await service.getAllPosts();
        setPosts(posts.documents);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch posts');
      }
    };
    getAllPosts();
  }, []);

  return (
    <div className='container mx-auto'>
      <div>
        <Toaster />
      </div>
      {/* Hero section  */}
      <div className='flex flex-col justify-center items-center gap-4 my-16'>
        <h1 className='font-semibold text-4xl'>Blogs</h1>
        <p className='text-gray-500 font-light max-w-[600px] text-center'>
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
        <form onSubmit={handleSubmit(onSubscribe)}>
          <div className='flex gap-4 w-[600px]'>
            <Input
              className='w-full'
              type='email'
              placeholder='Enter your email'
              {...register('email', { required: true })}
            />
            <Button type='submit' className='flex-1'>
              Subscribe
            </Button>
          </div>
        </form>
        <p className='text-sm font-light text-gray-400'>
          We care about your data in our privacy policy
        </p>
      </div>

      {/* All Blogs Section */}
      <div>
        <h2 className='font-medium text-xl mb-4'>All Blog Posts</h2>

        <div className='grid grid-cols-3 gap-x-4 gap-y-12'>
          {posts &&
            posts.map((blog) => {
              const formattedDate = new Date(
                blog?.$createdAt
              ).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              });
              return (
                <BlogCard
                  slug={blog?.$id}
                  key={blog?.$id}
                  imgSrc={
                    blog?.featuredImg &&
                    service.getFilePreview(blog?.featuredImg)
                  }
                  authorName={blog?.authorName}
                  date={formattedDate}
                  title={blog?.title}
                  para={blog?.description}
                  tags={blog?.tags}
                />
              );
            })}
        </div>
        {posts?.length <= 0 && (
          <div className='flex justify-center items-center my-8'>
            <EmptyState
              title='No Blogs Yet'
              content='Click the button to get started adding new blogs'
              buttonText='Create' buttonAction={() => navigate("/create-blog")}
            />
          </div>
        )}
      </div>
      {/* <div className='my-20'>
        <Pagination />
      </div> */}
    </div>
  );
};

export default Home;
