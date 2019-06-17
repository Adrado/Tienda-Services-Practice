class ProductsViewModel
{
    constructor($http)
    {
        this.Products = [];
        this.Http = $http;
        this.GridOptions = null;
        this.InitializeTable();
        this.SelectedProduct = null;
        this.GetAllProducts();
        this.IsEditing = false;
    }

    InitializeTable()
    {
        this.GridOptions =
            {
                enableFiltering: false,
                data: 'vm.Products',
                appScopeProvider: this,
            columnDefs: [
                { name: 'ProductName', field: 'ProductName' },
                    { name: 'Price', field: 'Price' },
                    { name: '', field: 'Id', cellTemplate: '<input type="button" value="Edit" ng-click="grid.appScope.Select(row.entity)">' },
                    { name: ' ', field: 'Id', cellTemplate: '<input type="button" value="Remove" ng-click="grid.appScope.RemoveProduct(row.entity)">'}
                ]
            };
    }

   

    GetAllProducts()
    {
        this.Http.get("api/products")
            .then((response) => {
                this.OnGetData(response);
            });
    }

    OnGetData(response)
    {
        this.Products.length = 0;
        for (let i in response.data)
        {
            let product = new Product(response.data[i]);
            this.Products.push(product);
        }
    }

    CheckFormAdd(complete)
    {
        if (complete)
        {
            this.AddNewProduct()
        }
    }

    AddNewProduct()
    {
        let product = new Product();
        product.ProductName = this.ProductName;
        product.Price = this.Price;
        this.SetData(product);
    }

    SetData(product)
    {
        this.Http.post("api/products", product)
            .then((response) => {
                this.OnSuccesPost(response);
            },
                response => console.log(response)
            );
    }

    OnSuccesPost(response)
    {
        let product = new Product(response.data)
        this.Products.push(product);
        this.Clean();  
    }

    Clean()
    {
        this.ProductName = "";
        this.Price = 0;
    }

    Select(product)
    {
        this.SelectedProduct = product;
        this.ProductName = product.ProductName;
        this.Price = product.Price;
        this.IsEditing = true;
    }

    CheckFormSave(complete)
    {
        if (complete)
        {
            this.SaveSelectedProduct()
        }
    }

    SaveSelectedProduct()
    {
        this.SelectedProduct.ProductName = this.ProductName;
        this.SelectedProduct.Price = this.Price;
        this.SaveEditProduct();
        this.IsEditing = false;
    }

    SaveEditProduct()
    {
        let url = "api/products/" + this.SelectedProduct.Id;
        this.Http.put(url, JSON.stringify(this.SelectedProduct))
            .then((response) =>
            {
                this.OnSuccesEdit(response);
            },
                response => console.log(response)
            ); 
    }

    OnSuccesEdit(response)
    {
        let product = new Product(response.data)
        let index = this.Products.findIndex(x => x.Id == this.SelectedProduct.Id);
        this.Products[index] = product;
        this.SelectedProduct = null;
        this.Clean();
    }

    RemoveProduct(product)
    {
        let url = "api/products/" + product.Id;
        this.Http.delete(url)
            .then((response) => {
                this.OnSuccesRemove(product);
            },
                response => console.log(response)
            ); 
    }

    OnSuccesRemove(product)
    {
        let index = this.Products.findIndex(x => x.Id == product.Id);
        this.Products.splice(index, 1);
        this.Clean();
    }
}

app.component('products',
{
    templateUrl: './Scripts/Views/Products/ProductsView.html',
    controller: ProductsViewModel,
    controllerAs: "vm"
});