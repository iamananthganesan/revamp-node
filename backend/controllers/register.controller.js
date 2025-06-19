const bcrypt = require("bcrypt");
const { Prisma, PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const register = async (req, res) => {    
  try {
    prisma.$connect();    
    const { user_id, email, password } = req.body;
    // VALIDATE THE USER EMAIL IYTS EXISITING OR NOT    
    const userExist = await prisma.userDetails.findUnique({
      where: {
        email,
      },
    });
    console.log(userExist);
    if (userExist) {
      return res.status(500).json({ message: "user id already exist" });
    } else {
      console.log("else");
      const hashed_password = await bcrypt.hash(password, 10);
      const enrollRegister = await prisma.userDetails.create({
        data: {
          user_id,
          email,
          password: hashed_password,
        }        
      });
      console.log("enrollRegister", enrollRegister);
      res.status(201).json({
        message: `${user_id} registered successfully`,
        enrollRegister,
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

module.exports = {
  register,
};
