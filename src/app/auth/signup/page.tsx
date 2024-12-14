import Link from 'next/link';
import RegisterForm from '@/components/RegisterForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';

export default async function SignUp() {
  const session = await getServerSession();

  if (session) {
    redirect('/protected');
  }

  return (
    <AuthLayout title="Create an account">
      <RegisterForm />
      <p className="mt-8 text-center text-sm text-gray-400">
        Already have an account?{' '}
        <Link
          href="/auth/signin"
          className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
        >
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
