const express = require('express');
<<<<<<< HEAD
require('./services/passport')

const app = express();

require('./routes/authRoutes')(app)

=======
const app = express();

app.get('/',(req,res) => {
    res.send({hi:"there"});
});
>>>>>>> 81656593813a9784c1e01f6a2c8cba6713524f71

const PORT = process.env.PORT || 5000;
app.listen(PORT);