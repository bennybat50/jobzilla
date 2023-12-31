const mongoose = require("mongoose")
const jobCategorychema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    job_id:[{type:mongoose.Schema.Types.ObjectId, ref:"job"}],
    application_id:[{type:mongoose.Schema.Types.ObjectId, ref:"apply"}],

},

{timestamps: true}
)

const jobCategoryModel = mongoose.model("jobCategory", jobCategorychema)
module.exports = jobCategoryModel