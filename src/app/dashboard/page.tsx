import { onAuthenticateUser } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {};

const DashboardPage = async (props: Props) => {
  // authentication
  const auth = await onAuthenticateUser();
  if (auth.status === 200 || auth.status === 201) {
    // return redirect(`/dashboard/${auth.user?.firstname}${auth.user?.lastname}`);
    return redirect(`/dashboard/${auth.user?.workspace[0].id}`);
  }

  // create user if not already exists
  if (auth.status === 400 || auth.status === 500 || auth.status === 404) {
    return redirect('/auth/sign-in');
  }

  return <div>Loading...</div>;
};

export default DashboardPage;
