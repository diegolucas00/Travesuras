/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

$(document).ready(function () {
    const ajax = (ir_a, llevar, hacer) => {
        $.ajax({
            url: ir_a,
            encoding: "UTF-8",
            data: llevar,
            type: 'POST',
            dataType: 'html',
            contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
            success: function (data) {
                hacer(data);
            },
            error: function (xhr, status) {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    background: 'linear-gradient(#2BD9DD , #6ACF28)',
                    html: status + ":" + xhr + 'Porvar contate con el administrador'
                });
            }
        });
    };

    $("#Estadobtn5").click(function () {
        ListaPedidoT();
    });

    const ListaPedidoT = () => {
        let ir_a = "Paginas/Factura.jsp";
        let llevar;
        let hacer = (data) => {
            $("#datos").html(data);
            $(".btnMenuP").removeClass("Activo");
            $("#Estadobtn5").addClass("Activo");
            ListadoPedidoT2();
        };
        ajax(ir_a, llevar, hacer);
    };
    const ListadoPedidoT2 = () => {
        let ir_a = "ListaPedido";
        let llevar;
        let hacer = (data) => {
            const dato = JSON.parse(data);
            dato.forEach(elemento => {
                let tr = $("<tr>");
                let td = $("<td>");
                td.html(elemento.Id);
                tr.append(td);
                let td2 = $("<td>");
                td2.html(elemento.Proveedor);
                tr.append(td2);
                let td3 = $("<td>");
                td3.html(elemento.FechaCreacion);
                tr.append(td3);
                let td4 = $("<td>");
                td4.html(elemento.Estado);
                tr.append(td4);
                let td5 = $("<td>");
                td5.html(elemento.FechaCambioEstado);
                tr.append(td5);
                let td6 = $("<td>");
                let btn = $("<button>");
                btn.addClass("btn btn-success");
                btn.html("Pedido Completo");
                td6.append(btn);
                tr.append(td6);
                btn.click(function () {
                    PedidoCompleto(elemento.Id);
                });
                $("#TablaPedidotbody").append(tr);
            });
            $("#TablaPedido").dataTable();
        };
        ajax(ir_a, llevar, hacer);
    };

    const PedidoCompleto = (Id) => {
        let ir_a = "PedidoCompleto";
        let llevar = {
            id: Id
        };
        let hacer = (data) => {
            const dato = JSON.parse(data);
            $("#TablaPedidosTotaltbody").html("");
            dato.forEach(elemento => {
                let tr = $("<tr>");
                let td = $("<td>");
                td.html(elemento.Id);
                tr.append(td);
                let td2 = $("<td>");
                td2.html(elemento.FRPedido);
                let input11 = $("<input>");
                input11.addClass("form-control Pedido");
                input11.val(elemento.FRPedido);
                input11.attr("type", "number");
                input11.attr("id", "Pedido");
                input11.hide();
                td2.append(input11);
                tr.append(td2);
                let td3 = $("<td>");
                td3.html(elemento.Producto);
                let input10 = $("<input>");
                input10.addClass("form-control Producto");
                input10.val(elemento.FRProducto);
                input10.attr("type", "number");
                input10.attr("id", "Producto");
                input10.hide();
                td3.append(input10);
                tr.append(td3);
                let td4 = $("<td>");
                let input = $("<input>");
                input.addClass("form-control CantidadP");
                input.val(elemento.CantidadPaquete);
                input.attr("type", "number");
                input.attr("id", "CantidadP");
                td4.append(input);
                tr.append(td4);
                let td6 = $("<td>");
                let input2 = $("<input>");
                input2.addClass("form-control valorp");
                input2.val(0);
                input2.attr("type", "number");
                input2.attr("id", "valorp");
                td6.append(input2);
                tr.append(td6);
                let td5 = $("<td>");
                let input3 = $("<input>");
                input3.addClass("form-control cantidadu");
                input3.val(elemento.CantidadUnidad);
                input3.attr("type", "number");
                input3.attr("id", "cantidadu");
                td5.append(input3);
                tr.append(td5);
                let td7 = $("<td>");
                let input4 = $("<input>");
                input4.addClass("form-control valorU");
                input4.val(0);
                input4.attr("type", "number");
                input4.attr("id", "valorU");
                td7.append(input4);
                tr.append(td7);
                let td10 = $("<td>");
                let input5 = $("<input>");
                input5.addClass("form-control IVA");
                input5.val(0);
                input5.attr("type", "number");
                input5.attr("id", "IVA");
                input5.attr("disabled", true);
                td10.append(input5);
                tr.append(td10);
                let td9 = $("<td>");
                let input6 = $("<input>");
                input6.addClass("form-control TOTAL");
                input6.val(0);
                input6.attr("type", "number");
                input6.attr("id", "TOTAL");
                input6.attr("disabled", true);
                td9.append(input6);
                tr.append(td9);
                let td8 = $("<td>");
                let btn = $("<button>");
                btn.addClass("btn btn-success");
                btn.html("Remover");
                let btn2 = $("<button>");
                btn2.addClass("btn btn-secondary");
                btn2.html("Calcular");
                td8.append(btn);
                td8.append(btn2);
                tr.append(td8);
                btn.click(function () {
                    tr.remove();
                });
                btn2.click(function () {
                    let CantidadP = input.val();
                    let valorp = input2.val();
                    let cantidadu = input3.val();
                    let valorU = input4.val();
                    input5.val((((CantidadP * valorp) + (cantidadu * valorU)) * 19) / 100);
                    let iva = input5.val();
                    input6.val((CantidadP * valorp) + (cantidadu * valorU) + parseInt(iva));
                });

                $("#TablaPedidosTotaltbody").append(tr);
            });

            let btn = $("<button>");
            btn.addClass("btn btn-success");
            btn.html("Calcular");
            $("#facturadiv").append(btn);
            $("#TablaPedidosTotal").dataTable();
            btn.click(function () {
                let TOTAL = 0;
                let IVA = 0
                $(".TOTAL").each(function () {
                    TOTAL += parseInt($(this).val());
                });
                $(".IVA").each(function () {
                    IVA += parseInt($(this).val());
                });

                let input2 = $("<input>");
                input2.addClass("form-control IVAT");
                input2.val(IVA);
                input2.attr("type", "number");
                input2.attr("id", "IVAT");
                input2.attr("disabled", true);

                $("#TotalIVA").html(input2);
                let input3 = $("<input>");
                input3.addClass("form-control TOTALTAL");
                input3.val(TOTAL - IVA);
                input3.attr("type", "number");
                input3.attr("id", "TOTALTAL");
                input3.attr("disabled", true);

                $("#Total1").html(input3);
                let input = $("<input>");
                input.addClass("form-control TOTALT");
                input.val(TOTAL);
                input.attr("type", "number");
                input.attr("id", "TOTALT");
                input.attr("disabled", true);

                $("#Total").html(input);
                let btn = $("<button>");
                btn.addClass("btn btn-info");
                btn.html("Registrar");
                $("#facturadiv").append(btn);
                btn.click(function () {
                    RegistrarFactura();
                });
            });
        };
        ajax(ir_a, llevar, hacer);
    };
    const RegistrarFactura = () => {
        let ir_a = "RegistrarFactura";

        let TOTAL = "";
        let Producto = "";
        let CantidadP = "";
        let valorp = "";
        let cantidadu = ""
        let valorU = "";
        let IVA = "";
        let Pedido;
        let TOTALTAL = $("#TOTALTAL").val();
        let IVAT = $("#IVAT").val();
        let TOTALT = $("#TOTALT").val();
        $(".TOTAL").each(function () {
            TOTAL += $(this).val() + ";";
        });
        $(".Producto").each(function () {
            Producto += $(this).val() + ";";
        });
        $(".CantidadP").each(function () {
            CantidadP += $(this).val() + ";";
        });
        $(".valorp").each(function () {
            valorp += $(this).val() + ";";
        });
        $(".cantidadu").each(function () {
            cantidadu += $(this).val() + ";";
        });
        $(".valorU").each(function () {
            valorU += $(this).val() + ";";
        });
        $(".IVA").each(function () {
            IVA += $(this).val() + ";";
        });
        $(".Pedido").each(function () {
            Pedido = $(this).val();
        });
        let llevar = {
            TOTAL: TOTAL,
            Producto: Producto,
            CantidadP: CantidadP,
            valorp: valorp,
            cantidadu: cantidadu,
            valorU: valorU,
            IVA: IVA,
            TOTALTAL: TOTALTAL,
            IVAT: IVAT,
            TOTALT: TOTALT,
            Pedido:Pedido
        };
        let hacer = (data) => {
            if (data === "OK") {
                swal({
                    type: 'success',
                    icon: 'success',
                    title: 'Completo',
                    background: 'linear-gradient(#2BD9DD , #6ACF28)',
                    html: 'El producto ya esta registrado'
                });
                setTimeout(function () {
                    location.reload(1);
                }, 2000);
            } else {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    background: 'linear-gradient(#2BD9DD , #6ACF28)',
                    html: 'Error:' + data
                });
            }
        };
        ajax(ir_a, llevar, hacer);
    };
});
