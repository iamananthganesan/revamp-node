const { Prisma, PrismaClient } = require("@prisma/client");

//CREATED INSTANCE FOR THE PRISMA
const prisma = new PrismaClient();
//GET STUDENT LIST
const getStudentList = async (req, res) => {
  try {
    prisma.$connect();
    const studentlist = await prisma.user.findMany();
    res.status(200).json({
      message: "Student list",
      studentlist,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(500).json({
        message: "Internal server error while hitting the student list API",
        error,
      });
    }
  } finally {
    prisma.$disconnect();
  }
};

//GET STUDENT DETAILS BY ID
const getStudentDetailsById = async (req, res) => {
  const { studentId } = req.params;
  try {
    prisma.$connect();
    const studentdetail = await prisma.user.findUnique({
      where: {
        id: Number(studentId),
      },
    });
    res.status(200).json({
      message: "student details",
      studentdetail,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(500).json({
        message: "internal server error while fetching the student details",
        error,
      });
    }
  } finally {
    prisma.$disconnect();
  }
};

//PUT UPDATE STUDENT DETAILS BY ID
const updateStudentDetails = async (req, res) => {
  const { id, email, name } = req.body;
  console.log(id, name, email);
  try {
    prisma.$connect();
    const studentdetail = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        id: Number(id),
        email,
        name,
      },
    });
    res.status(200).json({
      message: "student details",
      studentdetail,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(500).json({
        message: "internal server error while updating the student details",
        error,
      });
    }
  } finally {
    prisma.$disconnect();
  }
};

//POST ENROLL NEW STUDENT
const createStudentDetails = async (req, res) => {
  const { id, email, name } = req.body;
  console.log(id, email, name);
  try {
    prisma.$connect();
    const enrollStudent = await prisma.user.create({
      data: {
        id: Number(id),
        email,
        name,
      },
    });
    res.status(200).json({
      message: "New student enrolled successfully!!!",
      enrollStudent,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(500).json({
        message: "Internal server error while enrolling new student details",
        error,
      });
    }
  } finally {
    prisma.$disconnect();
  }
};

module.exports = {
  getStudentList,
  getStudentDetailsById,
  updateStudentDetails,
  createStudentDetails,
};
