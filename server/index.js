const express = require('express')
const mongoose = require('mongoose')
const expenseSchema = require('./Models/expense')
const bodyParser = require('body-parser')

const expenseModel = mongoose.model('Expense', expenseSchema)

const app = express()

app.arguments(bodyParser.urlencoded({extended: false}))

const mongoDbAccess =