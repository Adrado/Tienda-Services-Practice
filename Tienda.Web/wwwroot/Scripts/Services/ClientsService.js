class ClientsService extends GenericService
{
    constructor($http)
    {
        super($http, "api/clients/");
    }
}

app.service("$ClientsService", ClientsService);