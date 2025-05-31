import React from 'react'
import PropLists from '../propertiesfeatures/PropLists';
import PopularProp from '../propertiesfeatures/PopularProp';

const HomePage = () => {
  
  
  return (
    
    
    <>
    <main className='bg-white'>
      <div className=''>
        <section>
         <PropLists/>
        </section>
        
        <section>
          <PopularProp/>
        </section>
      </div>

    </main>
     </>
  )
}

export default HomePage