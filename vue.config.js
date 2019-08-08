module.exports = {
    css: {
      loaderOptions: {
        sass: {
          // @/ is an alias to src/
          // so this assumes you have a file named `src/variables.scss`
          data: `@import "~@/styles/_colors.scss"; @import "~@/styles/_weather.scss";`
        }
      }
    }
}