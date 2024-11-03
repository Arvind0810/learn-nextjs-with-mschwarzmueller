import { useRef } from 'react';
import classes from './profile-form.module.css';
import { useSession } from 'next-auth/react';

function ProfileForm() {
  const {data, status} = useSession();
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  async function submitHandler(e){
    e.preventDefault();
    const email = data.user.email
    const result = await fetch('/api/user/change-password',{
      method: 'PATCH',
      body: JSON.stringify({
        email: email,
        oldPassword: oldPasswordRef.current.value,
        newPassword: newPasswordRef.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((data) => data.json())
    console.log(result)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref={oldPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
