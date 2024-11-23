const { Schema, model } = require("mongoose");

const citySchema = new Schema(
  {
    city: {
      type: String,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const cityWeatherModel = model("CityWeather", citySchema)

module.exports = cityWeatherModel
