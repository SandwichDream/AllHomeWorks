package sample;

public class Product {

    private String name;
    private double price;
    private double weight;

    public Product(String name, double price, double weight) {
        this.name = name;
        this.price = price;
        this.weight = weight;
    }

    public Product() {

    }

    public String toString() {
        return "Продукт [назва = " + name + ", вага = " + weight + ", цiна = " + price + "]";
    }

}