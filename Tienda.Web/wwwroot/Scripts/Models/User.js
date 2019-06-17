 class  User extends Entity
{
    constructor(json)
    {
        super(json);
        if (json)
        {
            this.Name = json.name;
            this.Surname = json.surname;
            this.Email = json.email;
            this.Password = json.password;
        }
        else
        {
            this.Name = "";
            this.Surname = "";
            this.Email = "";
            this.Password = "";
        }
    }
}
