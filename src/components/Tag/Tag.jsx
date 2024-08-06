import PropTypes from 'prop-types';

export const Tag = ({ tagName, tagColor, textColor = '#333' }) => {
  return (
    <div
      style={{ backgroundColor: tagColor, color: textColor }}
      className={`py-2 px-5 rounded-full`}
    >
      {tagName}
    </div>
  );
};

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
  tagColor: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};
