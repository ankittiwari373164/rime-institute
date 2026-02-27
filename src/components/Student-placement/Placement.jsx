import React from 'react'
import HeaderPlacement from './HeaderPlacement';
import PlacementCard from './PlacementCard';
import { placementData } from './PlacementData';

const Placement = () => {
  return (
    <div className='mt-20'>
        <HeaderPlacement />
        <div className='my-5 grid lg:grid-cols-3 md:grid-cols-3 gap-5 lg:mx-20 md:mx-15 mx-8'>
        { placementData.map((item, index) => {
            return (
                <div key={index}>
                    <PlacementCard key={item.id} student={item} />
                </div>
            )
        }) }
        </div>
    </div>
  )
}

export default Placement;