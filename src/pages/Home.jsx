import { useForm } from 'react-hook-form';
import { BlogCard } from '../collections/Home/BlogCard';
import { Button, Input, Pagination } from '../components';
import { blogs } from '../data/blogs';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const { register, handleSubmit } = useForm();
  const onSubscribe = (data) => {
    console.log(data.email);
    toast.success(`${data.email} Subscibed Successfully`);
  };
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
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              imgSrc={blog.imgSrc}
              authorName={blog.authorName}
              date={blog.date}
              title={blog.title}
              para={blog.para}
              tags={blog.tags}
            />
          ))}
        </div>
      </div>
      <div className='my-20'>
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
