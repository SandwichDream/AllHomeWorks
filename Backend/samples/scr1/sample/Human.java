package sample;

public class Human {

    private String name;
    private String lastName;
    private Gender gender;

    public Human(String name, String lastName, Gender gender) {
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
    }

    public Human() {

    }

    public String getName() {
        return name;
    }

    public String getLastName() {
        return lastName;
    }

    public Gender getGender() {
        return gender;
    }

    @Override
    public String toString() {
        return "Person: " + name + " " + lastName
                + System.lineSeparator() + "Gender: " + gender + System.lineSeparator();
    }

}
