function mapOrder(order) {
  return {
    orderId: order.orderId,
    value: Number(order.value),
    creationDate: new Date(order.creationDate), // transforma string ISO em Date válido
    items: order.items.map(item => ({
      productId: Number(item.productId), // força número
      quantity: Number(item.quantity),
      price: Number(item.price)
    }))
  };
}

module.exports = { mapOrder };
