const mongoose=require("mongoose");
const{ Schema } = mongoose;

const ProductosSchema = new Schema({
  nombre: { type: String, required: true },
  marca: { type: String, required: true },
  fecha: { type: String, required: true },
  costo: { type: Number, required: true }
});

module.exports = mongoose.model('Productos',ProductosSchema);
