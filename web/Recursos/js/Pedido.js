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

    $("#Estadobtn4").click(function () {
        TraerProductosAgotados();
    });

    const TraerProductosAgotados = () => {
        let ir_a = "Paginas/Pedido.jsp";
        let llevar;
        let hacer = (data) => {
            $("#datos").html(data);
            $(".btnMenuP").removeClass("Activo");
            $("#Estadobtn4").addClass("Activo");
            ConsultarPedidoFaltante();
        };
        ajax(ir_a, llevar, hacer);

    };
    const ConsultarPedidoFaltante = () => {
        let ir_a = "TraerProductosFaltantes";
        let llevar;
        let hacer = (data) => {
            const dato = JSON.parse(data);
            let tableV = $("<table>").addClass("table table-sm");
            let tableA = $("<table>").addClass("table table-sm");
            let tableR = $("<table>").addClass("table table-sm");

            let thead = $("<thead>");
            let tr = $("<tr>");
            let th = $("<th>");
            th.attr("scope", "col");
            th.html("Nombre producto");
            tr.append(th);
            let th2 = $("<th>").attr("scope", "col");
            th2.html("Tipo");
            tr.append(th2);
            thead.append(tr);

            let theadq = $("<thead>");
            let trq = $("<tr>");
            let thq = $("<th>");
            thq.attr("scope", "col");
            thq.html("Nombre producto");
            trq.append(thq);
            let th2q = $("<th>").attr("scope", "col");
            th2q.html("Tipo");
            trq.append(th2q);
            theadq.append(trq);

            let theadz = $("<thead>");
            let trz = $("<tr>");
            let thz = $("<th>");
            thz.attr("scope", "col");
            thz.html("Nombre producto");
            trz.append(thz);
            let th2z = $("<th>").attr("scope", "col");
            th2z.html("Tipo");
            trz.append(th2z);
            theadz.append(trz);

            tableR.append(theadq);
            tableV.append(thead);
            tableA.append(theadz);

            let tbodyr = $("<tbody>");
            let tbodyv = $("<tbody>");
            let tbodya = $("<tbody>");
            dato.forEach(elemento => {
                let trb = $("<tr>");
                let tdb = $("<td>");
                let tdb2 = $("<td>");
                if (elemento.CatidadPaquete === 0) {
                    if (elemento.CantidadUnidad === 0) {
                        trb = $("<tr>").addClass("table-danger");
                        tdb.html(elemento.Nombre);
                        tdb2.html("UNIDAD");
                        trb.append(tdb);
                        trb.append(tdb2);
                        tbodyr.append(trb);
                    } else if (elemento.CantidadUnidad <= 3) {
                        trb = $("<tr>").addClass("table-warning");
                        tdb.html(elemento.Nombre);
                        tdb2.html("UNIDAD");
                        trb.append(tdb);
                        trb.append(tdb2);
                        tbodya.append(trb);
                    } else if (elemento.CantidadUnidad >= 4) {
                        trb = $("<tr>").addClass("table-success");
                        tdb.html(elemento.Nombre);
                        tdb2.html("UNIDAD");
                        trb.append(tdb);
                        trb.append(tdb2);
                        tbodyv.append(trb);
                    }
                    let trbs = $("<tr>").addClass("table-danger");
                    let tdbs = $("<td>");
                    let tdb2s = $("<td>");
                    tdbs.html(elemento.Nombre);
                    tdb2s.html("PAQUETE");
                    trbs.append(tdbs);
                    trbs.append(tdb2s);
                    tbodyr.append(trbs);
                } else if (elemento.CatidadPaquete <= 3) {
                    let trbs = $("<tr>").addClass("table-warning");
                    let tdbs = $("<td>");
                    let tdb2s = $("<td>");
                    tdbs.html(elemento.Nombre);
                    tdb2s.html("PAQUETE");
                    trbs.append(tdbs);
                    trbs.append(tdb2s);
                    tbodya.append(trbs);
                } else if (elemento.CatidadPaquete >= 4) {
                    let trbs = $("<tr>").addClass("table-success");
                    let tdbs = $("<td>");
                    let tdb2s = $("<td>");
                    tdbs.html(elemento.Nombre);
                    tdb2s.html("PAQUETE");
                    trbs.append(tdbs);
                    trbs.append(tdb2s);
                    tbodyv.append(trbs);
                }
            });
            tableR.append(tbodyr);
            tableA.append(tbodya);
            tableV.append(tbodyv);

            $("#ColorRojo").append(tableR);
            $("#ColorAmarillo").append(tableA);
            $("#ColorVerde").append(tableV);

            tableR.dataTable();
            tableA.dataTable();
            tableV.dataTable();

            let btn = $("<button>");
            btn.addClass("btn btn-info");
            btn.html("Registrar Pedido")
            $("#btnp").append(btn);
            btn.click(function () {
                CrearPedido();
            });

            let btn2 = $("<button>");
            btn2.addClass("btn btn-success");
            btn2.html("Ver pedidos");
            $("#btnp").append(btn2);
            btn2.click(function () {
                ListaPedidoT();
            });
        };
        ajax(ir_a, llevar, hacer);
    };



    const CrearPedido = () => {
        let ir_a = "Paginas/RegistrarPedido.jsp";
        let llevar;
        let hacer = (data) => {
            $("#datos").html(data);
            proveedor();
            Productos();
            let btn = $("<button>");
            btn.addClass("btn btn-primary");
            btn.html("RegistrarPedido");
            btn.click(function () {
                RegistarPedido();
            });
            $("#divpedido").append(btn);

        };
        ajax(ir_a, llevar, hacer);
    };

    const proveedor = () => {
        let ir_a = "TraerProveedores";
        let llevar;
        let hacer = (data) => {
            let select = $("<select>");
            select.addClass("form-control");
            select.attr("id", "selectP");
            const dato = JSON.parse(data);
            dato.forEach(elemento => {
                let option = $("<option>");
                option.addClass("form-control");
                option.html(elemento.Id + " - " + elemento.NombreEmpresa + " - " + elemento.NombreVendedor);
                option.val(elemento.Id);
                select.append(option);
            });
            $("#selectproveedor").append(select);
        };
        ajax(ir_a, llevar, hacer);
    };
    const Productos = () => {
        let ir_a = "TraerProductosFaltantes";
        let llevar;
        let hacer = (data) => {
            const dato = JSON.parse(data);
            dato.forEach(elemento => {
                let tr = $("<tr>");
                let td = $("<td>");
                td.html(elemento.Id);
                tr.append(td);
                let td2 = $("<td>");
                td2.html(elemento.Nombre);
                tr.append(td2);
                let td3 = $("<td>");
                let input = $("<input>");
                input.addClass("form-control");
                input.attr("type", "number");
                input.attr("id", "CantidadP" + elemento.Id);
                input.attr("name", "CantidadP" + elemento.Id);
                input.attr("value", "0");
                td3.append(input);
                tr.append(td3);
                let td4 = $("<td>");
                let input2 = $("<input>");
                input2.addClass("form-control");
                input2.attr("type", "number");
                input2.attr("id", "CantidadU" + elemento.Id);
                input2.attr("name", "CantidadU" + elemento.Id);
                input2.attr("value", "0");
                td4.append(input2);
                tr.append(td4);
                let td5 = $("<td>");
                let btn = $("<button>");
                btn.addClass("btn btn-success");
                btn.html("Agregar");
                td5.append(btn);
                tr.append(td5);

                btn.click(function () {
                    let cantidadP = $("#CantidadP" + elemento.Id).val();
                    let CantidadU = $("#CantidadU" + elemento.Id).val();

                    if (!($("#tr" + elemento.Id).length)) {
                        if (cantidadP > 0 || CantidadU > 0) {
                            ListaPedido(elemento, cantidadP, CantidadU);
                        } else {
                            swal({
                                type: 'error',
                                title: 'Oops...',
                                background: 'linear-gradient(#2BD9DD , #6ACF28)',
                                html: 'Los contadoras deben ser mayor a CERO'
                            });
                        }
                    } else {
                        swal({
                            type: 'error',
                            title: 'Oops...',
                            background: 'linear-gradient(#2BD9DD , #6ACF28)',
                            html: 'Verifique ya que este producto ya esta en el pedido'
                        });
                    }
                });

                $("#TablaProductos").append(tr);
            });
            $("#TablaProductos").dataTable();
            $("#TablaPedido").dataTable();
        };
        ajax(ir_a, llevar, hacer);
    };
    const ListaPedido = (elemento, cantidadP, CantidadU) => {
        let tr = $("<tr>");
        tr.attr("id", "tr" + elemento.Id);
        let td = $("<td>");
        td.attr("id", "IDP" + elemento.Id);
        td.html(elemento.Id);
        let input = $("<input>");
        input.addClass("datospid");
        input.attr("value", elemento.Id);
        input.hide();
        td.append(input);
        tr.append(td);
        let td2 = $("<td>");
        td2.html(elemento.Nombre);
        tr.append(td2);
        let td3 = $("<td>");
        td3.attr("id", "CanP" + elemento.Id);
        td3.html(cantidadP);
        let input2 = $("<input>");
        input2.addClass("datospcp");
        input2.attr("value", cantidadP);
        input2.hide();
        td3.append(input2);
        tr.append(td3);
        let td4 = $("<td>");
        td4.attr("id", "CanU" + elemento.Id);
        td4.html(CantidadU);
        let input3 = $("<input>");
        input3.addClass("datospcu");
        input3.attr("value", CantidadU);
        input3.hide();
        td4.append(input3);
        tr.append(td4);
        let td5 = $("<td>");
        let btn = $("<button>");
        btn.addClass("btn btn-success");
        btn.html("Retirar");
        td5.append(btn);
        tr.append(td5);

        btn.click(function () {
            $("#tr" + elemento.Id).remove();
        });

        $("#TablaPedido").append(tr);

    };

    const RegistarPedido = () => {
        let ID = "";
        let CantidadP = "";
        let CantidadU = "";
        $(".datospid").each(function () {
            ID += $(this).val() + ";";
        });
        $(".datospcu").each(function () {
            CantidadU += $(this).val() + ";";
        });
        $(".datospcp").each(function () {
            CantidadP += $(this).val() + ";";
        });
        let ir_a = "RegistrarPedido";
        let llevar = {
            id: ID,
            cantidadp: CantidadP,
            cantidadun: CantidadU,
            idprovee: $("#selectP").val()
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

    const ListaPedidoT = () => {
        let ir_a = "Paginas/ListaPedido.jsp";
        let llevar;
        let hacer = (data) => {
            $("#datos").html(data);
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
                tr.append(td2);
                let td3 = $("<td>");
                td3.html(elemento.Producto);
                tr.append(td3);
                let td4 = $("<td>");
                let input = $("<input>");
                input.addClass("form-control Cantip");
                input.attr("value",elemento.CantidadPaquete);
                input.attr("type","number");
                td4.append(input);
                let td6 = $("<td>");
                let input2 =$("<input>");
                input2.addClass("form-control ValorP");
                input2.attr("value","0");
                input2.attr("type","number");
                td6.append(input2);
                tr.append(td6);
                let td5 = $("<td>");
                td5.html(elemento.CantidadUnidad);
                tr.append(td5);
                
                $("#TablaPedidosTotaltbody").append(tr);
            });
            $("#TablaPedidosTotal").dataTable();
        };
        ajax(ir_a, llevar, hacer);
    };
});