// .eleventy.js
const fs = require("fs");

module.exports = function (eleventyConfig) {
  // Ne pas s'appuyer sur .gitignore pour exclure des fichiers statiques
  eleventyConfig.setUseGitIgnore(false);

  // 🔒 Copie robuste de tout /src/assets vers /_site/assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // 🔧 Et on force explicitement la copie des .svg (au cas où une autre règle les bloque)
  eleventyConfig.addPassthroughCopy({ "src/assets/**/*.svg": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/assets/icons": "assets/icons" });

  // Regarde les changements dans /assets
  eleventyConfig.addWatchTarget("src/assets/");

  // (Optionnel) Shortcode pour inline un SVG depuis /src (fallback zéro-404)
  eleventyConfig.addNunjucksShortcode("inlineSvg", (relPathFromSrc) => {
    const full = `src/${relPathFromSrc}`;
    return fs.existsSync(full) ? fs.readFileSync(full, "utf8") : "";
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
    pathPrefix: process.env.PREFIX || "/"
  };
};
