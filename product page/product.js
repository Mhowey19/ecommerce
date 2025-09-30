fetch("product.json") //gets a local resourse //grabs the file's content returns a promise which as the information or an error
	.then((response) => response.json()) //Parse:looks at and analize the json flie
	.then((data) => {
		//once data is retreved it runs the funciton
		//Loops over the data within the json file
		// array and iterates by 1
		for (let i = 0; i < data.length; i++) {
			let product = data[i]; //Puts the data into a product variable
			let productDiv = `<div class="product-container"> 
				<img src=${product.productImg} class="product-img" />
				<h3 class="product-name">${product.productName}</h3>
				<p class="product-info">${product.productInfo}</p>
				<p class="product-price">$${product.productPrice}</p>
				<button class = "product-btn">Add To Cart</button>
			</div>`;
			//A template Literal that place the values within the html until the array is completed
			document.getElementById("productFlex").insertAdjacentHTML("beforeend", productDiv);
		}
	})
	.catch((error) => console.log("its not working", error));
