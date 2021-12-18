let datacf = [
    {
        name: "COFFE CAPUCCINO",
        des: "aloafdiasdhkas",
        img: "lex-sirikiat-VkUP6wWqSvw-unsplash.jpg",
        price: 3.00
    },
    {
        name: "COFFE CAPUCCINO1",
        des: "aloafdiasdhkas",
        img: "nathan-dumlao-vZOZJH_xkUk-unsplash.jpg",
        price: 3.00
    },
    {
        name: "COFFE CAPUCCINO2",
        des: "aloafdiasdhkas",
        img: "cristian-cristian-7CwiC9GFzxA-unsplash.jpg",
        price: 3.00
    },
    {
        name: "COFFE CAPUCCINO3",
        des: "aloafdiasdhkas",
        img: "nathan-dumlao-vZOZJH_xkUk-unsplash.jpg",
        price: 3.00
    }
]

let domShop1 = document.querySelector(".shop1")
domShop1.innerHTML = ""
let arrCart = []



for (let i = 0; i < datacf.length; i++) {
    let html = `    <div class="mon${i + 1}">
<img src="${datacf[i].img}
    " alt="CAFFE" 
    width="193.5" 
    height="200">
<h3>${datacf[i].name}</h3>
<p>${datacf[i].des}</p>
<p class="price">$${datacf[i].price}</p>
<button id="buy${i}" class="button button1">Add to Cart</button>
</div>`

    domShop1.innerHTML += html
}

for (let i = 0; i < datacf.length; i++) {
    document.querySelector(`#buy${i}`).addEventListener("click", () => {
        arrCart.push(datacf[i]);
        renderCart(arrCart);
    });
}


function renderCart(d) {
    let domCart = document.querySelector("#cartCf");
    domCart.innerHTML = "";


    for (let i = 0; i < d.length; i++) {
        let html = `<tr>
          <div class="cart-info">
            <br>
              <a style="href="">Remove</a> 
            <img style="width: 193.5px; height=200 src="${d[i].img}">
            <div>
              <td>
                <p>${d[i].name}</p>
              <p>Far far away, behind the word mountains, far from the countries</p>
              </td>
             <td>
               <small>${d[i].price}</small></td>
            </div>
          </div>
        </td>
        <td><input type="number" value="1"></td>
        <td class="asdf">$10.00</td>
        </div>
        </tr>`;
        domCart.innerHTML += html;
    }

}
