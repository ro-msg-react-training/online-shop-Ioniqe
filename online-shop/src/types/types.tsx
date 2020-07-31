export interface IProduct {
  id: string,
  name: string,
  category: string,
  price: string,
}

export interface Ready {
  id: number,
  name: string,
  category: string,
  price: string,
  quantity: number
}

interface IProductBase{
  name: string,
  category: string,
  image: string,
  description: string,
}

export interface IProductDetails extends IProductBase{
  id: string,
  // name: string,
  // category: string,
  price: string,
  // image: string,
  // description: string,
}

export interface IProductDetailsReady extends IProductBase{
  id: number,
  price: number
}