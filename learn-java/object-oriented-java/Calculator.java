public class Calculator {
    public Calculator() {}
  
    public double add(double a, double b) {
      return a + b;
    }
  
    public double subtract(double a, double b) {
      return a - b;
    }
  
    public double multiply(double a, double b) {
      return a * b;
    }
  
    public double divide(double a, double b) {
      return a / b;
    }
  
    public double modulo(double a, double b) {
      return a % b;
    }
  
    public static void main(String[] args) {
      Calculator myCalculator = new Calculator();
      System.out.println("5 x 7 = "+myCalculator.add(5,7));
      System.out.println("45 - 11 = "+myCalculator.subtract(45,11));
      System.out.println("456 / 9 = "+myCalculator.divide(456,9));
    }
  }