package com.example.controllers;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.URL;
import java.nio.file.Paths;

public class Conjugator {

    // Pega o recurso do classpath
    private static final String NODE_SCRIPT;

    static {
        URL resource = Conjugator.class.getResource("/com/example/motor/conjugator.mjs");
        if (resource == null) {
            throw new RuntimeException("conjugator.mjs não encontrado no classpath!");
        }
        NODE_SCRIPT = Paths.get(resource.getPath()).toAbsolutePath().toString();
    }

    public static String conjugate(String verb, String grupo, String form) {
        try {
            ProcessBuilder pb = new ProcessBuilder("node", NODE_SCRIPT);
            Process process = pb.start();

            // envia dados para o Node
            try (OutputStreamWriter writer = new OutputStreamWriter(process.getOutputStream())) {
                writer.write(verb + " " + grupo + " " + form + "\n");
                writer.flush();
            }

            // lê saída
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                StringBuilder sb = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    sb.append(line.trim());
                }
                return sb.toString();
            }

        } catch (Exception e) {
            e.printStackTrace();
            return "[Erro na conjugação]";
        }
    }
}


