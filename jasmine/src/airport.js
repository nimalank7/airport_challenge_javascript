function Airport(){
  this.capacity = []
}
Airport.prototype.land = function(plane) {
  this.capacity.push(plane);
  return true;
}
