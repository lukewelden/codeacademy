public class Droid {
    // instance fields 
    String name;
    int batteryLevel;
  
    // constructor 
    public Droid(String droidName) {
      name = droidName;
      batteryLevel = 100;
    }
  
    public void performTask(String task){
      System.out.println(name + "is performing task: " + task);
      batteryLevel -= 10;
    }
  
    public void batteryStatus(){
      System.out.println(name + " battery level: " + batteryLevel);
    }
  
    public void introduce(){
      System.out.println("Hello, I'm the droid: " + name);
    }
  
    public void transferBattery(Droid targetDroid, int battery) {
      System.out.println("Transferring " + battery + " battery from " + this.name + " to " + targetDroid.name); 
      batteryLevel -= battery; 
      targetDroid.batteryLevel += battery; 
    }
  
    public static void main(String[] args) {
      Droid codey = new Droid("Codey");
      codey.introduce();
      codey.performTask("Jumping on the spot for 5 seconds whilst screaming I'm a balloon!");
      codey.batteryStatus();
  
      Droid r2D2 = new Droid("R2-D2");
      r2D2.introduce();
      r2D2.performTask("Jumping on the spot for 5 seconds whilst screaming I'm a balloon!");
      r2D2.batteryStatus();
  
      // transfering battery 
      codey.transferBattery(r2D2, 20);
      codey.batteryStatus();
      r2D2.batteryStatus();
    }
  }