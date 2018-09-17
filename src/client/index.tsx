import * as React from "react"
import * as ReactDOM from "react-dom"

const App: React.StatelessComponent<{}> = () => (
	<div>Hello World from the client</div>
)

ReactDOM.render(<App />, document.querySelector("#root"))
