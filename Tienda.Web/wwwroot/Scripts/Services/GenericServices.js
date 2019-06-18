class GenericService
{
    constructor(http, url)
    {
        this.Http = http;
        this.Url = url;
    }

    GetAllAsync()
    {
        return this.Http.get(this.Url);
    }

    PostAsync(entity)
    {
        return this.Http.post(this.Url, entity)
    }

    PutAsync(entity)
    {
        let urlID = this.Url + entity.Id;
        return this.Http.put(urlID, entity)
    }

    DeleteAsync(entity)
    {
        let urlID = this.Url + entity.Id;
        return this.Http.delete(urlID)
    }
}