//var moment = require('moment');  
const conn = require("../config/db_conn");
//const pool = require("../config/db_conn_pool");

function subtract(x, y) {
  return x - y;
}

 

async function getInfo(data){
    var sql = "SELECT wallet_balance FROM customer_wallets order by id desc limit 1"
    const results = await pool.promise().query(sql)
    console.log('WWWW  :: ' +  results);
    console.log('WWWW  :: ' +  results[0]['wallet_balance']);
    console.log('WWWW  :: ' +  results['wallet_balance']);
    return results[0]['wallet_balance']   
  }
function date_time_diff(input_date) {
  
   let response = '1'
   var ms = moment(this.current_date_time(),"YYYY-MM-DD HH:mm:ss").diff(moment(input_date,"YYYY-MM-DD HH:mm:ss"));
   var d = moment.duration(ms);
   console.log(d.days() + ':' + d.hours() + ':' + d.minutes() + ':' + d.seconds());
   if (d.minutes() <= 15){
        response = '0'
   }
   if ((d.days()  > 0 ) ||( d.hours > 0)){
     response = '1'
   }
   return response ; 
 }

 function date_time_add(minute_value) {
        return moment().add(minute_value, "minutes").format('YYYY-MM-DD HH:m:ss'); 
 }

function current_date_time() {
         return moment().format('YYYY-MM-DD HH:m:ss'); 
}

function current_date() {
    return moment().format('YYYY-MM-DD'); 
}

function date_time() {
    var today = new Date();
    var td = (today.getMonth()+1) ;
    var td_var =  td.toString.length == 1 ? '0'+ td : td;
    var dt =  today.getDate()
    var dt_var =  dt.toString.length == 1 ? '0'+ dt : dt;
    var date = today.getFullYear()+'-'+ td_var +'-'+ dt_var;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return date_time;
}

function date_time1(){
    var date = new Date(Time);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
console.log(formattedTime);
}

function random_number(len){
    var characters = '0123456789';
    var result = ""
   var charactersLength = characters.length;
   for ( var i = 0; i < len ; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;

}
function random_alphabet(len){
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var result = ""
    var charactersLength = characters.length;
    for ( var i = 0; i < len ; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
}

function random_alphanumeric(len){
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = ""
    var charactersLength = characters.length;
    for ( var i = 0; i < len ; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

}

module.exports = { date_time  , random_number, random_alphabet ,random_alphanumeric , 
    date_time_add, current_date_time, date_time_diff,getInfo, current_date};