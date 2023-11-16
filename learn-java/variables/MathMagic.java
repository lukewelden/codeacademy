public class MathMagic {
	public static void main(String[] args) {
        // Original number 
        int myNumber = 101; 
        
        // Math Magic 
        int magicNumber = myNumber * myNumber;
        magicNumber += myNumber;
        magicNumber /= myNumber; 
        magicNumber += 17;
        magicNumber -= myNumber;
        magicNumber /= 6; 

        // Print result to console 
        System.out.println(magicNumber);
	}
}