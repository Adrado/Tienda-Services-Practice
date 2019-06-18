class Product extends Entity
{
    constructor(json)
    {
        super(json);
        if (json)
        {
            this.Name = json.name;
            this.Price = json.price;
        }
        else
        {
            this.ProductName = "";
            this.Price = 0;
        }
    }
}

