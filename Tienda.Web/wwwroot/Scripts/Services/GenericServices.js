class GenericServices
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

    PutAsync(urlId, entity)
    {
        return this.Http.put(urlId, entity)
    }

    DeleteAsync(urlId)
    {
        return this.Http.delete(urlId)
    }
}