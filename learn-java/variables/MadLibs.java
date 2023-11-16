public class MadLibs {
    /*
    This program generates a mad libbed story.
    Author: Luke
    Date: 16/11/2023
    */
        public static void main(String[] args){
        
        String name1 = "Alan";
        String adjective1 = "Happy";
        String adjective2 = "Cheerful";
        String adjective3 = "Merry";
        String verb1 = "Bake";
        String noun1 = "Cheese";
        String noun2 = "Bread";
        String noun3 = "Ham";
        String noun4 = "Bacon";
        String noun5 = "Porkchop";
        String noun6 = "Tupperware"; 
        String name2 = "Jack";
        int number = 10;
        String place1 = "The office";

        //The template for the story
        String story =  "This morning "+name1+" woke up feeling "+adjective1+
                        ". 'It is going to be a "+adjective2+" day!' Outside, a bunch of "+noun1+
                        "s were protesting to keep "+noun2+" in stores. They began to "+verb1+                        " to the rhythm of the "+noun3+
                        ", which made all the "+noun4+"s very "+adjective3+
                        ". Concerned, "+name1+" texted "+name2+", who flew "+name1+" to "+place1+
                        " and dropped "+name1+" in a puddle of frozen "+noun5+". "+name1+
                        " woke up in the year "+number+", in a world where "+noun6+"s ruled the world.";
        
        //Print the story
        System.out.println(story);
    }       
  }