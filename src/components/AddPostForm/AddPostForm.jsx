import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Toggle } from '../Input/Toggle';
import { Button } from '../Button';
import { TinyMCE } from '../TinyMCE/TinyMCE';
import { useCallback, useEffect, useState } from 'react';
import service from '../../services/service';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const AddPostForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const { register, handleSubmit, control, watch, setValue } = useForm();

  const onPostSubmit = async (data) => {
    setError('');
    setLoading(true);
    try {
      const file = await service.uploadFile(data?.featuredImg[0]);
      if (file) {
        const postDb = await service.createPost({
          ...data,
          featuredImg: file.$id,
          userId: userData?.$id,
        });
        if (postDb) {
          navigate(`/post/${postDb.$id}`);
          setLoading(false);
        }
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
      throw new Error(error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string') {
      return value
        .trim() // 1. Removes whitespace from both ends of the string
        .toLowerCase() // 2. Converts the string to lowercase
        .replace(/\s+/g, '-') // 3. Replaces all spaces with dashes '-'
        .replace(/[^a-z0-9-]/g, ''); // 4. Removes any non-alphanumeric characters except dashes
    }
    return '';
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setValue, slugTransform, watch]);

  return (
    <form className='space-y-8' onSubmit={handleSubmit(onPostSubmit)}>
      <div className='flex gap-8'>
        <Input
          type='text'
          placeholder='Enter Title'
          label='Title'
          {...register('title', { required: true })}
        />
        <Input
          type='file'
          label='Featured Image'
          {...register('featuredImg', { required: true })}
        />
      </div>
      <div className='flex gap-8'>
        <Input
          type='text'
          placeholder='Enter Slug'
          label='Slug'
          {...register('slug', { required: true })}
        />
        <Toggle label={'Active'} {...register('active')} />
      </div>

      <div className='flex gap-8'>
        <Input
          type='text'
          placeholder='Enter Auhor Name'
          label='Auhtor Name'
          {...register('authorName', { required: true })}
        />
        <Input
          type='text'
          placeholder='Enter Description'
          label='Description'
          {...register('description', { required: true })}
        />
      </div>

      <div>
        <TinyMCE
          label={'Content'}
          control={control}
          defaultValue='Sana Saeed'
        />
      </div>

      {error && (
        <div>
          <p className='text-red-500 text-xs pb-2 '>{error}</p>
        </div>
      )}

      <div>
        <Button loading={loading} type='submit'>
          Submit
        </Button>
      </div>
    </form>
  );
};
