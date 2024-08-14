import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
    {
        clientName: String,
        email: String,
        state: String,
        clientCountry: String,
        trackingID: String,
        orderID: String,
        SenderName: String,
        senderTel: String,
        senderCountry: String,
        destination: String,
        orderDate: String,
        packageWeight: String,
        packageDesc: String,
        status: String,
        delDate: String,
        mode: String,
        officer: String,
        comment: String,
        map: String,
    },
    {
        timestamps: true,
    }
)

const Topic = mongoose.models.Topic || mongoose.model("Topic", userSchema)

export default Topic;