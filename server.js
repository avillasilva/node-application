import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './src/routes/routes'

const app = express()
app.use(express.json())

// Database setup
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true })

// Routes
app.use('/api', routes)
app.use(cors())

app.listen(3001)