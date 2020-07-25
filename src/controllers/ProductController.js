import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Product from '../models/Product'

export async function index(req, res) {
    try {
        const { page = 1 } = req.query
        const products = await Product.paginate({}, { page, limit: 10 })
        return res.json(products)
    } catch (err) {
        console.error(err)
    }
}

export async function store(req, res) {
    try {
        const product = await Product.create(req.body)
        return res.json(product)
    } catch (err) {
        console.error(err)
    }
}

export async function show(req, res) {
    try {
        const product = await Product.findById(req.params.id)
        return res.json(product)
    } catch (err) {
        console.error(err)
    }
}

export async function update(req, res) {
    try {
        // The new parameter forces Mongo to return the updated product
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false })
        return res.json(product)
    } catch (err) {
        console.error(err)
    }
}

export async function destroy(req, res) {
    try {
        await Product.findByIdAndRemove(req.params.id, { useFindAndModify: false })
        return res.send()
    } catch (err) {
        console.error(er)
    }
}