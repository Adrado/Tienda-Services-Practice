class EmployeesViewModel
{
    constructor($EmployeesService)
    {
        this.Employees = [];
        this.GridOptions = null;
        this.InitializeTable();
        this.SelectedEmployee = null;
        this.EmployeesService = $EmployeesService;
        this.GetAllEmployees();
        this.IsEditing = false;
    }

    InitializeTable()
    {
        this.GridOptions =
            {
                enableFiltering: false,
                data: 'vm.Employees',
                appScopeProvider: this,
                columnDefs: [
                    { name: 'Name', field: 'Name' },
                    { name: 'Surname', field: 'Surname' },
                    { name: 'Email', field: 'Email' },
                    { name: 'Password', field: 'Password' },
                    { name: 'Shift', field: 'Shift' },
                    { name: '', field: 'Id', cellTemplate: '<input type="button" value="Edit" ng-click="grid.appScope.Select(row.entity)">' },
                    { name: ' ', field: 'Id', cellTemplate: '<input type="button" value="Remove" ng-click="grid.appScope.RemoveEmployee(row.entity)">' }
                ]
            };
    }

    CheckFormAdd(complete)
    {
        if (complete)
        {
            this.AddNewEmployee()
        }
    }

    GetAllEmployees()
    {
        this.EmployeesService.GetAllAsync()
            .then((response) =>
            {
                this.OnGetData(response);
            });
    }

    OnGetData(response)
    {
        this.Employees.length = 0;
        for (let i in response.data)
        {
            let employee = new Employee(response.data[i]);
            this.Employees.push(employee);
        }
    }

    AddNewEmployee()
    {
        let employee = new Employee();
        employee.Name = this.Name;
        employee.Surname = this.Surname;
        employee.Email = this.Email;
        employee.Password = this.Password;
        employee.Shift = this.Shift;
        this.SetData(employee);
    }

    SetData(employee)
    {
        this.EmployeesService.PostAsync(employee)
            .then((response) =>
            {
                this.OnSuccesPost(response);
            },
                response => console.log(response)
            );
    }

    OnSuccesPost(response)
    {
        let employee = new Employee(response.data)
        this.Employees.push(employee);
        this.Clean();
    }

    Clean()
    {
        this.Name = "";
        this.Surname = "";
        this.Email = "";
        this.Password = "";
        this.Shift = "";
    }

    Select(employee)
    {
        this.SelectedEmployee = employee;
        this.Name = employee.Name;
        this.Surname = employee.Surname;
        this.Email = employee.Email;
        this.Password = employee.Password;
        this.Shift = employee.Shift;
        this.IsEditing = true;
    }

    CheckFormSave(complete)
    {
        if (complete)
        {
            this.SaveSelectedEmployee()
        }
    }

    SaveSelectedEmployee()
    {
        this.SelectedEmployee.Name = this.Name;
        this.SelectedEmployee.Surname = this.Surname;
        this.SelectedEmployee.Email = this.Email;
        this.SelectedEmployee.Password = this.Password;
        this.SelectedEmployee.Shift = this.Shift;
        this.SaveEditEmployee();
        this.Clean();
        this.IsEditing = false;
    }

    SaveEditEmployee()
    {
        this.EmployeesService.PutAsync(this.SelectedEmployee)
            .then((response) =>
            {
                this.OnSuccesEdit(response);
            },
                response => console.log(response)
            );
    }

    OnSuccesEdit(response)
    {
        let employee = new Employee(response.data)
        let index = this.Employees.findIndex(x => x.Id == this.SelectedEmployee.Id);
        this.Employees[index] = employee;
    }

    RemoveEmployee(employee)
    {
        this.EmployeesService.DeleteAsync(employee)
            .then((response) =>
            {
                this.OnSuccesRemove(employee);
            },
                response => console.log(response)
            );
    }

    OnSuccesRemove(employee)
    {
        let index = this.Employees.findIndex(x => x.Id == employee.Id);
        this.Employees.splice(index, 1);
    }
}

app.component('employees',
{
    templateUrl: './Scripts/Views/Employees/EmployeesView.html',
    controller: EmployeesViewModel,
    controllerAs: "vm"
    });




