fetch("product.json") //gets a local resourse //grabs the file's content returns a promise which as the information or an error
	.then((response) => response.json()) //Parase:looks at and analize the json flie
	.then((data) => {
		console.log(data);
		//for loop
		for (let i = 0; i < data.length; i++) {
			let product = data[i];
			let productDiv = `<div class="product-container"> 
				<img src=${product.productImg} class="product-img" />
				<h3 class="product-name">${product.productName}</h3>
				<p class="product-info">${product.productInfo}</p>
				<p class="product-price">$${product.productPrice}</p>
			</div>`;
			document.getElementById("productFlex").insertAdjacentHTML("beforeend", productDiv);
		}
	})
	.catch((error) => console.log("its not working", error));
