
exports.generateParams = (path) => {
  return path.replace(/^\/|\/$/g, "").split("/").filter((segment) => segment.length > 0);
};
