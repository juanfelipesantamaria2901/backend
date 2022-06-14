export const querys = {
  getAllProducts: "SELECT * FROM [Rivera].[dbo].[cartera]",
  getProducById: "SELECT * FROM cartera Where IdSede = @IdSede",
 getLogin: "SELECT * FROM [Rivera].[dbo].[users] WHERE username = @username AND password = @password",
  addNewProduct:
    "INSERT INTO [Rivera].[dbo].[cartera] (IdSede, IdTurno, CodigoIsla, Vendedor, IdentificacionCliente, NombreCliente, IdDocumento, Articulo, VolumenVenta, ValorUnitario, ValorVenta, Placa, FormasPago, CodigoCara, CodigoManguera, PrefijoFactura, NumeroFactura, FechaZeta, Fecha, Hora) VALUES (@IdSede,@IdTurno,@CodigoIsla,@Vendedor,@IdentificacionCliente,@NombreCliente,@IdDocumento,@Articulo,@VolumenVenta, @ValorUnitario, @ValorVenta, @Placa, @FormasPago, @CodigoCara, @CodigoManguera, @PrefijoFactura, @NumeroFactura, @FechaZeta, @Fecha, @Hora );",
  addNewRelacional: 
  "INSERT INTO [Rivera].[dbo].[relacional] (IdentificacionMaster, TerceroMaster, Identificacion, Nombre) VALUES (@IdentificacionMaster,@TerceroMaster,@Identificacion,@Nombre);",
  getAllRelacional: "SELECT * FROM [Rivera].[dbo].[relacional]",
  deleteProduct: "DELETE FROM [Rivera].[dbo].[cartera] WHERE IdSede= @IdSede",
  getTotalProducts: "SELECT COUNT(*) FROM Rivera.dbo.cartera",
  updateProductById:
    "UPDATE [Rivera].[dbo].[cartera] SET Name = @name, Description = @description, Quantity = @quantity WHERE IdSede = @IdSede",
};
