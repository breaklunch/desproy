const Producto = require('../models/productos');

const productoCtrl = {};

productoCtrl.getProductos = async (req,res)=> {
    const productos = await Producto.find();
    res.json(productos);
};

productoCtrl.createProducto = async(req,res)=>{
const producto = new Producto(req.body);
await producto.save();
res.json({'status':"Producto guardado"});
};

productoCtrl.getProducto = async(req,res)=>{
  const producto = await Producto.findById(req.params.id);
  res.json(producto);
}

productoCtrl.editProducto = async(req,res)=>{
  const { id } = req.params;
  const producto = {
     nombre: req.body.nombre,
     marca: req.body.marca,
     fecha: req.body.fecha,
     costo: req.body.costo,
  }
  await Producto.findByIdAndUpdate(id, {$set: producto}, {new:true});
  res.json({status: 'Producto listo'})
};

productoCtrl.deleteProducto = async(req,res)=>{
await Producto.findByIdAndRemove(req.params.id);
res.json({status: "Producto eliminado"});
};



module.exports = productoCtrl;
