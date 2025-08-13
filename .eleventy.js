// .eleventy.js — version CommonJS
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/robots.txt": "robots.txt"});

  // ➜ Collections
  eleventyConfig.addCollection("cours", c => c.getFilteredByGlob("src/cours/**/index.md"));
  eleventyConfig.addCollection("industrie", c => c.getFilteredByGlob("src/cours/industrie/**/index.md"));
  eleventyConfig.addCollection("education", c => c.getFilteredByGlob("src/cours/education/**/index.md"));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
