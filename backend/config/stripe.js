const Stripe = require('stripe')

const stripe = Stripe(process.env.STRIPE_SECRECT_KEY)

module.exports = stripe