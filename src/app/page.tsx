import { SettingsTabs } from '@/components/settingstabs';
import {
  Bold,
  ChevronDown,
  Italic,
  Link,
  List,
  ListOrdered,
  Mail,
} from 'lucide-react';
import * as Input from '@/components/input';
import * as FileInput from '../components/form/fileinput';
import { Select } from '@/components/form/select';
import { SelectItem } from '@/components/form/select/selectitem';
import { Textarea } from '@/components/form/textarea';
import { Button } from '@/components/button';

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-medium text-zinc-900'>Settings</h1>

      <SettingsTabs />

      <div className='mt-6 flex flex-col'>
        <div className='flex flex-col justify-between border-b border-zinc-200 pb-5 lg:flex-row lg:items-center'>
          <div className='space-y-1'>
            <h2 className='text-lg font-medium text-zinc-900'>Personal info</h2>
            <span className='text-sm text-zinc-500'>
              Update your photo and personal details here.
            </span>
          </div>

          <div className='flex items-center gap-2 pt-5'>
            <Button variant='outline' type='button'>
              Cancel
            </Button>
            <Button variant='primary' type='submit' form='settings'>
              Save
            </Button>
          </div>
        </div>

        <form
          id='settings'
          action=''
          className='mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200'
        >
          <div className='flex flex-col gap-3 lg:grid lg:grid-cols-form'>
            <label
              htmlFor='firstName'
              className='text-sm font-medium text-zinc-700'
            >
              Name
            </label>
            <div className='flex flex-col gap-6 lg:grid lg:grid-cols-2'>
              <Input.Root>
                <Input.Control id='firstName' defaultValue='Giovanni' />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue='Marques' />
              </Input.Root>
            </div>
          </div>

          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label
              htmlFor='email'
              className='text-sm font-medium text-zinc-700'
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className='h-5 w-5 text-zinc-500' />
              </Input.Prefix>
              <Input.Control
                id='email'
                type='email'
                defaultValue='giovanni.marques@example.com'
              />
            </Input.Root>
          </div>

          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label
              htmlFor='photo'
              className='text-sm font-medium text-zinc-700'
            >
              Your photo
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className='flex flex-col gap-5 lg:flex-row lg:items-start'>
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label htmlFor='role' className='text-sm font-medium text-zinc-700'>
              Role
            </label>
            <Input.Root>
              <Input.Control id='role' defaultValue='ADMIN' />
            </Input.Root>
          </div>

          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label
              htmlFor='country'
              className='text-sm font-medium text-zinc-700'
            >
              Country
            </label>
            <Select placeholder='Select a country...'>
              <SelectItem value='br' text='Brazil' />
              <SelectItem value='us' text='United States' />
              <SelectItem value='ch' text='China' />
            </Select>
          </div>

          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label
              htmlFor='timezone'
              className='text-sm font-medium text-zinc-700'
            >
              Timezone
            </label>
            <Select placeholder='Select a timezone...'>
              <SelectItem
                value='utc8'
                text='Pacific Standard Time (UTC-08:00)'
              />
              <SelectItem value='utc3' text='America São Paulo (UTC-03:00)' />
            </Select>
          </div>

          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label htmlFor='bio' className='text-sm font-medium text-zinc-700'>
              Bio
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Write a short introduction.
              </span>
            </label>
            <div className='space-y-3'>
              <div className='flex flex-col gap-3 lg:grid lg:grid-cols-2'>
                <Select placeholder='' defaultValue='normal'>
                  <SelectItem value='normal' text='Normal text' />
                  <SelectItem value='md' text='Markdown' />
                </Select>

                <div className='flex items-center gap-1'>
                  <Button type='button' variant='ghost'>
                    <Bold className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                  <Button type='button' variant='ghost'>
                    <Italic className='h-4 w-4 text-zinc-500' />
                  </Button>
                  <Button type='button' variant='ghost'>
                    <Link className='h-4 w-4 text-zinc-500' />
                  </Button>
                  <Button type='button' variant='ghost'>
                    <List className='h-4 w-4 text-zinc-500' />
                  </Button>
                  <Button type='button' variant='ghost'>
                    <ListOrdered className='h-4 w-4 text-zinc-500' />
                  </Button>
                </div>
              </div>
              <Textarea
                id='bio'
                defaultValue='Im a product designer based in Melbourne, Australia. I specialise in UX/UI, design ...'
              />
            </div>
          </div>

          <div className='flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form'>
            <label
              htmlFor='projects'
              className='text-sm font-medium text-zinc-700'
            >
              Portfolio projects
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className='flex items-center justify-end gap-2 pt-5'>
            <Button variant='outline' type='button'>
              Cancel
            </Button>
            <Button variant='primary' type='submit' form='settings'>
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
