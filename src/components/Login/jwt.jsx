import jwt from "jsonwebtoken";

const secretKey = "...myntra...com...";

const generateJwt = (phNo) => {
    const payload = {
        phoneNumber: phNo
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });
    return token;
};

export default generateJwt;

