import mongoose from "mongoose";

const plantSchema = mongoose.Schema({}, {strict:false});
export default mongoose.model("Plant", plantSchema);