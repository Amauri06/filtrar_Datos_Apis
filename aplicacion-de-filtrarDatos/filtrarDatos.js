
const input = document.getElementById('search')
const userList = document.getElementById('users')

let users = []
//Inicio del programa 
window.addEventListener('DOMContentLoaded', async ()=>{ //este evento hace referencia cuando el don esta cargado
  userList.innerHTML = "Loadin... "
  const data = await loadUser();
  users = data.data;
   renderUsers(users); // datos que se van a mostrar en la ol
})

async function loadUser(){
  const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=1000&_gender=male')
  return await response.json();

}

input.addEventListener('keyup', e =>{//evento que nos da informacion de lo que el usuario escribe
  const newUsers = users.filter(user => `${user.firstname.toLowerCase()}
  ${user.lastname.toLowerCase()}`.includes(input.value.toLowerCase()))
   
  renderUsers(newUsers)

})

const createUserItems = users => users.map(user => `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer "> ${user.firstname} ${user.lastname}</li>`).join(' ')

function renderUsers(users){
  
   const itemsString = createUserItems(users)
   userList.innerHTML = itemsString; // mostrar los datos en la OL
}

