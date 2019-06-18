class EmployeesService extends GenericServices
{
    constructor($http)
    {
        super($http, "api/employees/");
    }
}

app.service("$EmployeesService", EmployeesService);