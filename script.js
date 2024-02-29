const loadPhone = async (searchText , isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones , isShowAll);
}

const displayPhone = (phones,isShowAll) =>{

    const phoneContainer = document.getElementById('phone-container');
// Clear Phone Container cards before adding new cards
phoneContainer.textContent = '';
// display show all button if there are more than 12 phones
const showAllContainer = document.getElementById('show-all-container');
if(phones.length > 12 && !isShowAll){
    showAllContainer.classList.remove('hidden');
}
else{
    showAllContainer.classList.add('hidden');
}
//Set display content limit
if(!isShowAll){
    phones = phones.slice(0,12);

}

phones.forEach(phone => {
    console.log(phone);
// Create a DIV
const phoneCard = document.createElement('div');
phoneCard.classList =`card p-4  bg-red-100 shadow-xl`;
phoneCard.innerHTML = `
<figure><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-center">
                    <button onclick="" class="btn btn-primary">Show Details</button>
                  </div>
                </div>
              </div> `;
    phoneContainer.appendChild(phoneCard);




});
toggleLoadingSpinner(false);
}

const handleSearchButton = (isShowAll) =>{
    toggleLoadingSpinner(true);
   const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
   loadPhone(searchText, isShowAll);
  
}

const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
    
}


// handle Show All
const handleShowAll = () =>{
    handleSearchButton(true);
}