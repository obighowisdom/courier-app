import mongoose, { Schema } from 'mongoose'

const updateSchema = new Schema(
  {
    trackingID: String,
    title: String,
    company: String,
    date: String,
    time: String,
  },
  {
    timestamps: true,
  }
)

const Update = mongoose.models.Update || mongoose.model("Update", updateSchema)

export default Update;