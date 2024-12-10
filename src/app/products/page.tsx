import ProductsView from '@/views/ProductsView/ProductsView'

const Products = () => {
  return (
    <ProductsView />
  )
}

export default Products




// import { getProductsDB } from '@/helpers/product.helper'
// import { IProduct } from '@/interfaces/Types'
// import ProductsView from '@/views/ProductsView/ProductsView'

// const Products = async () => {
//   const products: IProduct[] = await getProductsDB() 

//   return <ProductsView products={products} /> 
// }

// export default Products
