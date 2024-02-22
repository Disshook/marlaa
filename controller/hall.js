const Model = require("../models/hall");
const asyncHandler = require("../middleware/asyncHandler");

exports.createHall = asyncHandler(async (req, res, next) => {
  try {
    let photoFilenames = req.files
      ? req.files.map((file) => file.filename)
      : ["no-photo.png"];

    const body = {
      ...req.body,
      photos: photoFilenames, // This now expects an array
    };

    const total = await Model.create(body);

    res.status(200).json({
      success: true,
      data: total,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

exports.updateHall = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const old = Model.findById(id);
    if (!old) {
      res.status(400).json({
        success: false,
        msg: "Дараах id байхгүй байна",
      });
    }
    let photoFilenames = req.files
      ? req.files.map((file) => file.filename)
      : ["no-photo.png"];

    const inputData = {
      ...req.body,
      photos: req.file ? photoFilenames : old?.photos,
    };
    const perfume = await Model.findByIdAndUpdate(id, inputData);
    res.status(200).json({
      success: true,
      data: perfume,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

exports.getHalls = asyncHandler(async (req, res, next) => {
  try {
    const perfume = await Model.find().populate("category")
    res.status(200).json({
      success: true,
      data: perfume,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

exports.getHall = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;

    const perfume = await Model.findById(id);
    return res.status(200).json({
      success: true,
      data: perfume,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

exports.deleteHall = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const perfume = await Model.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      data: perfume,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Энд дуусаж байгаа шүүү
