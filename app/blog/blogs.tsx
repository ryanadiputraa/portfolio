import { JSX } from 'react';

export interface Blog {
  title: string;
  createdAt: Date;
  content: JSX.Element;
}

export const blogs: { [slug: string]: Blog } = {};
