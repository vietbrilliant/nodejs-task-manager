const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   console.log(req.method, req.path);

//   next();
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

const Task = require('./models/task');
const User = require('./models/user');

// const main = async () => {
//   // const task = await Task.findById('5f64ef68fe192a429cf13c16');
//   // await task.populate('owner').execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById('5f64ee8a0bf8261130f358b9');
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// };

// main();
