const ClassFoodProcessing = require('./Queue')

const mcd = new ClassFoodProcessing()
mcd
  .add('Chicken')
  .then(r => mcd
    .add('Nugget')
    .then(r => mcd
      .add('KFC')
      .then(r => mcd
        .add('Porridge')
        .then(r => mcd
          .runProcess()))))




