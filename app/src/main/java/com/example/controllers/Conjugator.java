package com.example.controllers;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Conjugator {

    private static final String NODE_SCRIPT = "./motor/motor1/conjugator.mjs";

    public static String conjugate(String verb, String grupo, String form) {
        try {
            // Cria processo Node.js
            ProcessBuilder pb = new ProcessBuilder("node", NODE_SCRIPT);
            Process process = pb.start();

            // Escreve a entrada no stdin do Node
            try (OutputStreamWriter writer = new OutputStreamWriter(process.getOutputStream())) {
                writer.write(verb + " " + grupo + " " + form + "\n");
                writer.flush();
            }

            // Lê toda a saída e junta em uma string
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                StringBuilder sb = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    sb.append(line.trim());  // trim() remove \n e espaços extras
                }
                String result = sb.toString();
                return result.isEmpty() ? "" : result;
            }

        } catch (Exception e) {
            e.printStackTrace();
            return "[Erro na conjugação]";
        }
    }
}

