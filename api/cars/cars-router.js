const express = require("express");
const carsModel = require('./cars-model.js')
const router = express.Router();


//   router.get("/", async (req, res, next) => {
//     try {
//       const cars = await getCars();
//       res.status(200).json(cars);
//     } catch (err) {
//       err.message = "can't get cars.";
//       err.statusCode = 500;
//       next(err);
//     }
//   });



// router.get('/', (req, res) => {
//     res.send('hello');
// });
// })

router.get('/', (req, res) => {
    carsModel.getCars()
    .then((cars)=>{
        res.status(200).json(cars)
    })
    .catch((error)=>{
        res.status(500).json({error:error.message})
    })
});





router.get("/:id", (req, res, next) => {
    const { id } = req.params
    
    carsModel
    .getById(id)
    .then((cars) => {
        res.status(200).json(cars)
    })
    .catch((error) => {
        res.status(500).json({ error:error.message})
    })
});


  
router.post("/", async (req, res) => {
    const createNewCar = req.body;


    carsModel.insert(createNewCar)
    .then((cars) => {
        res.status(201).json(createNewCar)
    })
    .catch((error) => {
        res.status(500).json({error:error.message})
    })
});

router.delete('/:id', async(req, res) => {
    const { id } = req.params;

    carsModel.remove(id)
    .then((car) => {
        res.status(200).json(`${id} "deleted"`)
    })
    .catch((error) => {
        res.status(500).json({error:error.carmessage})
    })
})


module.exports = router;
