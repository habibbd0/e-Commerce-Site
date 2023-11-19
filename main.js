// product data 
const eCommerceData = [
	{ 
		id :1,
		productName: "LED Desk Lamp",
		productImage: "https://m.media-amazon.com/images/I/51qDIC9X+1L._AC_UF894,1000_QL80_.jpg",
		productPrice: 34.99,
		productCategory: "Home & Living",
		productRating: 4.5
	  },
	  { 
		id:2,
		productName: "Leather Wallet",
		productImage: "https://images.othoba.com/images/thumbs/0473243_mens-genuine-leather-wallet.jpeg",
		productPrice: 49.99,
		productCategory: "Fashion",
		productRating: 4.7
	  },
	  { 
		id:3,
		productName: "Stainless Steel Water Bottle",
		productImage: "https://www.iferi.com/cdn/shop/products/266516941_3237303923158992_3704577494295886156_n_2f9ef57e-12c0-4637-982c-14c18c752e87.jpg?v=1677537977",
		productPrice: 19.99,
		productCategory: "Fitness",
		productRating: 4.2
	  },
	  { 
		id:4,
		productName: "Wireless Gaming Mouse",
		productImage: "https://www.startech.com.bd/image/cache/catalog/mouse/xtrfy/mz1-rgb-wireless/mz1-rgb-wireless-07-500x500.jpg",
		productPrice: 69.99,
		productCategory: "Computer Accessories",
		productRating: 4.8
	  },
	  { 
		id:5,
		productName: "Comfortable Office Chair",
		productImage: "https://m.media-amazon.com/images/I/71EjcW-fX0L._AC_UF894,1000_QL80_.jpg",
		productPrice: 149.99,
		productCategory: "Furniture",
		productRating: 4.6
	  },
	  { 
		id:6,
		productName: "HD Smart TV",
		productImage: "https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		productPrice: 799.99,
		productCategory: "Electronics",
		productRating: 4.5
	  },
	  { 
		id:7,
		productName: "Stainless Steel Water Bottle",
		productImage: "https://www.iferi.com/cdn/shop/files/ALP1657_bf73d015-83f0-4868-8c6f-6b7ab99bd949.jpg?v=1697092613",
		productPrice: 19.99,
		productCategory: "Fitness",
		productRating: 4.3
	  },
	  { 
		id:8,

		productName: "Casual Backpack",
		productImage: "https://www.penguin.com.bd/wp-content/uploads/2018/09/Xiaomi-Mi-Casual-College-Backpack-Black-2.jpg",
		productPrice: 39.99,
		productCategory: "Travel Accessories",
		productRating: 4.9
	  }
]

function showProduct() {
  const showContainer = document.getElementById('productContainer');

  for(let object of eCommerceData) {
	// console.log(object);
	const data = document.createElement('div');

	data.innerHTML = `
	<div class=" max-w-6xl mx-auto h-96 card bg-base-100 shadow-xl border">
  <figure class="w-full h-full border">
  <img class="border overflow-hidden mx-auto w-full h-full opacity-70 hover:opacity-100 transition-all duration-700 hover:scale-105 " src="${object.productImage}" alt="Shoes" />
  </figure>
  <div class="font-serif px-4">
   <div class="flex justify-between items-center mt-4">
   <h1 class="text-">Price: $${object.productPrice} </h1>
   <h2 class="text-">Ratting: ${object.productRating} </h2>

    </div>
    <h3 class="card-title mb-4 mt-1">${object.productCategory}</h3>
    <p></p>
    <div class="card-actions justify-center mb-4 ">
      <button onclick="showAddToCard(this)" class="btn btn-primary btn-sm btn-outline" >Add to Cart</button>
    </div>
  </div>
</div>
	`;
	showContainer.appendChild(data);
  }
}
showProduct()

function showAddToCard(event) {
	const addShopingCard = document.getElementById('addShopingCart')
     const itemImg =event.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src;
	 const itemName = event.parentNode.parentNode.childNodes[3].innerText;
	 const itemPrice = event.parentNode.parentNode.childNodes[1].innerText;
    //    console.log(itemImg);
	 const div = document.createElement('div');
	 div.classList="card"
	 div.innerHTML =`
	 <div class="flex items-center gap-2">
	 <div class="card-body class="w-10 h-4 border" id="cardContainer">
	 <img class="w-full h-full" src="${itemImg}" alt="image">
	 </div>
	 <div>
		<h2 class="text-md font-serif">${itemName} </h2>
		<h2 class="text-md font-serif">${itemPrice} </h2>
	 </div>
	 </div>
	
	 `;
	 addShopingCard.appendChild(div)

}
