const isPaidAuth = (req, res, next) => {
   req.isPaid = process.env.IS_PAID === 'true';
   next();
};

export default isPaidAuth;
