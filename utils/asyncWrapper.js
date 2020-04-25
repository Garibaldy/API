//all errors caught by async wrapper and sent to error handler 
// no need fo try catch

export const AsyncWrapper = func=> (req, res, next) =>
    func(req, res).catch(next);