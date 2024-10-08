import express from "express"
import auauthMiddleware from "../middleware/auth.js"
import {placeorder} from "../controllers/ordercontrollers.js"

const orderroutes=express.Router()

orderroutes.post("/place",auauthMiddleware,placeorder)

export default orderroutes