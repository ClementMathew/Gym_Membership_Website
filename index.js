var mysql = require("mysql");

var con = mysql.createConnection({
    host:'localhost',
    user:'sqluser',
    password:'password',
    database:'gym_site'
});

con.connect(function(error){
    if(error) throw error;
    console.log('connect');
    
    con.query("select * from gymmans",function(error,result){
        if(error) throw error;
        console.log(result);
        console.log(result[0].name);
        console.log(result[0].age);
    });
});