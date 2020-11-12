

let productNameInput = document.getElementById("productNameInput");
let productPriceInput = document.getElementById("productPriceInput");
let productCategoryInput = document.getElementById("productCategoryInput");
let productDescInput = document.getElementById("productDescInput");
let tableBody = document.getElementById("tableBody")
let productList=[];

function  addProduct()
{
    let product =
{
    name:productNameInput.Value,
    price:productPriceInput.value,
    cateogry:productCategoryInput.value,
    desc:productDescInput.value,
}
  productList.push(product);
  localStorage.setItem("ourproduct", JSON.stringify(productList));
  displayProduct();
}

function displayProduct()
{
    let cartonaa=``;
    for(let i = 0; i<productList.length; i++)
    {
      cartonaa +=`<tr>
                    <td>${i}</td>
                    <td>${productList[i].name}</td>
                    <td>${productList[i].price}</td>
                    <td>${productList[i].category}</td>
                    <td>${productList[i].desc}</td>
                    <td><button class="btn btn-warning">update</button></td>
                    <td><button onclick="deleteProduct(${i})"  class="btn btn-danger">delete</button></td>
               </tr>`;
    }
   tableBody.innerHTML=cartonaa
}


