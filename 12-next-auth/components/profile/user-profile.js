import { useSession } from 'next-auth/react';
import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import Link from 'next/link';

function UserProfile() {
  // Redirect away if NOT auth
  const {data, status} = useSession()
  console.log(status)
  if(status === 'loading'){
    return <div className={classes.profile}>Loading...</div>
  }
  if(status === 'unauthenticated'){
    return <div className={classes.profile}>Please login to see your profile <Link href="/auth">Sign in</Link></div>
  }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
