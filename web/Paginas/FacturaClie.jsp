<%-- 
    Document   : Factura
    Created on : Apr 21, 2022, 11:50:19 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <div class="container DatosPosition center" >
        <div class="d-flex justify-content-center mitad" >
            <h1 class="titulo">Factura Cliente</h1>                      
        </div>
        <table class="table table-sm" id="TablaCli">
            <thead>
                <tr>
                    <td scope="col">Id_Factura</td>
                    <td scope="col">Cliente</td>
                    <td scope="col">Valor</td>
                    <td scope="col">Accion</td>
                </tr>
            </thead>
            <tbody id="TablaClitbody">

            </tbody>
        </table>
    </div>
</html>
