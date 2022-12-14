import axios from 'axios'

const baseUrl = "https://dummyjson.com"

const instance = axios.create({
    baseURL: baseUrl
})

// categories
export const getCategories = () => instance.get('/products/categories')


// products
export const getProductsOfCategory = (category) => instance.get(`/products/category/${category}`)

export const getAllProducts = () => instance.get('/products')
