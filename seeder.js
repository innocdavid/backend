import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/productsArray.js';
import User from './models/user.js';
import Deal from './models/deals.js';
import Order from './models/orders.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Deal.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map(product => {
      return {...product, user: adminUser}
    });

    await Deal.insertMany(sampleProducts);

    console.log('Data Imported: '.green.inverse.bold);
    process.exit();

  } catch (error) {
    console.error(`${error.message}`.red.inverse);
    process.exit(1)
  }
}


const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Deal.deleteMany();
    await User.deleteMany();
    console.log('Data Destroyed: '.red.inverse.bold);
    process.exit();

  } catch (error) {
    console.error(`${error.message}`.red.inverse);
    process.exit(1)
  }
}

if(process.argv[2] === '-d'){
  destroyData();
} else {
  importData();
}