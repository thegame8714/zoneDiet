import * as express from "express"
import * as webpack from "webpack"
import * as webpackConfig from "../../webpack.config.js"
import * as webpackMiddleware from "webpack-dev-middleware"

const app = express()
app.use(webpackMiddleware(webpack(webpackConfig)))
app.get("/")

app.listen(4000, () => {
	console.log("Listening...")
})
