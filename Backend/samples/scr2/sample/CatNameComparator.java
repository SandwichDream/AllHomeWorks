package sample;

import java.util.Comparator;

public class CatNameComparator implements Comparator {

    @Override
    public int compare(Object o1, Object o2) {
        Cat cat1 = (Cat) o1;
        Cat cat2 = (Cat) o2;
        Integer age1 = cat1.getAge();
        Integer age2 = cat2.getAge();

        if (age1.compareTo(age2) > 0) {
            return 1;
        }
        if (age1.compareTo(age2) < 0) {
            return -1;
        }

        return 0;
    }

}