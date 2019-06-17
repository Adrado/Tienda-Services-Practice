class UsersViewModel
{
    constructor($http)
    {
        this.Users = [];
        this.Http = $http;
        this.GetAllUsers();
        this.InitializeTable()
    }

    InitializeTable()
    {
        this.GridOptions =
            {
                enableFiltering: false,
                data: 'vm.Users',
                appScopeProvider: this,
                columnDefs: [
                    { name: 'Name', field: 'Name' },
                    { name: 'Surname', field: 'Surname' },
                    { name: 'Email', field: 'Email' },
                ]
            };
    }

    GetAllUsers()
    {
        this.Http.get("api/users")
            .then((response) =>
            {
                this.OnGetData(response);
            });
    }

    OnGetData(response)
    {
        this.Users.length = 0;
        for (let i in response.data)
        {
            let user = new User(response.data[i]);
            this.Users.push(user);
        }
        console.log(response)
    }

}

app.component('users',
{
    templateUrl: './Scripts/Views/Users/UsersView.html',
    controller: UsersViewModel,
    controllerAs: "vm"
    });




