/**
 * 全局配置文件
 */
let baseURL;
if(process.env.NODE_ENV === 'development'){
  baseURL = 'www.development.com';
}else{
  baseURL = 'www.production.com';
}


export default {baseURL}