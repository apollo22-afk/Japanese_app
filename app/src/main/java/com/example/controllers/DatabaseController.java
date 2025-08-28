package com.example.controllers;

import com.example.database.Database;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javafx.collections.FXCollections;
import javafx.fxml.FXML;
import javafx.scene.control.TextField;
import javafx.scene.control.ComboBox;
import javafx.scene.text.Font;
import javafx.scene.control.Label;

public class DatabaseController {
    @FXML
    private TextField insertVerbs;

    @FXML
    private TextField insertTranslation;

    @FXML
    private ComboBox<String> type;

    @FXML
    private Label teste;

    public void listarFrases() {
        /*try (Connection conn = Database.getConnection()) {
            ResultSet rs = conn.createStatement().executeQuery("SELECT * FROM frases");
            while (rs.next()) {
                System.out.println(rs.getInt("id") + " | " +
                                   rs.getString("japones") + " -> " +
                                   rs.getString("traducao"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }*/
    }

    @FXML
    public void initialize() {
        type.setItems(FXCollections.observableArrayList("Ichidan", "Godan", "Irregular"));
        Font noto = Font.loadFont(getClass().getResourceAsStream("/fonts/NotoSansJP-Regular.ttf"), 16);
        teste.setFont(noto);
        insertVerbs.setFont(noto);    }

    @FXML
    public void inserirVerbos(){
        //conexão com o banco de dados
        try (Connection conn = Database.getConnection()){

            String verb = insertVerbs.getText();
            String translation = insertTranslation.getText();
            String selected = type.getValue();

            String sql = "INSERT INTO verbs (verb, translation, type) VALUES (?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);


            if (verb != null && !verb.isBlank() &&
                translation != null && !translation.isBlank() &&
                selected != null && !selected.isBlank()){
                
                stmt.setString(1, verb);
                stmt.setString(2, translation);
                stmt.setString(3, selected);
                stmt.executeUpdate();
            }else

                stmt.setString(1, "食べる"); // exemplo japonês
                stmt.setString(2, "comer");
                stmt.setString(3, "Ichidan");
                stmt.executeUpdate();
                System.out.println("valores gravados com sucesso");
                //throw new IllegalArgumentException("Preencha todos os campos!");
            
        } catch (Exception e) {
            e.printStackTrace();
        }  
    }
}
