import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { conf } from '../../conf/conf';
import { Editor } from '@tinymce/tinymce-react';
import { useId } from 'react';

export const TinyMCE = ({ label = 'Content', control, defaultValue = '' }) => {
  const id = useId();
  return (
    <div className='w-full'>
      {label && (
        <label
          className='inline-block mb-1 pl-1 font-semibold text-lg'
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <Controller
        name='content'
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={conf.tiny_mce_api_key}
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic underline strikethrough forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code',
              content_style:
                'body {font-family: Helvetica,Arial,sans-serif; font-size:14px}',
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
};

TinyMCE.propTypes = {
  label: PropTypes.string,
  control: PropTypes.object.isRequired,
  defaultValue: PropTypes.string,
};
