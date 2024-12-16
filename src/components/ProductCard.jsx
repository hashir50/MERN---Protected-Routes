import React from 'react'
import { useNavigate } from 'react-router-dom'

// {
//     "id": 36,
//     "title": "Rainbow Glitter High Heels",
//     "price": 39,
//     "description": "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
//     "images": [
//         "https://i.imgur.com/62gGzeF.jpeg",
//         "https://i.imgur.com/5MoPuFM.jpeg",
//         "https://i.imgur.com/sUVj7pK.jpeg"
//     ],
//     "creationAt": "2024-12-06T07:41:50.000Z",
//     "updatedAt": "2024-12-06T07:41:50.000Z",
//     "category": {
//         "id": 4,
//         "name": "الأجهزة المنزلية",
//         "image": "https://i.imgur.com/qNOjJje.jpeg",
//         "creationAt": "2024-12-06T07:41:50.000Z",
//         "updatedAt": "2024-12-06T09:56:20.000Z"
//     }
// }

const ProductCard = ({ data }) => {
    const { title,        price,        images, id } = data

    const navigate = useNavigate()

    const goToDetailsHandle = () => {
        navigate(`/product/${id}`)
    }
    return (
        <div  className='' >

            <img src={images[0]?.replace(/\["|"]/g, "")}  className='w-full h-[250px] rounded-lg' />

            <h1>
                {title}
            </h1>
            <p>${price}</p>


            <button onClick={goToDetailsHandle} className='bg-blue-600 text-white px-3 py-2 rounded-md'>
                View Details
            </button>

        </div>
    )
}

export default ProductCard
