package com.example;

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
    protected void onHelloButtonClick(){
        String nome = txtNome.getText();
        lblSaida.setText("Olá, " + nome + "!");
    }

    @FXML
    private void switchPractice() throws IOException {
        App.setRoot("practice");
    }
}
