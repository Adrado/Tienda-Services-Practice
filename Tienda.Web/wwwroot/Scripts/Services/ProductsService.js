class ProductsService extends GenericService
{
    constructor($http)
    {
        super($http, "api/products/");
    }
}

app.service("$ProductsService", ProductsService);