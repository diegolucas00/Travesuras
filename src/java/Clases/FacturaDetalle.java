/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Clases;

import java.util.ArrayList;

/**
 *
 * @author ADMIN
 */
public class FacturaDetalle {
    private int Id;
    private ArrayList FRFaturaPedido;
    private ArrayList FRProducto;
    private ArrayList CantidadPaquete;
    private ArrayList ValorPaquete;  
    private ArrayList CantidadUnidad;
    private ArrayList ValorUnidad;
    private ArrayList ValorSubTotal;
    private ArrayList ValorIVA;
    private ArrayList ValorTotal;

    public ArrayList getValorSubTotal() {
        return ValorSubTotal;
    }

    public void setValorSubTotal(ArrayList ValorSubTotal) {
        this.ValorSubTotal = ValorSubTotal;
    }

    
    public int getId() {
        return Id;
    }

    public void setId(int Id) {
        this.Id = Id;
    }

    public ArrayList getFRFaturaPedido() {
        return FRFaturaPedido;
    }

    public void setFRFaturaPedido(ArrayList FRFaturaPedido) {
        this.FRFaturaPedido = FRFaturaPedido;
    }

    public ArrayList getFRProducto() {
        return FRProducto;
    }

    public void setFRProducto(ArrayList FRProducto) {
        this.FRProducto = FRProducto;
    }

    public ArrayList getCantidadPaquete() {
        return CantidadPaquete;
    }

    public void setCantidadPaquete(ArrayList CantidadPaquete) {
        this.CantidadPaquete = CantidadPaquete;
    }

    public ArrayList getValorPaquete() {
        return ValorPaquete;
    }

    public void setValorPaquete(ArrayList ValorPaquete) {
        this.ValorPaquete = ValorPaquete;
    }

    public ArrayList getCantidadUnidad() {
        return CantidadUnidad;
    }

    public void setCantidadUnidad(ArrayList CantidadUnidad) {
        this.CantidadUnidad = CantidadUnidad;
    }

    public ArrayList getValorUnidad() {
        return ValorUnidad;
    }

    public void setValorUnidad(ArrayList ValorUnidad) {
        this.ValorUnidad = ValorUnidad;
    }

    public ArrayList getValorIVA() {
        return ValorIVA;
    }

    public void setValorIVA(ArrayList ValorIVA) {
        this.ValorIVA = ValorIVA;
    }

    public ArrayList getValorTotal() {
        return ValorTotal;
    }

    public void setValorTotal(ArrayList ValorTotal) {
        this.ValorTotal = ValorTotal;
    }
    
    
    
}
