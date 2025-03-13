
const loadbutton= async()=>{
 const respon=await fetch("https://openapi.programming-hero.com/api/peddy/categories")
 const data= await respon.json()
 showButton(data.categories)
}

const showButton=(categories)=>{
categories.forEach(element => {
    // console.log(element)
   const cataButton=document.getElementById("button-container")

   const div=document.createElement("div")
  
   div.innerHTML=`
  <button  onclick="loadPaddyFe('${element.category}')" class="btn"
  >${element.category}<img class="w-8" src="${ element.category_icon}" alt=""> </button>

   ` 
   cataButton.appendChild(div)  
});
}

const loadPaddyFe= async(pet)=>{
    // console.log(pet)
const respon=await fetch(`https://openapi.programming-hero.com/api/peddy/category/${pet}`)
const data= await respon.json()
showPaddyDisplay(data.data)

}

const showPaddyDisplay=(datas)=>{
    // console.log(datas)
    
    const paddyShow=document.getElementById("paddy-container")
    paddyShow.innerHTML="";
    if(datas.length==0){
        paddyShow.innerHTML=`
        <div class="flex justify-center items-center col-span-3"
        >
         <img class=""
          src="./images/error.webp" alt="">
        </div>
        `
        return;
    }
datas.forEach(element=>{
    // console.log(element)
    
    const div=document.createElement("div")
    div.classList.add("paddy-card");
    div.innerHTML +=`
    <div class="card bg-base-100  shadow-sm">
                <figure class="px-10 pt-10">
                  <img
                    src="${element.image}"
                    alt="Shoes"
                    class="rounded-xl" />
                </figure>
                <h1 class="pl-7 pt-4 font-bold text-xl">${element.pet_name}</h1>
                <div class="card-body pl-7">
                 <p> <span><i class="fa-solid fa-grip-lines-vertical pr-2"></i></span>Breed: ${element.breed}</p>
                    <p><span><i class="fa-solid fa-calendar pr-2"></i></span>Birth: ${element.date_of_birth}</p>
                    ${element.gender?`<p><span><i class="fa-solid fa-venus pr-2"></i></span>Gender: ${element.gender}</p>`:``}
                    ${element.price?`<p><span><i class="fa-solid fa-dollar-sign pr-2"></i></span>Price : ${element.price}$</p>`:``}
                  <div class="">
                    <button onclick="rightsideShow('${element.image}')" class="btn bg-white"><i class="fa-solid fa-thumbs-up text-green-500"></i></button>
                    <button class="btn text-[#0E7A81] bg-white">Adopt</button>
                    <button onclick="showDetails('${element.petId}')"  class="btn text-[#0E7A81] bg-white">Details</button>
                  </div>
                </div>
              </div>
    `
    paddyShow.appendChild(div) 
})
}

const rightsideShow=(datas)=>{
    // console.log(datas)
    const rightR=document.getElementById("right-container")
    const div=document.createElement("div")
    div.innerHTML=`
   <img class="rounded-md"
    src="${datas}" alt="">
    `
    rightR.appendChild(div)
}

// modal

const showDetails= async(petid)=>{
    const fi=await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petid}`)
    const data=await fi.json()
    const jk=data.petData
    console.log(jk)
    document.getElementById("video_deatils").showModal()
    const del=document.getElementById("deatils-container")

    del.innerHTML=`
   <div class="card bg-base-100 shadow-sm">
        <figure>
            <img src="${jk.image}" alt="Animal Image" />
        </figure>
        <div class="card-body">
            <div class="flex justify-evenly items-center">
                <div>
                    <p><span><i class="fa-solid fa-grip-lines-vertical pr-2"></i></span>Breed:${jk.breed} </p>
                    <p><span><i class="fa-solid fa-venus pr-2"></i></span>Gender:${jk.gender}</p>
                    <p><span><i class="fa-solid fa-syringe pr-2"></i></span>Vaccinated status:${jk.vaccinated_status} </p>
                </div>
                <div>
                    <p><span><i class="fa-solid fa-calendar pr-2"></i></span>Birth:${jk.date_of_birth}</p>
                    <p><span><i class="fa-solid fa-dollar-sign pr-2"></i></span>Price:${jk.price} </p>
                </div>
            </div>
            <p>${jk.pet_details}</p>
        </div>
    </div>
    `; 
}

const deatailShow=async (id)=>{
    const respon=await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    const data=await respon.json()
    console.log(data)

}
// price


loadbutton()
