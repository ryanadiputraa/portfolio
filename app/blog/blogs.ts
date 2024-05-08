export interface Blog {
  title: string;
  createdAt: Date;
}

export const blogs: { [slug: string]: Blog } = {};
