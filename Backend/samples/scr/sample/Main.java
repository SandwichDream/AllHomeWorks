package sample;

public class Main {

    public static void main(String[] args) {

        System.out.println(System.lineSeparator() + "Завдання 1 (Продукти)");

        Product banana = new Product("Банан", 39.99, 1);

        Product apple = new Product("Яблуко", 24.89, 1);

        System.out.println("Goods:" + System.lineSeparator() + banana + ";" + System.lineSeparator() + apple);

        ///////////////////////////////////////////////////////

        System.out.println(System.lineSeparator() + "Завдання 2 (Трикутник)");

        Triangle abc = new Triangle(6, 5, 4);

        System.out.println(abc);

    }
}