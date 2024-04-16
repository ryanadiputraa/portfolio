import { Header } from './header';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-[100vh] pt-20 pb-4 px-[4%] max-w-5xl mx-auto">{children}</main>
    </>
  );
}
