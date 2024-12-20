const cityService = require("../services/city.service");

const getCities = async (req, res) => res.json(await cityService.getCities());

const getCity = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id); 
    res.send(city); 
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" }); 
  }
};

const createCity = async (req, res) => {
  const body = req.body;
  const { name } = body;

  if (name?.trim().length < 3)
    return res.status(400).json({ error: "City name must be greater than 3" });

  try {
    let result = await cityService.createCity(name);

    res.json({
      message: "City created successfully",
      city: result,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCity = async (req, res) => {
  try {
    const deletedCity = await cityService.deleteCity(req.params.id); 
    res.status(200).json({message: "City deleted succesfully", deletedCity}); 
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" }); 
  }
};

const cityController = {
  getCities,
  getCity,
  createCity,
  deleteCity,
};

module.exports = cityController;