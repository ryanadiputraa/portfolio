'use client';

import { motion } from 'framer-motion';
import { ChangeEvent, FormEvent, useState } from 'react';

import { Form } from '@/api/mail/route';

export function ContactForm(): React.ReactNode {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    message: '',
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    const resp = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!resp.ok) {
      setIsLoading(false);
      setIsError(true);
      setIsSuccess(false);
      return;
    }

    setIsLoading(false);
    setIsError(false);
    setIsSuccess(true);
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-3xl text-xl">
      <div className="flex flex-col sm:flex-row gap-8 mb-8">
        <div className="flex-1">
          <label htmlFor="name" className="block mb-2 text-xl font-medium text-accent">
            Your Name
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full resize-none border-b-2 border-accent outline-none"
            style={{ background: 'transparent' }}
            onChange={handleInput}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="name" className="block mb-2 text-xl font-medium text-accent">
            Your Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full resize-none border-b-2 border-accent outline-none"
            style={{ background: 'transparent' }}
            onChange={handleInput}
          />
        </div>
      </div>
      <label htmlFor="message" className="block mb-2 text-xl font-medium text-accent">
        Your message
      </label>
      <textarea
        name="message"
        rows={5}
        required
        className="w-full resize-none border-b-2 border-accent outline-none"
        style={{ background: 'transparent' }}
        onChange={handleInput}
      />
      <p className={`${isError ? 'opacity-100' : 'opacity-0'} text-red-400`}>
        Fail to send mail, please try again later.
      </p>
      <motion.button
        type="submit"
        disabled={isSuccess}
        className="bg-black font-semibold py-3 px-7 text-white rounded-full mt-8 w-56"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isLoading ? <Spinner /> : isSuccess ? 'Email Sent' : 'Send Message'}
      </motion.button>
    </form>
  );
}

function Spinner(): React.ReactNode {
  return (
    <div role="status" className="flex items-center justify-center">
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-gray-200 animate-spin fill-accent"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
