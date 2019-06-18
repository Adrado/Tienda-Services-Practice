class EmployeesService extends GenericService
{
    constructor($http)
    {
        super($http, "api/employees/");
    }
}

app.service("$EmployeesService", EmployeesService);