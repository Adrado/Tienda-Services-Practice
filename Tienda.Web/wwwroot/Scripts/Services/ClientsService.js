class ClientsService extends GenericServices
{
    constructor($http)
    {
        super($http, "api/clients");
    }
}

app.service("$ClientsService", ClientsService);