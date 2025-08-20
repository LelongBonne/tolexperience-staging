// .eleventy.js
const fs = require("fs");

module.exports = function (eleventyConfig) {
  // Copie robuste de tous les assets (dont /assets/icons/*.svg)
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("src/assets/icons");

  // Surveille les assets en dev
  eleventyConfig.addWatchTarget("src/assets/");

  // Shortcode pratique pour inline un SVG (optionnel)
  eleventyConfig.addNunjucksShortcode("inlineSvg", (relPathFromSrc) => {
    const full = `src/${relPathFromSrc}`;
    return fs.existsSync(full) ? fs.readFileSync(full, "utf8") : "";
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
    // En prod GitHub Pages, définis PREFIX="/tolexperience-staging/" dans le workflow si besoin
    pathPrefix: process.env.PREFIX || "/"
  };
};
