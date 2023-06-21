import mongoose from "mongoose";

const { Schema, model } = mongoose;

const placeSchema = new Schema({
  place: { type: String, required: true },
  id: { type: String, required: true },
});

const Place = mongoose.models.Place || model("Place", placeSchema);

export default Place;
