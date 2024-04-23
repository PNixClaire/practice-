import reviews from "./api/reviews.route.js"

//variable for express
const app = express()

app.use(cors())
app.use(express.json)

app.use("/api/v1/reviews", reviews)
app.use("*", (req, res) => res.status(404).json({error: "page not found"})) //404 error

export default app //allow other files to access app