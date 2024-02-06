import React from 'react'
import { BagAddress } from './BagAddress';
import { BagOfferZone } from './BagOfferZone';
import { BagProductCard } from './BagProductCard';
import { BagLogin } from './BagLogin';

export const ItemPlace = ({filteredProducts, bagId, selected, setSelected}) => {
  return (
    <div className='item-place'>
                <BagAddress />
                <BagOfferZone />
                <BagProductCard 
                bagId={bagId}
                filteredProducts={filteredProducts}
                selected={selected}
                setSelected={setSelected}
                />
                <BagLogin />
            </div>
  )
}
