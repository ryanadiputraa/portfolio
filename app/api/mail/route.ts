import { sendMail } from '@/lib/nodemailer';

export interface Form {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const data: Form = await req.json();
    await sendMail(data);
    return Response.json({ data: { message: 'ok' } });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Bad Request' }), {
      status: 400,
    });
  }
}
