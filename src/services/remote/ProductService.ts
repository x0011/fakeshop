export class ProductService {
  private apiUrl: string = "https://fakestoreapi.com";
  
  public getAllProducts = async () => {
    const result = await fetch(`${this.apiUrl}/products`, {
      method: "GET"
    })
    return result.json();
  }

  public getAllCategories = async () => {
    const result = await fetch(`${this.apiUrl}/products/categories`, {
      method: "GET"
    })
    return result.json();
  }

}