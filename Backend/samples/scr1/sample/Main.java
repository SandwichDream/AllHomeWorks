package sample;

public class Main {

    public static void main(String[] args) {

        Human person1 = new Human("John", "Dropper", Gender.MALE);
        Human person2 = new Human("April", "Smith", Gender.FEMALE);
        Student person3 = new Student("Eduard", "Solace", Gender.MALE, 10, "Pushers");

        Student[] students = new Student[9];

        for (int i = 0; i < students.length; i++) {
            students[i] = new Student("Nick" + i, "Last" + i, Gender.OTHER, i, "Pushers");
        }

        Group group1 = new Group("Pushers", students);

        group1.addStudent(person3);

        System.out.println(person1);
        System.out.println(person2);

        System.out.println(person3);

        System.out.println(group1);

    }

}