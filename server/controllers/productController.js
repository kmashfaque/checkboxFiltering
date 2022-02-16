import Product from "../models/productModel.js";
import asyncHandler from "../middleware/asyncMiddleware.js";
import ErrorResponse from "../utills/errorResponse.js";

const getAllProducts = asyncHandler(async (req, res, next) => {
  let reqQuery = req.body;

  let findArgs = { ...reqQuery };

  // for (let key in req.body.filters) {
  //   if (req.body.filters[key].length > 0) {
  //     findArgs[key] = req.body.filters[key];
  //   } else {
  //     console.error(error.message);
  //   }
  // }
  // console.log(findArgs);
  const product = await Product.find(findArgs);

  res.status(200).json({
    success: true,
    data: product,
  });
});

const createNewProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    data: product,
  });
});

const updateProductById = asyncHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(
      new ErrorResponse(`product ${req.params.id} was not found`, 404)
    );
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    data: product,
  });
});

const deleteProductById = asyncHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(
      new ErrorResponse(`product ${req.params.id} was not found`, 404)
    );
  }
  await product.remove();

  res.status(200).json({
    success: true,
    data: product,
  });
});

export {
  getAllProducts,
  createNewProduct,
  updateProductById,
  deleteProductById,
};
