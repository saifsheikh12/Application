import  express  from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'


mongoose.connect('mongodb://localhost:27017/?directConnection=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
});

const app = express();

app.use(bodyParser.json());




app.post('/api/users', async (req, res) => {
  const { name } = req.body;
  const user = new User({ name });

  try {
    await user.save();
    res.status(201).send('User created!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});





const userSchema = new mongoose.Schema({
  name: String
});

const User = mongoose.model('User', userSchema);





