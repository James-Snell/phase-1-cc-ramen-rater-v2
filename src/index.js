// index.js

//Follow link below shows ramens object in array without key of ramens. Go to db.json file and correctly has key?
fetch('http://localhost:3000/ramens')
  .then(r => r.json())
  .then(ramens=> {
    ramens.forEach((ramen)=> 
    displayRamens(ramen))

  })
  

// Callbacks

const handleClick = (ramens) => {
  // Add code
  e.preventDefault()
  document.getElementById('h2.name').textContent
  document.getElementById('h3.restaurant').textContent



};

const addSubmitListener = ("submit",(e) => {
  // Add code
  document.getElementById('h4')
 

  e.preventDefault()
})

const displayRamens = () => {
  // Add code
  const ramenImage = document.createElement('img')
  ramenImage.src = indivBowl.img_url
  const navbar = document.querySelector("#ramen-menu")
  
  };
  
  const main = () => {
    // Invoke displayRamens here
    navbar.append(ramenImage)
  // Invoke addSubmitListener here
}



main()

// Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// }
