'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logoutAction } from '@/redux/slices/userSlice';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = useAppSelector((state) => state.user);

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
  };
  return (
    <nav className="sticky top-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <h1>Logo</h1>

          {Boolean(id) ? (
            <div className="flex items-center gap-8">
              <h3 onClick={()=> router.push('/')}>Home</h3>
              <h3 onClick={()=> router.push('/write')}>Write</h3>
              <h3 onClick={()=> router.push('/profile')}>Profile</h3>
              <Button variant='ghost' onClick={logout}>Logout</Button>
            </div>
          ) : (
            <div className="flex items-center gap-8">
              <h3>Home</h3>
              <h3 className="cursor-pointer" onClick={()=> router.push('/write')}>Write</h3>
              <h3 className="cursor-pointer" onClick={()=> router.push('/login')}>Login</h3>
              <h3 className="cursor-pointer" onClick={()=> router.push('/register')}>Register</h3>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
