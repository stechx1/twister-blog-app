import { BlogCard } from '../collections/Home/BlogCard';
import { Button, Input, Pagination } from '../components';
import { blogs } from '../data/blogs';

const Home = () => {
  return (
    <div className='container mx-auto'>
      {/* Hero section  */}
      <div className='flex flex-col justify-center items-center gap-4 my-12'>
        <h1 className='font-semibold text-4xl'>Blogs</h1>
        <p className='text-gray-500 font-light max-w-[600px] text-center'>
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
        <div className='flex gap-4 w-[600px]'>
          <Input
            className='w-full'
            type='email'
            placeholder='Enter your email'
          />
          <Button className='flex-1'>Subscribe</Button>
        </div>
        <p className='text-sm font-light text-gray-400'>
          We care about your data in our privacy policy
        </p>
      </div>

      {/* All Blogs Section */}
      <div>
        <h2 className='font-medium text-xl mb-4'>All Blog Posts</h2>
        <div className='grid grid-cols-3 gap-4'>
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
