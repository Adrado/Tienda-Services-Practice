class Client extends User
{
    constructor(json)
    {
        super(json);
        if (json)
        {
            this.Address = json.address;
            this.Purchases = json.purchases;
        }
        else
        {
            this.Address = ""
            this.Purchases = [];
        }
    }
}
