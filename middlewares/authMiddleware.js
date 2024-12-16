import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET_KEY;

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: "No token provided" });
    }
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({ error: "Failed to authenticate token" });
        }
        req.userId = decoded.id;
        next();
    });
};
