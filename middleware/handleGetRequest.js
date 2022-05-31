const handleGetRequest = (path) => (req, res, next) => {
  res.render(path, (error, html) => {
    if (!error) {
      res.set({ 'Content-type': 'text/html; charset=utf-8' });
      res.end(html);
    } else {
      if (!path.endsWith('/index')) {
        handleGetRequest(`${path}/index`, res, next);
      }
      next(error);
    }
  });
};

module.exports = {
  handleGetRequest,
};
