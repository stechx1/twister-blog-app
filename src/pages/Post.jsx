const Post = () => {
  return (
    <div>
      <div className='w-full h-[450px] overflow-hidden'>
        <img
          src={'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'}
          alt='img'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='my-8 container mx-auto'>
        <h2 className="text-3xl font-semibold text-center">Blockchain: A New Era of Technology</h2>
        <div>Content</div>
      </div>
    </div>
  );
};

export default Post;
