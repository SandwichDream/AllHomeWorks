package sample;

import sample.exceptions.GroupOverflowException;
import sample.exceptions.SameIdException;
import sample.exceptions.StudentNotFoundException;

public class Group {

    private String groupName;
    private Student[] students = new Student[10];
    private int size;

    public Group(String groupName, Student[] students) {
        this.groupName = groupName;
        this.students = students;
        this.size = students.length;
    }

    public Group(String groupName) {
        this.groupName = groupName;
    }

    public Group() {

    }

    public void addStudent(Student student) throws GroupOverflowException, SameIdException {
        if (size >= students.length) {
            throw new GroupOverflowException("Group is full. Cannot add more students.");
        } else {
            for (int i = 0; i < students.length; i++) {
                if (students[i].getId() == student.getId()) {
                    throw new SameIdException("This id is already taken");
                }
            }
        }
        students[size++] = student;
    }

    public Student searchStudentByLastName(String lastName) throws StudentNotFoundException {
        for (int i = 0; i < size; i++) {
            if (students[i].getLastName().equals(lastName)) {
                return students[i];
            }
        }
        throw new StudentNotFoundException("Student with last name '" + lastName + "' not found");
    }

    public String removeStudentByID(int id) throws StudentNotFoundException {
        for (int i = 0; i < size; i++) {
            if (students[i].getId() == id) {
                students[i] = students[size - 1];
                students[size - 1] = null;
                size--;
                return "Done";
            }
        }
        throw new StudentNotFoundException("Student with id '" + id + "' not found.");
    }

    public String getGroupName() {
        return groupName;
    }

    private String studentsToString() {
        String result = "";
        for (int i = 0; i < students.length; i++) {
            if (i == students.length - 1) {
                result += students[i].getName() + " " + students[i].getLastName();
            } else {
                result += students[i].getName() + " " + students[i].getLastName() + ", ";
            }

        }
        return result;
    }

    @Override
    public String toString() {
        return "Group: " + groupName
                + System.lineSeparator() + "Students: " + studentsToString();
    }

}
