import { format } from 'date-fns';

import { blogs } from '../blogs';

export default function Content({ params }: { params: { slug: string } }) {
  const content = blogs[params.slug];
  if (!content) {
    return (
      <div className="h-[70vh] grid place-items-center">
        <span className="font-medium text-xl">Article Not Found {':('}</span>
      </div>
    );
  }

  return (
    <article>
      <div className="flex flex-col justify-center gap-2 border-b-2 border-accent-light dark:border-accent py-4 mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">{content.title}</h1>
        <time className="italic text-center">{format(content.createdAt, 'MMM do, yyyy')}</time>
      </div>
      <div className="flex flex-col gap-8 leading-8 text-lg font-medium">{content.content}</div>
    </article>
  );
}
