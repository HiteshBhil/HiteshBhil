"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App(props) {
  //   let medicineData =
  //     [
  //       {
  //         id: 101,
  //         name: 'Abacavir',
  //         quantity: 25,
  //         price: 150,
  //         expiry: 2022,
  //         status: true
  //       },
  //       {
  //         id: 102,
  //         name: 'Eltrombopag',
  //         quantity: 90,
  //         price: 550,
  //         expiry: 2021,
  //         status: true
  //       },
  //       {
  //         id: 103,
  //         name: 'Meloxicam',
  //         quantity: 85,
  //         price: 450,
  //         expiry: 2025,
  //         status: false
  //       },
  //       {
  //         id: 104,
  //         name: 'Allopurinol',
  //         quantity: 50,
  //         price: 600,
  //         expiry: 2023,
  //         status: true
  //       },
  //       {
  //         id: 105,
  //         name: 'Phenytoin',
  //         quantity: 63,
  //         price: 250,
  //         expiry: 2021,
  //         status: false
  //       }
  //     ];
  //   let fData = medicineData.filter((d, i) =>
  //     d.status === true && d.expiry >= 2022
  //   );
  //   let ans = fData.reduce((acc, d, i) => acc + d.price, 0);
  //   return (
  //     <div class="App">
  //       <table border="1" cellspacing={0} cellpadding={10}>
  //         <tr>
  //           <th>Id</th>
  //           <th>Name</th>
  //           <th>Quantity</th>
  //           <th>Price</th>
  //           <th>Expiry</th>
  //           <th>Status</th>
  //           <th>Total Price</th>
  //         </tr>
  //         {
  //           fData.map((v,i)=>{
  //             let {id , name , quantity , price , expiry , status } = v;
  //             return (
  //               <tr key={i}>
  //                 <td>{id}</td>
  //                 <td>{name}</td>
  //                 <td>{quantity}</td>
  //                 <td>{price}</td>
  //                 <td>{expiry}</td>
  //                 <td>{status.toString()}</td>
  //                 {i===0 ? <td rowSpan={2}>{ans}</td> : null}
  //               </tr>
  //             )
  //           })
  //         }
  //       </table>
  //     </div>
  //   );
  var employee;
}

var _default = App;
exports["default"] = _default;