import { observable, action } from 'mobx';

class ProductsStore {
    @observable products = [];

    set products(items){
        this.products=items;
    }
}

const productsStore = new ProductsStore();

export default productsStore;