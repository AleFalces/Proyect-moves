let catchErros = (controller) => {
  return (req, res, next) => {
    return controller(req, res, next).catch(next);
  };
};

module.exports = catchErros;
