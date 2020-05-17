import {request} from './request'

export function getCategoryListdata(){
  return request({
    url:'data/category/category.json'
  })
}
export function getCategoryListItemdata(sub){
  return request({
    url:'data/category/subcategory/'+sub+'.json'
  })
}
