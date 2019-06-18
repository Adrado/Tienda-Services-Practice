class EmployeesService
{
    constructor($http)
    {
        this.Http = $http;
    }

    GetAllAsync()
    {
        return this.Http.get("api/employees");
    }

    PostAsync(employee)
    {
        return this.Http.post("api/employees", employee)
    }

    PutAsync(url, employee)
    {
        return this.Http.put(url, employee)
    }

    DeleteAsync(url)
    {
        return this.Http.delete(url)
    }
}

app.service("$EmployeesService", EmployeesService);