module.exports = (req, res, next) => {
  res.header("Content-Range", "posts range 0-10/10");
  next();
};
