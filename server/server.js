import express from 'express';
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', ((req, res) => {
  res.render('index');
}));

app.use(express.static(path.join(__dirname, '../public')));
app.listen(4000, () => console.log('Example app listening on port 4000!'));
