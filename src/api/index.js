import axios from 'axios';
//拦截器

let base=process.env.API_ROOT;

export const POST=(url,params)=>{
	return axios(`${base}${url}`,params).then(res=>res)
}

export const GET=(url,params)=>{
	return axios(`${base}${url}`,{params:params}).then(res=>res)
}
