const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "cotitle":String,
        "codesc":String,
        "codate":String,
        "codurn":String,
        "covenue":String,
        "cotrainer":String,

    }
)
let coursemodel=mongoose.model("courses",schema);
module.exports={coursemodel}