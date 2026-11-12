import express from "express"
import path from "path"
import router from "./routes/calendarRoutes.js"

const app = express()

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use("/bootstrapcss", express.static(path.join(import.meta.dirname, "node_modules/bootstrap/dist/css")))
app.use(router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
})