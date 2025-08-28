package com.example.controllers;

import java.io.IOException;
import javafx.fxml.FXML;
import javafx.scene.control.TextField;
import javafx.scene.control.Label;

public class Menu {

    @FXML
    private TextField txtNome;

    @FXML
    private Label lblSaida;

    @FXML
    private void switchPractice() throws IOException {
        App.setRoot("practice");
    }

    @FXML
    private void switchDatabase() throws IOException {
        App.setRoot("DBverboConj");
    }
}
