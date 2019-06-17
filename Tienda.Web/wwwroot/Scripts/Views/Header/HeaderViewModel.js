class HeaderViewModel
{
    constructor()
    {
        
    }
    
    CollapseMenu()
    {
        sidebar.classList.toggle("active");
        Menu.classList.toggle("active");
        Header.classList.toggle("active");
        Content.classList.toggle("active");
    }
}

app.component('header',
{
    templateUrl: './Scripts/Views/Header/HeaderView.html',
    controller: HeaderViewModel,
    controllerAs: "vm"
});