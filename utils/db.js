const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ran');



// // Menambah satu data
// const contact1 = new Contact({
//   nama: 'Fadhil',
//   nohp: '081789789789',
//   email: 'fadhil@gmail.com'
// })

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact))