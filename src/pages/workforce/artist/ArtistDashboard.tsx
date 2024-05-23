import { LogoutBtn } from '@components';
import { W_LOGOUT_URL } from '@utils';

function ArtistDashboard() {
  return (
    <div>
      <section className='w-full h-full p-2 px-4 flex flex-col gap-2'>
      This is the Artist dashboard.

      <LogoutBtn apiUrl={W_LOGOUT_URL} redirectPath='/w/login' />
    </section>
    </div>
  )
}

export default ArtistDashboard