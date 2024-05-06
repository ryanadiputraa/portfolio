import Link from 'next/link';
import { format } from 'date-fns';

import { blogs } from './blogs';

export default function Blog() {
  if (!blogs.length) {
    return <div className="grid place-items-center">No post yet.</div>;
  }
  return (
    <div className="flex flex-col gap-4">
      {blogs.map((blog) => (
        <div key={blog.title} className="flex items-center justify-between">
          <div>
            <span className="mr-4">{'>>'}</span>
            <Link href={'/'} className="text-lg font-semibold border-b-2 border-b-transparent hover:border-b-accent">
              {blog.title}
            </Link>
          </div>
          <span className="text-sm">{format(blog.createdAt, 'MMM do, yyyy')}</span>
        </div>
      ))}
    </div>
  );
}
