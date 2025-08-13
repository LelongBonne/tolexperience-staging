/** .eleventy.js */
module.exports = function (eleventyConfig) {
  // (facultatif) copier des assets si besoin
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    // Très important : on rend les pages HTML et Markdown avec Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // Et on précise qu'on veut bien traiter .njk et .md
    templateFormats: ["njk", "md", "html"]
  };
};
