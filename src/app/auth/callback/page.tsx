import { onAuthenticateUser } from '@/actions/user';
import { redirect } from 'next/navigation';

const AuthCallbackPage = async () => {
  // authentication
  const auth = await onAuthenticateUser();
  console.log(auth);
  if (auth.status === 200 || auth.status === 201) {
    return redirect(`/dashboard/${auth.user?.workspace[0].id}`);
  }

  // sign in otherwise
  if (auth.status === 400 || auth.status === 403 || auth.status === 500) {
    return redirect('/auth/sign-in');
  }
};

export default AuthCallbackPage;
