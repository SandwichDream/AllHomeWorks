package sample;

public class Triangle {

    private double a;
    private double b;
    private double c;

    public Triangle(double a, double b, double c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public Triangle(int a, int b, int c) {
        this.a = (double) a;
        this.b = (double) b;
        this.c = (double) c;
    }

    public Triangle(double a, int b, int c) {
        this.a = a;
        this.b = (double) b;
        this.c = (double) c;
    }

    public Triangle(int a, double b, int c) {
        this.a = (double) a;
        this.b = b;
        this.c = (double) c;
    }

    public Triangle(int a, int b, double c) {
        this.a = (double) a;
        this.b = (double) b;
        this.c = c;
    }

    public Triangle(double a, double b, int c) {
        this.a = a;
        this.b = b;
        this.c = (double) c;
    }

    public Triangle(double a, int b, double c) {
        this.a = a;
        this.b = (double) b;
        this.c = c;
    }

    public Triangle(int a, double b, double c) {
        this.a = (double) a;
        this.b = b;
        this.c = c;
    }

    public Triangle() {

    }

    public double getPer() {
        return (this.a + this.b + this.c) / 2;
    }

    public double getAre() {
        double p = this.getPer();
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }

    public String toString() {
        return "Трикутник [перша сторона = " + a + ", друга сторона = " + b + ", третя сторона = " + c + "]"
                + System.lineSeparator() + "Периметр = " + this.getPer() + System.lineSeparator() + "Площа = "
                + this.getAre();
    }

}