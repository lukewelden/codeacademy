const checkMillionDollarIdea = (req, res, next) => {
    const weeks = Number(req.body.numWeeks);
    const revenue = Number(req.body.weeklyRevenue);

    if (weeks && revenue) {
        const profit = Number(req.body.numWeeks) * Number(req.body.weeklyRevenue);
        if (profit < 1000000) {
            res.status(400).send();
        } else {
            next();
        }
    } else {
        res.status(400).send('Must supply numWeeks and weeklyRevenue properties');
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;

