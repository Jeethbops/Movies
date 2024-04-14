import { Axios } from "axios";



const MainSection = ()=>{
    return(
        Axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/", function (response) {
            var productData = response;
            for (var i = 0; i < productData.length; i++) {
              if (productData[i].isAccessory == false) {
                clothingSection.innerHTML +=
                  `<div class="product-card" id="${productData[i].id}" onclick="clickedOnTheProduct(${productData[i].id})">
                      <a href="2page.html?p=${productData[i].id}">
                          <img src="${productData[i].preview}" class="product-image"/>
                      </a>
                      <div class="product-details">
                          <h3 class="product-name">${productData[i].name}</h3>
                          <h4 class="product-brand">${productData[i].brand}</h4>
                          <h5 class="product-price">Rs ${productData[i].price}</h5>
                      </div>
                  </div>`
              } else {
                accessorySection.innerHTML +=
                  `<div class="product-card" id="${productData[i].id}" onclick="clickedOnTheProduct(${productData[i].id})">
                      <a href="2page.html?p=${productData[i].id}">
                          <img src="${productData[i].preview}" class="product-image"/>
                      </a>
                      <div class="product-details">
                          <h3 class="product-name">${productData[i].name}</h3>
                          <h4 class="product-brand">${productData[i].brand}</h4>
                          <h5 class="product-price">Rs ${productData[i].price}</h5>
                      </div>
                  </div>`
          
              }
            }
          })
    )

}
export default MainSection;
