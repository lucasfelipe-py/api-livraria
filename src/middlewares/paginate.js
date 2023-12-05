import IncorrectReq from "../errors/IncorrectReq.js";

async function paginate(req, res, next) {
  try {
    let { qtBooks = 5, page = 1, sort = "_id:-1"} = req.query;
    
    let [field, order] = sort.split(":");
  
    qtBooks = parseInt(qtBooks);
    page = parseInt(page);
    order = parseInt(order);

    const result = req.result;
  
    if (qtBooks > 0 && page > 0) {
      const paginatedResult = await result.find()
        .sort({ [field]: order })
        .skip((page - 1) * qtBooks)
        .limit(qtBooks)
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