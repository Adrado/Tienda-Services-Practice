class Employee extends User
{
    constructor(json)
    {
        super(json);
        if(json)
            this.Shift = json.shift;
        else
            this.Shift = "";
    }
}

