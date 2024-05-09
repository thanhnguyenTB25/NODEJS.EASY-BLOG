module.exports = function sortMiddleWare(req,res,next) {
    res.locals._sort = {
        enable: 'false',
        type: 'default'
    };
    if (req.query.hasOwnProperty('_sort')) {
            // res.locals._sort.enable = true;
            // res.locals._sort.type = req.query.type
            // res.locals._sort.column = req.query.column
            //or using object assign
            Object.assign(res.locals._sort, {
                enable: true,
                column: req.query.column,
                type: req.query.type,

            });
    }
    next()
}