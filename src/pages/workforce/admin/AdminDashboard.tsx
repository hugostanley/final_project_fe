import { ArtistsList, InviteArtist, WorkforceNavbar } from '@pages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMoneyBillTrendUp, faPenNib } from "@fortawesome/free-solid-svg-icons";

function AdminDashboard() {
  return (
    <main className='w-full h-full bg-ivory'>
      <WorkforceNavbar />
      <section className='w-full h-[92%] p-4 flex flex-col gap-2'>        
        <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-3 p-2">
          <div className="rounded-2xl bg-green row-span-4 p-2 flex flex-col shadow-md">
            <InviteArtist btnColor='yellow' formClassName='flex flex-col gap-4 p-4'/>
            
            <div className='flex flex-col gap-2 p-4 text-ivory'>
              <h2 className='text-2xl tracking-wider'>Newest Artists</h2>
              {/* Note: Latest 5 only*/}
              <ArtistsList />
            </div>
            
          </div>

          <div className='grid-green'>
            <FontAwesomeIcon icon={faMoneyBillTrendUp} className='icon--rounded' />
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl tracking-wider'>Total Sales</h2>
              <h1 className='text-4xl tracking-wider font-bold'>Php 0.00</h1>
            </div>
          </div>

          <div className='grid-green'>
            <FontAwesomeIcon icon={faBagShopping} className='icon--rounded' />
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl tracking-wider'>Pending Orders</h2>
              <h1 className='text-4xl tracking-wider font-bold'>0</h1>
            </div>
          </div>

          <div className='grid-green'>
            <FontAwesomeIcon icon={faPenNib} className='icon--rounded'/>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl tracking-wider'>In Progress</h2>
              <h1 className='text-4xl tracking-wider font-bold'>0</h1>
            </div>
          </div>

          <div className="col-span-2 row-span-3 col-start-2 rounded-2xl border-4 border-green px-6 py-4 shadow-md">
            <h2 className='text-2xl tracking-wider'>Order History</h2>
            {/* <small>Note: Latest 10 only</small> */}
          </div>

          <div className="row-span-3 col-start-4 rounded-2xl border-4 border-green px-6 py-4 shadow-md flex flex-col gap-2">
          <h2 className='text-2xl tracking-wider'>Recent Jobs</h2>
          </div>
        </div>
      
      </section>  
    </main>
  )
}

export default AdminDashboard
