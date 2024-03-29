package sample;

public class Student extends Human {

    private int id;
    private String groupName;

    public Student(String name, String lastName, Gender gender, int id, String groupName) {
        super(name, lastName, gender);
        this.id = id;
        this.groupName = groupName;
    }

    public Student() {

    }

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Student: " + getName() + " " + getLastName()
                + System.lineSeparator() + "Gender: " + getGender()
                + System.lineSeparator() + "Group: " + groupName
                + System.lineSeparator() + "id: " + id + System.lineSeparator();
    }

}
