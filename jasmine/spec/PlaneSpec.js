describe ("Fizzbuzz", function() {
  var fizzbuzz;
  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  });
  describe('multiples of 3', function (){
    it('fizzes for 3', function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });
  });

  describe('multiples of 15', function() {
    it('fizzbuzzes for 15', function() {
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
    });
  });

  describe('returns number if not divisible by 3 or 5', function() {
    it('returns number', function() {
      expect(fizzbuzz.play(7)).toEqual(7);
    });
  });
});
