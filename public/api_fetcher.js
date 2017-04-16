var ApiFetcher = function(address){
  this.address = address
  this.types = []
}

ApiFetcher.prototype = {
  
  fetch: function(callback){

    var request = new XMLHttpRequest()

    request.open("GET",this.address)

    request.onload = function(){

      if(request.status === 200){

        var jsonString = request.responseText

        this.types = JSON.parse(jsonString)

        callback(this.types)
      
      }

    }.bind(this)

    request.send()

    console.log(this.types)
  }
}