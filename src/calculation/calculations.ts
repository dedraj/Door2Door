
// import { Myform } from "src/app/pages/new-order/new-order.component";
export var order_db = []
const user_db = (data)=>{
    return {
        cDetail:data[0],
        rDetail:data[1],
        pDetail:data[2]
    }
}
export function submitData(data){
    console.log("data",data);
    let db= user_db(data);
    let size = order_db.length;
    size ? order_db.push({id:size+1,...db}):order_db.push({id:1,...db});
    console.log(order_db)
}
export const db =[
    {   
        id:'1',
        awb:'1345633',
        cDetail:{
            name:'dev',
            email:'dev@dev.dev',
            telephone:'7777777777',
            city:'sikar',
            state:'raj',
            zip:'332301',
            address:'zootopia',
        },
        rDetail:{
            name:'rev',
            email:'dev@dev.dev',
            telephone:'7777777777',
            city:'rikar',
            state:'raj',
            zip:'332301',
            address:'xootopia',
        },
        pDetail:{
            length:10,
            breadth:10,
            height:10,
            weight:10,
            dMode:'express'
        }
    },
]
export class ClaculateCost {
    constructor() {}
    getInfo = (user) => {
        
        const getDistance = (city1, city2) => (200);
        const getArea = (dimention) => {
          // for(const i of dimention){parseInt(i);}
          let [l, b, h] = Object.values(dimention);
          return l * b + b * h * h + l;
        }
        let c1 = user.cDetail.city;
        let c2 = user.rDetail.city;
        let distance = getDistance(c1, c2);
        let {dMode, weight, ...para} = user.pDetail;
        let area = getArea(para);
      
        return [area,distance,dMode,weight];
      }
      
      getCost = (userdata) => {
        // let user = user_db(userdata);
        let user=userdata;
        let [area,distance,dMode,weight] = this.getInfo(user);
        const getWeightPrice=(w,d)=>{
          let rate = 0;
          if(w>=10) rate = d<=100 ? 2 : d<300? 1 : 0.75;
          else rate = d<=100 ? 4 : d<=300 ? 3 : 2.5;
          let price = d*rate;
          return price;
        }
        let mode_price = dMode=='express'? 50 : 0;
        let area_price = area>600? 50 : 0;
        let weight_price = getWeightPrice(weight,distance);
      
        return weight_price + area_price + mode_price;
      }
}
//   const cost = new ClaculateCost;
//   console.log("+++++++++",  cost.getCost(db[0]),"+++++++++++++++++");
  
  