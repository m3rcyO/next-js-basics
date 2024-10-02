import React from 'react'
import { products } from '@/app/page'


export default function page({ params }) {
    const product = products.find(product => product.name === params.slug.replaceAll('%20', ' '))

    return (
        <div>
            <p>This is the page for the {product.name}</p>
            <p> The price of the {product.name} is {product.price}</p>
        </div>

    )
}
