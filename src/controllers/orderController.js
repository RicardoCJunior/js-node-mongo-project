const Order = require("../models/Order");
const { mapOrder } = require("../services/orderService");

// Criar pedido
exports.createOrder = async (req, res) => {
  try {
    console.log("req.body recebido:", req.body);
    const mapped = mapOrder(req.body);
    console.log("Objeto mapeado:", mapped);

    const order = await Order.create(mapped);
    res.status(201).json(order);
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    res.status(500).json({ message: error.message });
  }
};

// Buscar pedido por ID
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.id });
    if (!order) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }
    res.json(order);
  } catch (error) {
    console.error("Erro ao buscar pedido:", error);
    res.status(500).json({ message: error.message });
  }
};

// Listar todos os pedidos
exports.listOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error("Erro ao listar pedidos:", error);
    res.status(500).json({ message: error.message });
  }
};

// Atualizar pedido
exports.updateOrder = async (req, res) => {
  try {
    const mapped = mapOrder(req.body);
    const order = await Order.findOneAndUpdate(
      { orderId: req.params.id },
      mapped,
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }
    res.json(order);
  } catch (error) {
    console.error("Erro ao atualizar pedido:", error);
    res.status(500).json({ message: error.message });
  }
};

// Deletar pedido
exports.deleteOrder = async (req, res) => {
  try {
    const result = await Order.deleteOne({ orderId: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }
    res.json({ message: "Pedido deletado" });
  } catch (error) {
    console.error("Erro ao deletar pedido:", error);
    res.status(500).json({ message: error.message });
  }
};