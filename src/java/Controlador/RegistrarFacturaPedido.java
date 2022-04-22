/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controlador;

import ClaseDAO.FacturaPedidoDAO;
import Clases.FacturaPedido;
import Clases.FacturaDetalle;
import Clases.Pedido;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.ArrayList;

/**
 *
 * @author ADMIN
 */
public class RegistrarFacturaPedido extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            FacturaPedidoDAO facturadao = new FacturaPedidoDAO();
            FacturaPedido factura = new FacturaPedido();
            Pedido pedido = new Pedido();
            FacturaDetalle facturadetalle = new FacturaDetalle();
            pedido.setId(Integer.parseInt(request.getParameter("Pedido")));
            factura.setFRPedido(pedido);
            factura.setSubTotal(Integer.parseInt(request.getParameter("TOTALTAL")));
            factura.setIVA(Integer.parseInt(request.getParameter("IVAT")));
            factura.setTotal(Integer.parseInt(request.getParameter("TOTALT")));

            String Producto = request.getParameter("Producto");
            String ProductoSting[] = Producto.split(";");
            ArrayList<Integer> ProductoInt = new ArrayList<Integer>();;
            int i = 0;
            for (Object o : ProductoSting) {
                int a = Integer.parseInt(ProductoSting[i]);
                ProductoInt.add(a);
                i++;
            }

            String CantidadP = request.getParameter("CantidadP");
            String CantidadPSting[] = CantidadP.split(";");
            ArrayList<Integer> CantidadPInt = new ArrayList<Integer>();;
            i = 0;
            for (Object o : CantidadPSting) {
                int a = Integer.parseInt(CantidadPSting[i]);
                CantidadPInt.add(a);
                i++;
            }

            String valorp = request.getParameter("valorp");
            String valorpSting[] = valorp.split(";");
            ArrayList<Integer> valorpPInt = new ArrayList<Integer>();;
            i = 0;
            for (Object o : valorpSting) {
                int a = Integer.parseInt(valorpSting[i]);
                valorpPInt.add(a);
                i++;
            }

            String cantidadu = request.getParameter("cantidadu");
            String cantidaduSting[] = cantidadu.split(";");
            ArrayList<Integer> cantidaduInt = new ArrayList<Integer>();;
            i = 0;
            for (Object o : cantidaduSting) {
                int a = Integer.parseInt(cantidaduSting[i]);
                cantidaduInt.add(a);
                i++;
            }

            String valorU = request.getParameter("valorU");
            String valorUSting[] = valorU.split(";");
            ArrayList<Integer> valorUInt = new ArrayList<Integer>();;
            i = 0;
            for (Object o : valorUSting) {
                int a = Integer.parseInt(valorUSting[i]);
                valorUInt.add(a);
                i++;
            }

            String IVA = request.getParameter("IVA");
            String IVASting[] = IVA.split(";");
            ArrayList<Integer> IVAInt = new ArrayList<Integer>();;
            i = 0;
            for (Object o : IVASting) {
                int a = Integer.parseInt(IVASting[i]);
                IVAInt.add(a);
                i++;
            }

            String TOTAL = request.getParameter("TOTAL");
            String TOTALSting[] = TOTAL.split(";");
            ArrayList<Integer> TOTALInt = new ArrayList<Integer>();;
            i = 0;
            for (Object o : TOTALSting) {
                int a = Integer.parseInt(TOTALSting[i]);
                TOTALInt.add(a);
                i++;
            }
            
            facturadetalle.setValorSubTotal(TOTALInt);
            facturadetalle.setFRProducto(ProductoInt);
            facturadetalle.setCantidadPaquete(CantidadPInt);
            facturadetalle.setValorPaquete(valorpPInt);
            facturadetalle.setCantidadUnidad(cantidaduInt);
            facturadetalle.setValorUnidad(valorUInt);
            facturadetalle.setValorIVA(IVAInt);
            
            out.print(facturadao.RegistrarFactura(factura, facturadetalle));
            
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
