class ClientsService
{
    constructor($http)
    {
        this.Http = $http;
    }

    GetAllAsync()
    {
        return this.Http.get("api/clients");
    }

    PostAsync(client)
    {
        return this.Http.post("api/clients", client)   
    }

    PutAsync(url, client)
    {
        return this.Http.put(url, client)
    }
    
    DeleteAsync(url)
    {
        return this.Http.delete(url)
    }
}

app.service("$ClientsService", ClientsService);