app = function(){
  //make the apiFetcher to fetch data from the API
  var apiFetcher = new ApiFetcher("http://www.pokeapi.co/api/v2/type")

  //make a renderer for your drop-down
  var typeMenu = new TypeMenu(document.querySelector('#drop-down'))

  // //make a renderer for your profile
  // var profileMaker = new ProfileMaker(document.querySelector('#profile'))

  apiFetcher.fetch(function(types){
    console.log(types)
    typeMenu.render(types)
  })
}

window.onload = app