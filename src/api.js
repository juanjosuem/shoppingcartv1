import axios from 'axios';

const Api={
    
    api_url:'http://5b391d33e1f26d0014569eed.mockapi.io/api/v1/products',
           
    getProducts(){
        return axios.get(this.api_url);
    },
    getProduct(id){
        return axios.get(this.api_url+'/'+id);
    }

}

export default Api;