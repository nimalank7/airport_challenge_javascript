describe ("Airport", function() {
  var airport;
  var weather;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['status'])
  });
  describe('attempts to land plane', function (){
    it('sets up capacity to empty true responds true', function() {
      expect(airport.capacity).toEqual([]);
    });
    it('responds true when sunny', function() {
      airport.weather = "sunny"
      airport.land(plane);
      expect(airport.capacity.includes(plane)).toBe(true);
    });
    it('responds false when stormy', function() {
      airport.weather = "stormy"
      expect(airport.land(plane)).toBe(false);
    });
  });
  describe('checks whether airport is empty when empty', function (){
    it('and responds true', function() {
      expect(airport.isEmpty()).toBe(true);
    });
    it('and responds false', function() {
      airport.weather = "sunny"
      airport.capacity.push(plane)
      expect(airport.isEmpty()).toBe(false);
    });
  });
  describe('attempts to take off plane', function (){
    it('and returns false if empty', function() {
      airport.weather = "sunny"
      expect(airport.takeOff()).toBe(false);
    });
    it('and returns true if not empty', function() {
      airport.weather = "sunny"
      airport.capacity.push(plane)
      expect(airport.takeOff()).toBe(true);
    });
    it('and returns true if sunny', function() {
      airport.weather = "sunny"
      airport.land(plane)
      expect(airport.takeOff()).toBe(true);
    });
    it('and returns false if stormy', function() {
      airport.weather = "stormy"
      airport.capacity.push(plane)
      expect(airport.takeOff()).toBe(false);
    });
  });
  describe('weather', function (){
    it('sets random weather to stormy or sunny', function() {
      weather = ["stormy", "sunny"]
      expect(weather.includes(airport.weather)).toBe(true);
    });
  });
});
