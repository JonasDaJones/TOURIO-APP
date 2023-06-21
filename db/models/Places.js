import mongoose from "mongoose";

const { Schema, model } = mongoose;

const placesSchema = new Schema({
  place: { type: String, required: true },
  id: { type: String, required: true },
});

const Place = mongoose.models.Place || model("Place", placesSchema);

export default Place;
