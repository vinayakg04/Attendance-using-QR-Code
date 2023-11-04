// Create Token and saving in cookie

const sendToken = (student, statusCode, res) => {
    const tokenStudent = student.getJWTToken();
  
    // options for cookie
    const options = {
      expiresIn: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    res.status(statusCode).cookie("tokenStudent", tokenStudent, options).json({
      success: true,
      student,
      tokenStudent,
    });
  };
  
  module.exports = sendToken;