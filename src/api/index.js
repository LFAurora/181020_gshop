/*
包含n个接口请求函数的模块
函数返回值：promise
 */
import ajax from './ajax'

export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
export const reqFoodTypes = () => ajax('/index_category')
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})
