const restFul = require('node-restful')
const mongoose = require('mongoose')

const creditSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: [true, "Informe o valo do débito!"] },
    status: { type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    month: { type: Number, required: true, min: 1, max: 12 },
    year: { type: Number, required: true, min: 1970, max: 2100 },
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restFul.model("BillingCycle", billingCycleSchema)