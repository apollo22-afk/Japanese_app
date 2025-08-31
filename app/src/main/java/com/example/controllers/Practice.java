package com.example.controllers;

import java.io.IOException;

import javafx.fxml.FXML;
import javafx.scene.layout.VBox;

public class Practice {

    @FXML
    private VBox popup;

    @FXML
    private void switchToMenu() throws IOException {
        App.setRoot("menu");
    }

    @FXML
    private void switchConjVerbs() throws IOException {
        App.setRoot("verbConj");
    }

    @FXML
    protected void abrirPopup() {
        popup.setVisible(true);
    }

    @FXML
    protected void fecharPopup() {
        popup.setVisible(false);
    }
}