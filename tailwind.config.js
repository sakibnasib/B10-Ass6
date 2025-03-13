// 
// breed
// : 
// "Siamese"
// category
// : 
// "Cat"
// date_of_birth
// : 
// "2022-09-05"
// gender
// : 
// "Female"
// image
// : 
// "https://i.ibb.co.com/3Wzz41D/pet-2.jpg"
// petId
// : 
// 2
// pet_details
// : 
// "This affectionate female Siamese cat is known for her vocal nature and love for attention. Born on September 5, 2022, she enjoys interactive play and snuggles. Fully vaccinated and priced at $800, she's the perfect fit for cat lovers who appreciate an intelligent, engaging, and sociable feline companion."
// pet_name
// : 
// "Mia"
// price
// : 
// 800
// vaccinated_status
// : 
// "Fully"



<div class="card bg-base-100  shadow-sm">
  <figure>
    <img
      src="${element.image_url}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <div class=" flex justify-evenly items-center">
<div>
<p> <span><i class="fa-solid fa-grip-lines-vertical pr-2"></i></span>Breed: ${element.breed}</p>
<p><span><i class="fa-solid fa-venus pr-2"></i></span>Gender: ${element.gender}</p>
<p> <span><i class="fa-solid fa-syringe pr-2"></i></span>Vaccinated status: Partially</p>
</div>
<div>
<p><span><i class="fa-solid fa-calendar pr-2"></i></span>Birth: ${element.date_of_birth}</p> 
<p><span><i class="fa-solid fa-dollar-sign pr-2"></i></span>Price : ${element.price}$</p>
</div>
    </div>
    <p>${element.title}</p>
  </div>
</div>




{/* <p><span><i class="fa-solid fa-dollar-sign pr-2"></i></span>Price : ${element.price}$</p> */}

right.innerHTML=`
<figure class="px-10 pt-10">
              <img
                src="${firstPet.image}"
                alt="Shoes"
                class="rounded-xl" />
            </figure>
`;
image

const right=document.getElementById("right-container")


<p><span><i class="fa-solid fa-calendar pr-2"></i></span>Birth: </p>
