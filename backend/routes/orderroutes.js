import express from "express"
import auauthMiddleware from "../middleware/auth.js"
import {placeorder,verify} from "../controllers/ordercontrollers.js"

const orderroutes=express.Router()

orderroutes.post("/place",auauthMiddleware,placeorder)
orderroutes.post("/verify",verify)

export default orderroutes