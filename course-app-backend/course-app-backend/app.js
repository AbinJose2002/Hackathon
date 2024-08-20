const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { coursemodel } = require("./models/course")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const { registermodel } = require("./models/register")

const generateHashedPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://dhiya04:dhiyafisat@cluster0.wspdqan.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/signup", async (req, res) => {
    let input = req.body
    let hashedPassword = await generateHashedPassword(input.password)
    console.log(hashedPassword)
    input.password = hashedPassword
    let register = new registermodel(input)
    register.save()
    console.log(register)
    res.json({"status":"success"})
})

app.post("/login",(req,res) => {
    let input = req.body
    registermodel.find({"email":req.body.email}).then(
        (response) => {
            if (response.length > 0) {
                let dbPassword = response[0].password
                console.log(dbPassword)
                bcrypt.compare(input.password,dbPassword,(error,isMatch)=>{
                    if (isMatch) {
                        jwt.sign({email:input.email }, "course-app", {expiresIn: "1d" }, (error, token) => {
                            if (error) {
                                res.json({ "status": "unable to create token" })
                            }
                            else {
                                res.json({ "status": "success", "userid": response[0]._id, "token": token })
                            }
                        }
                        )
                    } else {
                        res.json({ "status": "incorrect" })
                    }
                })
            }
            else {
                res.json({ "status": "user not found" })
            }
        }
    ).catch()

})



app.post("/add", (req, res) => {
    let input = req.body
    let course = new coursemodel(input)
    course.save()
    console.log(course)
    res.json({ "status": "success" })
})

app.post("/search", (req, res) => {
    let input = req.body
    coursemodel.find(input).then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )

})

app.post("/delete", (req, res) => {
    let input = req.body
    coursemodel.findByIdAndDelete(input._id).then(
        (response) => {
            window.location.reload(true);
            res.json({ "status": "success" })
        }
    ).catch(
        (error) => {
            res.json({ "status": "error" })
        }
    )

})

app.get("/view", (req, res) => {
    coursemodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch()
})

app.listen(8080, () => {
    console.log("Server Started")
})