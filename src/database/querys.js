export const querys = {
  getAllProducts: "SELECT  [IdSede],[IdFacturaCliente] ,[IdDocumento],[NombreVendedor] ,[IdTurno] ,[CodigoIsla] ,[CodigoCara],[CodigoManguera],[IdVentaEstacion],[CodigoVenta],[SecuenciaVenta],[IdTranControladora],[PrefijoFactura],[NumeroFactura],[IdentificacionCliente],[NombreCliente],[CodigoArticulo],[Articulo],[Presentacion],CAST([VolumenVenta] AS DECIMAL(20,2)) AS [VolumenVenta] ,[ValorUnitario], [ValorVenta],[Porcentaje],CONVERT(varchar,[FechaZeta]) as FechaZeta ,CONVERT(varchar,[Fecha]) as Fecha,CONVERT(varchar,[Hora]) as Hora ,[Placa],[Kilometraje],[Credito],[FormasPago] ,[Rom], [CuentaMaster] as [Cuenta] FROM [TsRiveraBravaTest].[dbo].[VentasCombustible] where [Credito]  = 1",
  getProducById: "SELECT [IdSede],[IdDocumento],[NombreVendedor] ,[IdTurno] ,[CodigoIsla] ,[CodigoCara],[CodigoManguera],[PrefijoFactura],[NumeroFactura],[IdentificacionCliente],[NombreCliente],[CodigoArticulo],[Articulo],CAST([VolumenVenta] AS DECIMAL(20,2)) AS [VolumenVenta],[ValorUnitario],[ValorVenta],CONVERT(varchar,[FechaZeta]) as FechaZeta ,CONVERT(varchar,[Fecha]) as Fecha,CONVERT(varchar,[Hora]) as Hora ,[Placa],[Kilometraje],[FormasPago] ,[Rom], [CuentaMaster] FROM [TsRiveraBravaTest].[dbo].[VentasCombustible] Where IdDocumento = @IdDocumento and IdSede = @IdSede",
  getLogin: "SELECT * FROM [Rivera].[dbo].[users] WHERE username = @username AND password = @password",
  addNewProduct:
    "INSERT INTO [TsRiveraBravaTest].[dbo].[VentasCombustible] (IdSede, IdTurno, CodigoIsla, NombreVendedor, IdentificacionCliente, NombreCliente, IdDocumento, Articulo, VolumenVenta, ValorUnitario, ValorVenta, Placa, FormasPago, CodigoCara, CodigoManguera, PrefijoFactura, NumeroFactura, FechaZeta, Fecha, Hora, Rom, Kilometraje, CuentaMaster) VALUES (@IdSede,@IdTurno,@CodigoIsla,@Vendedor,@IdentificacionCliente,@NombreCliente,@IdDocumento,@Articulo,@VolumenVenta, @ValorUnitario, @ValorVenta, @Placa, @FormasPago, @CodigoCara, @CodigoManguera, @PrefijoFactura, @NumeroFactura, @FechaZeta, @Fecha,  @Hora, @Rom, @Kilometraje, @Cuenta );",
  Sum: "Select count(IdRegistro) as Cantidad, SUM(VolumenVenta) as TotalVolumen, SUM(ValorVenta) as TotalVenta from [TsRiveraBravaTest].[dbo].[VentasCombustible] where [Credito]  = 1 ",
  addNewRelacional:
    "INSERT INTO [TsRiveraBravaTest].[dbo].[Tabla_Relacional] (TerceroMaster, Identificacion, Nombre) VALUES (@TerceroMaster,@Identificacion,@Nombre);",
  getFilter: "SELECT [IdSede],[IdTurno],[CodigoIsla],[NombreVendedor],[IdentificacionCliente],[NombreCliente], [IdDocumento], [Articulo], [VolumenVenta], [ValorUnitario], [ValorVenta], [Placa], [FormasPago]  , [CodigoCara]  , [CodigoManguera]  , [PrefijoFactura]   , [NumeroFactura]  , CONVERT(varchar, [FechaZeta]) as FechaZeta  , CONVERT(varchar, [Fecha]) as Fecha   , CONVERT(varchar, [Hora]) as Hora   , [Kilometraje]   , [Rom]  , [CuentaMaster] FROM[TsRiveraBravaTest].[dbo].[VentasCombustible] where [Credito]= 1 AND [FechaZeta] BETWEEN CONVERT (@FechaZeta) AND CONVERT (@FechaZeta4)",
  SumFilter: "SELECT count(IdRegistro) as Cantidad, SUM(VolumenVenta) as TotalVolumen, SUM(ValorVenta) as TotalVenta from [TsRiveraBravaTest].[dbo].[VentasCombustible]  where [Credito]= 1 AND [FechaZeta] BETWEEN CONVERT (@FechaZeta) AND CONVERT (@FechaZeta4) ",
  getAllRelacional: "Select * from [TsRiveraBravaTest].[dbo].[Tabla_Relacional] ",
  deleteProduct: "DELETE FROM [Rivera].[dbo].[VentasCombustible] Where IdRegistro = @IdRegistro",
  deleteRelacional: "DELETE FROM [TsRiveraBravaTest].[dbo].[Tabla_Relacional] Where [TerceroMaster] = @TerceroMaster",
  getTotalProducts: "SELECT COUNT(*) FROM [TsRiveraBravaTest].[dbo].[VentasCombustible]",
  updateProductById:"UPDATE [TsRiveraBravaTest].[dbo].[VentasCombustible] SET [IdTurno] = @IdTurno,[CodigoIsla] = @CodigoIsla,[NombreVendedor] = @Vendedor ,[IdentificacionCliente] = @IdentificacionCliente,[NombreCliente] = @NombreCliente,[Articulo] = @Articulo,[VolumenVenta] = @VolumenVenta,[ValorUnitario] = @ValorUnitario,[ValorVenta] = @ValorVenta,[Placa] = @Placa,[FormasPago] = @FormasPago,[CodigoCara] = @CodigoCara,[CodigoManguera] = @CodigoManguera,[PrefijoFactura] = @PrefijoFactura,[NumeroFactura]  = @NumeroFactura,[FechaZeta] = @FechaZeta,[Fecha] = @Fecha,[Hora] = @Hora,[Kilometraje] = @Kilometraje,[Rom] = @Rom,[CuentaMaster] = @Cuenta Where IdDocumento = @IdDocumento and IdSede = @IdSede",
getVistaPlano: "SELECT [IdSede],[IdentificacionCliente],[NombreCliente],[Articulo],sum([ValorVenta]) as [ValorVenta],CONVERT(varchar,[FechaZeta]) as FechaZeta, COUNT(*) [CantIdDocumento] FROM [TsRiveraBravaTest].[dbo].[VentasCombustible] Where [Credito]  = 1 GROUP BY [IdSede],[IdentificacionCliente],[NombreCliente],[Articulo],[FechaZeta] ORDER BY CantIdDocumento DESC;",
getUpdateGeneral: "UPDATE[TsRiveraBravaTest].[dbo].[Tabla_Relacional] set [Identificacion] = @Identificacion, [Nombre]= @Nombre Where [TerceroMaster] = @TerceroMaster ",
getUpdateGeneral2: "UPDATE [TsRiveraBravaTest].[dbo].[VentasCombustible] SET [IdentificacionCliente] = @Identificacion ,[NombreCliente] =  @Nombre  Where [TerceroMaster] = @TerceroMaster",
getRelacional: "SELECT * FROM [TsRiveraBravaTest].[dbo].[Tabla_Relacional] Where [TerceroMaster] = @TerceroMaster",
Relacionar : "UPDATE[TsRiveraBravaTest].[dbo].[VentasCombustible] SET [IdentificacionCliente] = @IdentificacionCliente,[NombreCliente] = @NombreCliente WHERE [Credito]  = 1 AND [CuentaMaster] = @TerceroMaster2",
getConfirmacion:"UPDATE [TsRiveraBravaTest].[dbo].[VentasCombustible] SET [Confirmacion] = @Confirmacion WHERE [Credito]  = 1 ",

  };
