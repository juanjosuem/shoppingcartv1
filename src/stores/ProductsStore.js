import { observable, action, computed } from 'mobx';

class ProductsStore {
    @observable products = [];
    @observable itemsInCart = [];

        
    /*set products(items){
        this.products=items;
    }*/
    
    @action
    addToCart(product){
      
        const productFound=this.itemsInCart.find(item=>item.id===product.id);
        if(productFound){
            productFound.quantity++;
        }else{
            product['quantity']=1;
            this.itemsInCart.push(product);
        }     
    }

    getSubTotal(item){
        return item.price * item.quantity;
    }

    @computed
    get totalCart(){
        let total=0;
        this.itemsInCart.forEach(item=>{
            total+=this.getSubTotal(item);
        });
        return total;
    }

}

const productsStore = new ProductsStore();

export default productsStore;