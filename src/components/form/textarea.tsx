import { ComponentProps } from 'react';

export interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className='focus:ring-violet-10 min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4'
      {...props}
    ></textarea>
  );
}
