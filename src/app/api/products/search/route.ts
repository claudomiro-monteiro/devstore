import { z } from 'zod'
import type { NextRequest } from 'next/server'

import data from '../data.json'

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}

// import { z } from 'zod'
// import data from '../data.json'

// export async function GET(
//   request: Request,
//   { params }: { params: { slug: string } },
// ) {
//   await new Promise((resolve) => setTimeout(resolve, 1000))

//   const slug = z.string().parse(params.slug)

//   const product = data.products.find((product) => product.slug === slug)

//   if (!product) {
//     return Response.json({ message: 'Product not found.' }, { status: 400 })
//   }

//   return Response.json(product)
// }
