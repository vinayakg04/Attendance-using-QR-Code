// Create Token and saving in cookie

const sendToken = (admin, statusCode, res) => {
    const tokenAdmin = admin.getJWTToken();
  
    // options for cookie
    const options = {
      expiresIn: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    res.status(statusCode).cookie("tokenAdmin", tokenAdmin, options).json({
      success: true,
      admin,
      tokenAdmin,
    });
  };
  
  module.exports = sendToken;