/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ClaseDAO;

import Clases.Factura;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author helen
 */
public class FacturaDAO extends Conexion.Conexion {

    private PreparedStatement PST = null;
    private String error;
    
    public JsonArray ListadoFactura() {
        JsonArray listadoeven = new JsonArray();
        Factura factura;
        String sentencia = "SELECT * FROM factura;";
        if (this.Connexion()) {
            try {
                PST = super.sentences(sentencia);
                ResultSet res = PST.executeQuery();
                while (res.next()) {
                    factura = new Factura(res.getInt("Id_Factura"),res.getString("Cliente"),res.getFloat("Valor"));
                    listadoeven.add(new Gson().toJsonTree(factura));
                }
                super.cerrar();
            } catch (SQLException ex) {
                listadoeven.add(new Gson().toJsonTree(ex));
            }

        } else {
            error = "Error con la conexion a la base de datos, verifique conexion";
            listadoeven.add(new Gson().toJsonTree(error));
        }

        return listadoeven;
    }
}