package sample;

import java.util.HashMap;
import java.util.Map;

public class Main {

    public static void main(String[] args) {
        Map<String, String> dictionary = new HashMap<>();

        dictionary.put("Key", "");

        String translatedWord = dictionary.get("Key");

        System.out.println(translatedWord);
    }
}