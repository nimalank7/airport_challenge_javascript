function Airport(){
  this.capacity = []
  this.weather = (function(){
    return ["stormy", "sunny"][getRandomIntInclusive(0, 1)];
  }());

  this.land = function(plane) {
    if(this.weather == "stormy"){
      return false;
    } else {
      this.capacity.push(plane);
      return true;
    }
  };

  this.isEmpty = function() {
    return (this.capacity.length == 0 ? true : false);
  };

  this.takeOff = function() {
    if(this.isEmpty() == false && this.weather != "stormy"){
      this.capacity.pop
      return true;
    } else {
      return false;
    }
  };
}
