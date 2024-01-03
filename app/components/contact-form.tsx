import { FormEvent } from 'react';

export function ContactForm(): React.ReactNode {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-3xl text-xl">
      <div className="flex flex-col sm:flex-row gap-8 mb-8">
        <div className="flex-1">
          <label htmlFor="name" className="block mb-2 text-xl font-medium text-accent">
            Your Name
          </label>
          <input
            type="text"
            required
            className="w-full resize-none border-b-2 border-accent outline-none"
            style={{ background: 'transparent' }}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="name" className="block mb-2 text-xl font-medium text-accent">
            Your Email
          </label>
          <input
            type="email"
            required
            className="w-full resize-none border-b-2 border-accent outline-none"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>
      <label htmlFor="message" className="block mb-2 text-xl font-medium text-accent">
        Your message
      </label>
      <textarea
        id="message"
        rows={5}
        required
        className="w-full resize-none border-b-2 border-accent outline-none"
        style={{ background: 'transparent' }}
      />
      <button type="submit" className="bg-black font-semibold py-3 px-7 text-white rounded-full mt-8">
        Send Message
      </button>
    </form>
  );
}
