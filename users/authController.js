const userSchema = require(‘./userModel’);
const User = mongoose.model(‘User’, userSchema);
const registerUser = (req, res) => {
  
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  newUser.save((error, User) => {
    var token = jwt.sign({ id: User._id }, config.secretKey, 
      {expiresIn: 86400});
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send({auth: true, token: token});
    };
  });
};