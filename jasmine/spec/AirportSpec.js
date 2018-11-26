describe ("Airport", function() {
  var airport;
  beforeEach(function(){
    airport = new Airport();
  });
  describe('sets up capacity to empty array', function (){
    it('responds true', function() {
      expect(airport.capacity).toEqual([]);
    });
  });
  describe('lands plane and stores in capacity array', function (){
    it('responds true', function() {
      airport.land("Plane");
      expect(airport.capacity.includes("Plane")).toBe(true);
    });
  });
});
