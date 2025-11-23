fetch("http://hplusport.com/api/products")
.then(function(res){
    return res.json();
      }
)
.then(function(jsonData){
    for(let items in jsonData){
        //Display all product names
        var productName = jsonData[items].name;
        var product = document.createElement('li');
        product.innerHTML = productName;
        document.body.appendChild(product);
        
        //Display all product images
        var productImg = jsonData[items].image;
        var image = document.createElement('img');
        image.setAttribute('src',productImg);
        document.body.appendChild(image);
    }
});
        
        