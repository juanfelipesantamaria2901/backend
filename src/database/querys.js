export const querys = {
  getAllProducts: "SELECT TOP 1000  [IdSede],[IdFacturaCliente] ,[IdDocumento],[NombreVendedor] ,[IdTurno] ,[CodigoIsla] ,[CodigoCara],[CodigoManguera],[IdVentaEstacion],[CodigoVenta],[SecuenciaVenta],[IdTranControladora],[PrefijoFactura],[NumeroFactura],[IdentificacionCliente],[NombreCliente],[CodigoArticulo],[Articulo],[Presentacion],[VolumenVenta] ,[ValorUnitario],[ValorVenta],[Porcentaje],CONVERT(varchar,[FechaZeta]) as FechaZeta ,CONVERT(varchar,[Fecha]) as Fecha,CONVERT(varchar,[Hora]) as Hora ,[Placa],[Kilometraje],[Credito],[FormasPago] ,[Rom] FROM [TsRiveraBrava].[dbo].[VentasCombustible]",
  getProducById: "SELECT [IdSede],[IdFacturaCliente] ,[IdDocumento],[NombreVendedor] ,[IdTurno] ,[CodigoIsla] ,[CodigoCara],[CodigoManguera],[IdVentaEstacion],[CodigoVenta],[SecuenciaVenta],[IdTranControladora],[PrefijoFactura],[NumeroFactura],[IdentificacionCliente],[NombreCliente],[CodigoArticulo],[Articulo],[Presentacion],[VolumenVenta] ,[ValorUnitario],[ValorVenta],[Porcentaje],[FechaZeta],[Fecha] ,[Hora] ,[Placa],[Kilometraje],[Credito],[FormasPago] ,[Rom] FROM [TsRiveraBrava].[dbo].[VentasCombustible] Where IdDocumento = @IdDocumento",
 getLogin: "SELECT * FROM [Rivera].[dbo].[users] WHERE username = @username AND password = @password",
  addNewProduct:
    "INSERT INTO [Rivera].[dbo].[VentasCombustible] (IdSede, IdTurno, CodigoIsla, Vendedor, IdentificacionCliente, NombreCliente, IdDocumento, Articulo, VolumenVenta, ValorUnitario, ValorVenta, Placa, FormasPago, CodigoCara, CodigoManguera, PrefijoFactura, NumeroFactura, FechaZeta, Fecha, Hora, Rom, Kilometraje, Cuenta) VALUES (@IdSede,@IdTurno,@CodigoIsla,@Vendedor,@IdentificacionCliente,@NombreCliente,@IdDocumento,@Articulo,@VolumenVenta, @ValorUnitario, @ValorVenta, @Placa, @FormasPago, @CodigoCara, @CodigoManguera, @PrefijoFactura, @NumeroFactura, @FechaZeta, @Fecha,  @Hora, @Rom, @Kilometraje, @Cuenta );",
  Sum: "Select count(IdRegistro) as Cantidad, SUM(VolumenVenta) as TotalVolumen, SUM(ValorVenta) as TotalVenta from [TsRiveraBrava].[dbo].[VentasCombustible] ",
    addNewRelacional: 
  "INSERT INTO [Rivera].[dbo].[relacional] (IdentificacionMaster, TerceroMaster, Identificacion, Nombre) VALUES (@IdentificacionMaster,@TerceroMaster,@Identificacion,@Nombre);",
  getAllRelacional: "SELECT * FROM [Rivera].[dbo].[relacional]",
  deleteProduct: "DELETE FROM [Rivera].[dbo].[VentasCombustible] Where IdRegistro = @IdRegistro",
  getTotalProducts: "SELECT COUNT(*) FROM [Rivera].[dbo].[VentasCombustible]",
  updateProductById:
    "UPDATE [Rivera].[dbo].[VentasCombustible] SET IdSede = @IdSede, IdTurno = @IdTurno, CodigoIsla = @CodigoIsla,  Where IdDocumento = @IdDocumento",
};
