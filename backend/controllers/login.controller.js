const { Prisma, PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

const login = async (req, res) => {
  try {
    prisma.$connect();
    const { email, password } = req.body;
    // VALIDATE THE USER EMAIL IYTS EXISITING OR NOT
    const userExist = await prisma.userDetails.findUnique({
      where: {
        email,
      },
    });

    if (userExist) {
      //USING BECRYPT COMPARE TO COMPARE THE PASSWORD
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        userExist.password
      );
      if (isPasswordValid) {
        // CREATING TEMP KEY WITH JWT.SIGN
        let tempKey = jwt.sign({ email: userExist.email }, "temp-key", {
          expiresIn: "1h",
        });
        // CREATING MAIN KEY WITH JWT.SIGN
        let mainKey = jwt.sign({ email: userExist.email }, "main-key", {
          expiresIn: "1h",
        });
        //CREATED RESPONSE PAYLOAD 
        const payload = {
          user_id: userExist.user_id,
          user_name: userExist.user_name,
          user_email: userExist.email,
          token: {
            tempKey,
            mainKey,
          },
        };

        res.status(200).json({
          message: "Login",
          data: payload,
        });
      } else {
        res.status(400).json({
          message: "invalid password",
        });
      }
      //return res.status(500).json({ message: "user id already exist" });
    } else {
      res.status(400).json({
        message: "user is not found!!!",
      });
    }
  } catch (error) {
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      res.status(500).json({
        message: error,
      });
    }
  } finally {
    prisma.$disconnect();
  }
};

const refreshToken = (req, res) => {
  const { token } = req.body;
  jwt.verify(token, "main-key", (err, decode) => {
    if (err) {
      res.status(400).json({
        message: "invalid token",
      });
    } else {
      let tempKey = jwt.sign({ email: decode.email }, "temp-key", {
        expiresIn: "1h",
      });

      res.status(200).json({
        refreshToken: tempKey,
      });
    }
  });
};
module.exports = {
  login,
  refreshToken,
};
