import { format } from 'date-fns';

import { blogs } from '../blogs';

export default function Content({ params }: { params: { slug: string } }) {
  const content = blogs[params.slug];

  return (
    <article>
      <div className="flex flex-col justify-center gap-2 border-b-2 border-accent-light dark:border-accent py-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">{content.title}</h1>
        <span className="italic text-center">{format(content.createdAt, 'MMM do, yyyy')}</span>
      </div>
    </article>
  );
}
