module.exports = (req,res) => {
    
    let email = ""  
    let password = ""
    let firstname = ""
    let lastname = ""
    let repassword = ""
    let tel = ""
    let day = ""
    let month = ""
    let year = ""
    let gender = ""
    let data = req.flash('data')[0]// นำข้อมูลจาก flash ที่ชื่อdata มาเก็บไว่ในตัวแปร data

   // ถ้าตัวแปรข้อมูล data มีค่าอยู่แล้วให้ทำการ set ค่าให้กับตัวแปรข้างบนโดยการเข้าถึง data. ตัวแปรด้านบน
    if(typeof data != "undefined"){
        email = data.email
        password = data.password
        firstname = data.firstname
        lastname = data.lastname
        repassword = data.repassword
        tel = data.tel
        day = data.day
        month = data.month
        year = data.year
        gender = data.gender
    }
  
    res.render('register',{
        //เรียกใช้ข้อความ error ส่งไปยังหน้า register
        //validationErrors เป็นตัวแปรไว้เก็บค่า error ซึ่งมาจาก file storeUserController
       errors: req.flash('validationErrors'),
       email: email,
       password: password,
       firstname: firstname,
       lastname: lastname,
       repassword: repassword,
       tel: tel,
       day: day,
       month: month,
       year: year
    })

}