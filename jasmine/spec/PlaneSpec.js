describe ("Plane", function() {
  var plane;
  beforeEach(function(){
    plane = new Plane();
  });
  describe('sets up an instance of the plane prototype', function (){
    it('responds true', function() {
      expect(Plane.prototype.isPrototypeOf(plane)).toBe(true);
    });
  });
  describe('initializes plane status to land', function (){
    it('returns landed if landed', function() {
      expect(plane.status).toEqual("landed");
    });
  });
});
