package com.example.database;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class InitDB {
    public static void init() {

        String verbs = "CREATE TABLE IF NOT EXISTS verbs (" +
                                    "id INTEGER PRIMARY KEY AUTOINCREMENT," +
                                    "verb TEXT NOT NULL," +
                                    "translation TEXT NOT NULL," +
                                    "type TEXT NOT NULL);";

        try (Connection conn = Database.getConnection();
             Statement stmt = conn.createStatement()) {

            //stmt.execute(sql);
            //stmt.execute(frases);
            //stmt.execute(verbos_uso);
            stmt.execute(verbs);
            System.out.println("Tabela criada com sucesso!");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
