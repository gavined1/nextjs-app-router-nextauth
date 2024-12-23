import Link from 'next/link';
import LoginForm from '@/components/LoginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';

export default async function SignIn() {
  const session = await getServerSession();

  if (session) {
    redirect('/tools');
  }

  return (
    <AuthLayout title="Sign in to your account">
      <LoginForm />
      <p className="mt-8 text-center text-sm text-gray-400">
        Not a member?{' '}
        <Link
          href="/auth/signup"
          className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
        >
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
