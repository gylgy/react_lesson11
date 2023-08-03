const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const { BrandModel } = require("./model")

app.get("/", async (req, res) => {
    const resDate = "返回给前端的数据 get请求方法"//假数据
    res.send(resDate)
})
app.get("/api/brands", async (req, res) => {
    const brandsResult = await BrandModel.find()
    res.send(brandsResult)
})

app.post("/api/create/brand", async (req, res) => {
    const brand = await BrandModel.create(req.body)
    res.send(brand)
})
app.put("/api/update/brand/:id", async (req, res) => {
    const brand = await BrandModel.findByIdAndUpdate(req.params.id, req.body)
    console.log(req.params.id, req.body)
    res.send(brand)

})
app.delete("/api/delete/brand/:id", async (req, res) => {
    const id = req.params.id
    const removeBrand = await BrandModel.findByIdAndDelete(id)
    res.send(removeBrand)
})
app.listen(3001, () => {
    console.log("http://localhost:3001")
})
