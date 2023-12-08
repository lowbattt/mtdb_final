module.exports = (req, res, next) => {
    //ถ้ามีการ login เข้ามาแล้วก็จะให้ redirect กลับไปยังหน้าแรก
    if(req.session.userId) {
        return res.redirect('/')
    }

    next()
}