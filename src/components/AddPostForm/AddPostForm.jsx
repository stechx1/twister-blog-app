import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Toggle } from '../Input/Toggle';
import { Button } from '../Button';
import { TinyMCE } from '../TinyMCE/TinyMCE';
import { useCallback, useEffect } from 'react';

export const AddPostForm = () => {
  const { register, handleSubmit, control, watch, setValue } = useForm();
  const onPostSubmit = (data) => {
    console.log(data);
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
          {...register('image', { required: true })}
        />
      </div>
      <div className='flex gap-8'>
        <Input
          type='text'
          placeholder='Enter Slug'
          label='Slug'
          {...register('slug', { required: true })}
        />
        <Toggle label={'Active'} {...register("active")} />
      </div>
      <div>
        <TinyMCE
          label={'Content'}
          control={control}
          defaultValue='Sana Saeed'
        />
      </div>

      <div>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  );
};
