// /controllers/orderController.js
import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

// Create New Order
export const createOrder = async (req, res) => {
  const { phone } = req.body;

  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const totalAmount = cart.items.reduce((sum, item) => sum + item.productId.price * item.quantity, 0);

    const order = new Order({
      userId: req.user.id,
      items: cart.items.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity,
      })),
      totalAmount,
      phone,
    });

    await order.save();
    await Cart.findOneAndDelete({ userId: req.user.id });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

// Get User Orders
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).populate('items.productId');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};
