<%-- 
    Document   : Factura
    Created on : Apr 21, 2022, 11:50:19 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <div class="container DatosPosition center" id="facturadiv">
        <div class="d-flex justify-content-center mitad" >
            <h1 class="titulo">Factura</h1>                      
        </div>
        <table class="table table-sm" id="TablaPedido">
            <thead>
                <tr>
                    <td scope="col">ID</td>
                    <td scope="col">Nombre de proveedor</td>
                    <td scope="col">Fecha de creacion</td>
                    <td scope="col">Estado</td>
                    <td scope="col">Fecha de cambio de estado</td>
                    <td scope="col">ACCION</td>
                </tr>
            </thead>
            <tbody id="TablaPedidotbody">

            </tbody>
        </table>
        <table class="table table-hover table-dark" id="TablaPedidosTotal">
            <thead>
                <tr>
                    <td scope="col">ID</td>
                    <td scope="col">ID pedido</td>
                    <td scope="col">Producto</td>
                    <td scope="col">Cantidad paquete</td>
                    <td scope="col">Valor Paquete</td>       
                    <td scope="col">Cantidad Unidad</td>                    
                    <td scope="col">Valor Unitario</td>                    
                    <td scope="col">Valor IVA</td>                    
                    <td scope="col">Valor Total</td>                    
                    <td scope="col">ACCION</td>     
                </tr>
            </thead>
            <tbody id="TablaPedidosTotaltbody">

            </tbody>
        </table>
        <div class="row">
            <div class="col col-lg-6">
                <h3>Sub-Total</h3>
            </div>
            <div id="Total1">

            </div>
        </div>  
        <div class="row">
            <div class="col col-lg-6">
                <h3>Total IVA</h3>
            </div>
            <div id="TotalIVA">

            </div>
        </div>  
        <div class="row">
            <div class="col col-lg-6" id="Categoriadiv">
                <h3>Total</h3>
            </div>
            <div id="Total">

            </div>
        </div>  
    </div>
</html>
