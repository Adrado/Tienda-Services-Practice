class PurchasesViewModel
{
    constructor($ClientsService, $ProductsService)
    {
        this.ClientsService = $ClientsService;
        this.ProductsService = $ProductsService;
        this.SelectedClient = null;
        this.Clients = [];
        this.GetAllClients();
        this.SelectedProduct = null;
        this.Products = [];
        this.GetAllProducts();
        this.InitializeTable();
    }

    GetAllClients()
    {
        this.ClientsService.GetAllAsync()
            .then((response) =>
            {
                this.OnGetDataClient(response);
            });
    }

    OnGetDataClient(response)
    {
        this.Clients.length = 0; 

        for (let i in response.data) 
        {
            let client = new Client(response.data[i]);
            this.Clients.push(client);
        }
    }

    GetAllProducts()
    {
        this.Http.get('api/products')
            .then((response) =>
            {
                this.OnGetDataProduct(response);
            });
    }

    OnGetDataProduct(response)
    {
        this.Products.length = 0; 

        for (let i in response.data)  
        {
            let product = new Product(response.data[i]);
            this.Products.push(product);
        }
    }

    InitializeTable()
    {
        this.GridOptions =
            {
                enableFiltering: false,
                data: 'vm.SelectedClient.Purchases',
                appScopeProvider: this,
                columnDefs: [
                    { name: 'Producto', field: 'Purchases' },
                    { name: '', field: 'Id', cellTemplate: '<input type="button" value="Existe" ng-click="grid.appScope.Select(row.entity)">' },
                ]
            };
    }

    CheckFormSave(complete)
    {
        if (complete)
        {
            this.SaveSelectedClient()
        }
    }

    SaveSelectedClient()
    {
        console.log(this.SelectedClient);
        this.SelectedClient.Purchases.push(this.SelectedProduct.ProductName);
        this.SaveEditClient();
        this.IsEditing = false;
    }

    SaveEditClient()
    {
        this.ClientsService.PutAsync(this.SelectedClient)
            .then((response) =>
            {
                this.OnSuccesEdit(response);
            },
                response => console.log(response)
            );
    }

    OnSuccesEdit(response)
    {
        let client = new Client(response.data)
        let index = this.Clients.findIndex(x => x.Id == this.SelectedClient.Id);
        this.Clients[index] = client;
        this.SelectedClient = null;
        this.SelectedProduct = null;
        console.log(response);
    }
    
}

app.component('purchases',
    {
        templateUrl: './Scripts/Views/Purchases/PurchasesView.html',
        controller: PurchasesViewModel,
        controllerAs: "vm"
    });

