const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const EmpSchema = new Schema({
  FirstName: String,
  LastName: String,
  EmpId: Number,
  DoB:Date,
  Designation: String,
  DOJ: {
    type: Date,
    default: Date.now,
  },
  Image:String,

  // CurrentDate: new Date(),
  // years: { 
  //   $subtract: [ Date.now, new Date("DOJ") ] }  
    
  //  years :{$divide : [{$subtract: [new Date(),"$DOJ"]}, 3600000]},
  //  years : { $subtract : [new ISODate(), "$DOJ",  "year"]},  
//   years: {
//     $divide: ["$$year", (365 * 24*60*60*1000)]
// date: [new Date('2022-05-27T00:00:00.000+00:00'), new Date('2022-05-28T00:00:00.000+00:00')]
// }
});
 
module.exports = mongoose.model("Employees2", EmpSchema);