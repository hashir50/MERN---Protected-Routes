import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../services/productServices'

const ProductDetails = () => {
  const params = useParams()
  const [details, setDetails] = useState(null)

  const navigate = useNavigate()



  useEffect(() => {
    !(async () => {
      const data = await getProductById(params.id)
      setDetails(data)
    })()

  }, [])


  const goBackHandle = () => {
    navigate('/products')
  }

  return (
    <div className='mt-4 ml-5'>
      <div>
        <button className='bg-blue-600 text-white px-3 py-2 rounded-md' onClick={goBackHandle}>Go Back</button>
      </div>
      {details ? <div className=' my-10' >
        <div className='grid grid-cols-3 space-x-3' >

          <img src={details.images[0]} className='w-full h-[250px] rounded-lg' />
          <div>

            <h1>
              {details.title}
            </h1>
            <p>${details.price}</p>
          </div>

        </div>
      </div> : <div>
        no product found
      </div>}
    </div>
  )
}

export default ProductDetails
