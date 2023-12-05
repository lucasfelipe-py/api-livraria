import IncorrectReq from "../errors/IncorrectReq.js";

async function paginate(req, res, next) {
  try {
    let { quantity = 5, page = 1, sort = "_id:-1"} = req.query;
    
    let [field, order] = sort.split(":");
  
    quantity = parseInt(quantity);
    page = parseInt(page);
    order = parseInt(order);

    const result = req.result;
  
    if (quantity > 0 && page > 0) {
      const paginatedResult = await result.find()
        .sort({ [field]: order })
        .skip((page - 1) * quantity)
        .limit(quantity)
        .exec();
      res.status(200).json(paginatedResult);
    } else {
      next(new IncorrectReq());
    }

  } catch (err) {
    next(err);
  }
}

export default paginate;