var TypeMenu = function(listSection){
  this.listSection = listSection
}

TypeMenu.prototype = {
  render: function(types){
    types.results.forEach(this.addType.bind(this))
  },

  addType: function(type,index){
    var typeOption = document.createElement('option')
    console.log(type.name)

    typeOption.value = index
    typeOption.text = type.name

    this.listSection.appendChild(typeOption)
  }
}