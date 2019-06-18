class ProductsService extends GenericServices
{
    constructor($http)
    {
        super($http, "api/products/");
    }
}

app.service("$ProductsService", ProductsService);