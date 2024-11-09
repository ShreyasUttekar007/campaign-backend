const mongoose = require("mongoose");
const { Schema } = mongoose;
  
const formSchema = new Schema(
  {
    option: {
      type: String,
      required: [true, "Please select an Option"],
      trim: true,
    },
  },
  { timestamps: true }
);

const formData = mongoose.model("formData", formSchema);

module.exports = formData;
