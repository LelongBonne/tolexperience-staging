module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("src/assets/");

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
    // ⬇ En local: PREFIX non défini → "/"
    // ⬇ Pour GitHub Pages: on passera PREFIX="/tolexperience-staging/"
    pathPrefix: process.env.PREFIX || "/"
  };
};
