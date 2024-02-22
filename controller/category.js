const Model = require("../models/category");
const asyncHandler = require("../middleware/asyncHandler");

exports.createCat = asyncHandler(async (req, res, next) => {
  try {
    const body = {
      ...req.body,
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

exports.updateCat = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;

    const inputData = {
      ...req.body,
      //   photo: req.file?.filename ? req.file.filename : old?.photo,
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

exports.getCats = asyncHandler(async (req, res, next) => {
  try {
    const perfume = await Model.find();
    res.status(200).json({
      success: true,
      data: perfume,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

exports.getCat = asyncHandler(async (req, res, next) => {
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

exports.deleteCat = asyncHandler(async (req, res, next) => {
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
