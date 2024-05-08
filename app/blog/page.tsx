import { format } from 'date-fns';
import Link from 'next/link';

import { blogs } from './blogs';

export default function Blog() {
  if (!Object.keys(blogs).length) {
    return (
      <div className="h-[70vh] grid place-items-center">
        <span className="font-medium text-xl">No Post Yet {':('}</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      {Object.keys(blogs).map((slug) => (
        <div key={blogs[slug].title} className="flex items-center justify-between">
          <div>
            <span className="mr-4">{'>>'}</span>
            <Link
              href={`/blog/${slug}`}
              className="text-lg font-semibold border-b-2 border-b-transparent hover:border-b-accent-light hover:dark:border-b-accent"
            >
              {blogs[slug].title}
            </Link>
          </div>
          <span className="text-sm">{format(blogs[slug].createdAt, 'MMM do, yyyy')}</span>
        </div>
      ))}
    </div>
  );
}
