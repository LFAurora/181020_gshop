/*
包含n个接口请求函数的模块
函数返回值：promise
 */
import ajax from './ajax'
//const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'

export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')
export const reqShops = (longitude,latitude) => ajax(BASE_URL+'/shops',{longitude,latitude})
export const reqSearchShops = (geohash,keyword) => ajax(BASE_URL+'/search_shops',{geohash,keyword})
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode',{phone})
export const reqSmsLogin = (phone,code) => ajax(BASE_URL+'/login_sms',{phone,code},'POST')
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
export const reqLogout = () => ajax(BASE_URL+'/logout')
