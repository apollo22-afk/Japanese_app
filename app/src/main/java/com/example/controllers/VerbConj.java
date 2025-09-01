package com.example.controllers;

//import java.io.IOException;
import javafx.fxml.FXML;
import javafx.scene.control.TextField;
import javafx.scene.control.Label;

public class VerbConj {

    private String verbo;
    private String forma;
    private String resultado;
    private String grupo;
    private int acertos;

    @FXML
    private Label pergunta;

    @FXML
    private Label placar;

    @FXML
    private TextField answer;
    
    @FXML
    private void initialize() {
        this.verbo = "食べる";
        this.grupo = "Ichidan";
        this.forma = "Nai";
        this.resultado = Conjugator.conjugate(verbo, grupo, forma);
        placar.setText("Acertos: " + this.acertos);
        pergunta.setText("Conjugue o verbo " + verbo + " na forma " + forma);
    }

    @FXML
    private void novaPergunta(){
        this.verbo = "食べる";
        this.grupo = "Ichidan";
        this.forma = "Nai";
        pergunta.setText("Conjulgue o verbo " + verbo + " na forma " + forma);
        placar.setText("Acertos: " + this.acertos);
        this.resultado = Conjugator.conjugate(verbo, grupo, forma);
    }

    @FXML
    private void Compare(){
        if (answer.getText().trim().equals(this.resultado)){
            this.acertos += 1;
            novaPergunta();

        }

    }
}