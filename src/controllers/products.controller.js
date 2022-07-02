import { getConnection, querys, sql } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getRelacional = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllRelacional);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getSum = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.Sum);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getLogin = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("username", req.params.username)
      .input("password", req.params.password)
      .query(querys.getLogin);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewProduct = async (req, res) => {
  const { IdSede,
    IdTurno,
    CodigoIsla,
    Vendedor,
    IdentificacionCliente,
    NombreCliente,
    IdDocumento,
    Articulo,
    VolumenVenta,
    ValorUnitario,
    ValorVenta,
    Placa,
    FormasPago,
    CodigoCara,
    CodigoManguera,
    PrefijoFactura,
    NumeroFactura,
    FechaZeta,
    Fecha,
    Hora,
    Rom,
    Kilometraje,
    Cuenta } = req.body;

  // validating
  if (IdSede == null || IdTurno == null || CodigoIsla == null || Vendedor == null || IdentificacionCliente == null || NombreCliente == null || IdDocumento == null || Articulo == null || VolumenVenta == null || ValorUnitario == null || ValorVenta == null || Placa == null || FormasPago == null || CodigoCara == null || CodigoManguera == null || PrefijoFactura == null || NumeroFactura == null || FechaZeta == null || Fecha == null || Rom == null || Kilometraje == null || Cuenta == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("IdSede", sql.Int, +IdSede)
      .input("IdTurno", sql.Int, +IdTurno)
      .input("CodigoIsla", sql.Int, +CodigoIsla)
      .input("Vendedor", sql.VarChar, Vendedor)
      .input("IdentificacionCliente", sql.Int, IdentificacionCliente)
      .input("NombreCliente", sql.VarChar, NombreCliente)
      .input("IdDocumento", sql.Int, +IdDocumento)
      .input("Articulo", sql.VarChar, Articulo)
      .input("VolumenVenta", sql.Int, VolumenVenta)
      .input("ValorUnitario", sql.Int, ValorUnitario)
      .input("ValorVenta", sql.Int, ValorVenta)
      .input("Placa", sql.VarChar, Placa)
      .input("FormasPago", sql.VarChar, FormasPago)
      .input("CodigoCara", sql.Int, CodigoCara)
      .input("CodigoManguera", sql.Int, CodigoManguera)
      .input("PrefijoFactura", sql.VarChar, PrefijoFactura)
      .input("NumeroFactura", sql.Int, NumeroFactura)
      .input("FechaZeta", sql.Date, FechaZeta)
      .input("Fecha", sql.Date, Fecha)
      .input('Hora', sql.VarChar, Hora)
      .input("Rom", sql.VarChar, Rom)
      .input("Kilometraje", sql.VarChar, Kilometraje)
      .input("Cuenta", sql.VarChar, Cuenta)
      .query(querys.addNewProduct);

    res.json({
      IdSede,
      IdTurno,
      CodigoIsla,
      Vendedor,
      IdentificacionCliente,
      NombreCliente,
      IdDocumento,
      Articulo,
      VolumenVenta,
      ValorUnitario,
      ValorVenta,
      Placa,
      FormasPago,
      CodigoCara,
      CodigoManguera,
      PrefijoFactura,
      NumeroFactura,
      FechaZeta,
      Fecha,
      Hora,
      Rom,
      Kilometraje,
      Cuenta
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewRelacional = async (req, res) => {
  const { IdentificacionMaster,
    TerceroMaster,
    Identificacion,
    Nombre, } = req.body;

  // validating
  if (IdentificacionMaster == null || TerceroMaster == null || Identificacion == null || Nombre == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("IdentificacionMaster", sql.Int, + IdentificacionMaster)
      .input("TerceroMaster", sql.VarChar, TerceroMaster)
      .input("Identificacion", sql.Int, + Identificacion)
      .input("Nombre", sql.VarChar, Nombre)
      .query(querys.addNewRelacional);

    res.json({
      IdentificacionMaster,
      TerceroMaster,
      Identificacion,
      Nombre,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("IdTurno", req.params.id)
      .query(querys.getProducById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteProduct);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalProducts = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalProducts);
  console.log(result);
  res.json(result.recordset[0][""]);
};

export const updateProductById = async (req, res) => {
  const { description, name, quantity } = req.body;

  // validating
  if (description == null || name == null || quantity == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .input("id", req.params.id)
      .query(querys.updateProductById);
    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
