export type ReviewType = {
  name: string,
  grade: number,
  date: string,
  review: string
}
export type CharacteristicType = {
  title: string,
  value: string
}

export type ProductCardType = {
  _id: string
  title: string
  price: number
  description: string
  imgs: string[],
  category: string
  characteristics: CharacteristicType[],
  reviews: ReviewType[]
}

export type CartItemType = {
  id: string,
  amount: number
}

export type ProfileSliceProduct = {
  id: string,
  amount: number,
  isReview: boolean
}

export type ProfileSliceType = {
  _id: string,
  name: string,
  surname: string,
  email: string,
  password: string,
  orders: {
    products: ProfileSliceProduct[],
    date: string
  }[]
}

export type StateType = {
  favoritesSlice: string[],
  comparisonSlice: string[],
  cartSlice: CartItemType[],
  profileSlice:  ProfileSliceType
}