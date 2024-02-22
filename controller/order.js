const Model = require("../models/order");
const asyncHandler = require("../middleware/asyncHandler");

exports.createOrder = asyncHandler(async (req, res, next) => {
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

exports.updateOrder = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const old = Model.findById(id);
    if (!old) {
      res.status(400).json({
        success: false,
        msg: "Дараах id байхгүй байна",
      });
    }

    const inputData = {
      ...req.body,
      //   photos: req.file ? photoFilenames : old?.photos,
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

exports.getOrders = asyncHandler(async (req, res, next) => {
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

exports.getOrder = asyncHandler(async (req, res, next) => {
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

exports.deleteOrder = asyncHandler(async (req, res, next) => {
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
