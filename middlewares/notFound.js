function notFound(req, res, next) {
    res.status(404).json({
        message: "Pagina non trovata",
        success: false
    })
}

module.exports = notFound