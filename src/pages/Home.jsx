import { BlogCard } from '../collections/Home/BlogCard';
import { Button, Input } from '../components';

const Home = () => {
  const tags = [
    {
      tagName: 'Management',
      tagColor: '#F9F5FF',
      textColor: '#6941C6',
    },
    {
      tagName: 'Leadership',
      tagColor: '#F8F9FC',
      textColor: '#363F72',
    },
  ];
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

      {/* Recent Blogs Section */}
      <div>
        <h2 className='font-medium text-xl '>Recent Blog Posts</h2>
        <div className='grid grid-cols-3 gap-4'>
          <BlogCard
            imgSrc={
              'https://images.unsplash.com/photo-1722486110900-cfb036cf1830?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            authorName={'Sana Saeed'}
            date={'17 January 2025'}
            title='Bill Walsh leadership lessons'
            para={
              'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?'
            }
            tags={tags}
          />
          <BlogCard
            imgSrc={
              'https://images.unsplash.com/photo-1722486110900-cfb036cf1830?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            authorName={'Sana Saeed'}
            date={'17 January 2025'}
            title='Bill Walsh leadership lessons'
            para={
              'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?'
            }
            tags={tags}
          />
          <BlogCard
            imgSrc={
              'https://images.unsplash.com/photo-1722486110900-cfb036cf1830?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            authorName={'Sana Saeed'}
            date={'17 January 2025'}
            title='Bill Walsh leadership lessons'
            para={
              'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?'
            }
            tags={tags}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
