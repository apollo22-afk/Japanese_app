module com.example {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.sql;

    opens com.example.controllers to javafx.fxml;
    opens com.example.database to javafx.fxml;

    exports com.example.controllers;
    exports com.example.database;
}
