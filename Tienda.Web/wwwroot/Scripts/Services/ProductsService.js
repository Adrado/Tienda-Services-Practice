class ProductsService
{
    constructor($http)
    {
        this.Http = $http;
    }

    GetAllAsync()
    {
        return this.Http.get("api/products");
    }

    PostAsync(product)
    {
        return this.Http.post("api/products", product)
    }

    PutAsync(url, product)
    {
        return this.Http.put(url, product)
    }

    DeleteAsync(url)
    {
        return this.Http.delete(url)
    }
}

app.service("$ProductsService", ProductsService);