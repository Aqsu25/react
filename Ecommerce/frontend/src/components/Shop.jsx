import React from 'react'
import Layout from './common/Layout';
import Cards from './common/Cards';
import Breadcrum from './common/Breadcrum';

function Shop() {
  return (
    <Layout>
      <div className='container mx-auto px-2 md:px-4 py-2'>
        <Breadcrum />
        <div className='flex flex-col md:flex-row gap-4'>

          <div className='w-full md:w-1/5 flex flex-col gap-4'>

            <div className='text-black p-6 shadow-2xl rounded-sm'>
              <h1 className='mb-2'>Categories</h1>
              <ul>
                <li className='flex mb-2'>
                  <input type="checkbox" id="cat1" className="rounded-full" />
                  <label htmlFor="cat1" className="ps-4 text-sm
                  ">First name</label>
                </li>
                <li className='flex mb-2'>
                  <input type="checkbox" id="cat2" className="rounded-full" />
                  <label htmlFor="cat2" className="ps-4 text-sm
                  ">First name</label>
                </li>
                <li className='flex mb-2'>
                  <input type="checkbox" id="cat3" className="rounded-full" />
                  <label htmlFor="cat3" className="ps-4 text-sm
                  ">First name</label>
                </li> <li className='flex mb-2'>
                  <input type="checkbox" id="cat4" className="rounded-full" />
                  <label htmlFor="cat4" className="ps-4 text-sm
                  ">First name</label>
                </li>
              </ul>
            </div>

            <div className='text-black p-6 shadow-2xl rounded-sm'>
              <h1 className='font-bold mb-2'>Type</h1>
              <ul>
                <li className='flex mb-2'>
                  <input type="checkbox" id="type1" className="rounded-full" />
                  <label htmlFor="type1" className="ps-4 text-sm">New Arrival</label>
                </li>
                <li className='flex mb-2'>
                  <input type="checkbox" id="type2" className="rounded-full" />
                  <label htmlFor="type2" className="ps-4 text-sm">Best Seller</label>
                </li>
                <li className='flex mb-2'>
                  <input type="checkbox" id="type3" className="rounded-full" />
                  <label htmlFor="type3" className="ps-4 text-sm">On Sale</label>
                </li>
              </ul>
            </div>

          </div>

          <div className='w-full md:w-4/5 rounded-2xl'>
            <Cards />
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Shop;
