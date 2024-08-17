import { useNavigate } from 'react-router-dom';
import { Tag } from '../../components';
import PropTypes from 'prop-types';

export const BlogCard = ({ imgSrc, authorName='', date, title, para, tags, slug }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`post/${slug}`)}
      className='flex flex-col max-w-[400px] gap-2 cursor-pointer'
    >
      <div className='w-full h-56 overflow-hidden'>
        <img src={imgSrc} alt='img' className='w-full h-full object-cover' />
      </div>
      <div className='flex gap-2 mt-4'>
        <p className='text-primary font-medium'>{authorName}</p>
        <p>.</p>
        <p className='text-primary font-medium'>{date}</p>
      </div>
      <h3 className='font-medium text-2xl'>{title}</h3>
      <p className='text-gray-600 font-light'>{para}</p>
      <div className='flex gap-2 mt-3'>
        {tags?.length > 0 &&
          tags.map((tag) => (
            <Tag
              key={tag.tagName}
              tagName={tag.tagName}
              tagColor={tag.tagColor}
              textColor={tag.textColor}
            />
          ))}
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      tagName: PropTypes.string.isRequired,
      tagColor: PropTypes.string.isRequired,
      textColor: PropTypes.string,
    })
  ),
};
