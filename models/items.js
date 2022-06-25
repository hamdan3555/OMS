class item{
    constructor(id, title, price, URI, categoryId, brandId, description,quantity, userId){
        this.id = id;
        this.title = title;
        this.price = price;
        this.URI = URI;
        this.categoryId=categoryId;
        this.brandId=brandId;
        this.description=description;
        this.quantity=quantity;
        this.userId = userId;
    }
}

export default item;