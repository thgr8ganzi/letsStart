import {Cat} from "./cats.model";
import {Router} from "express";
import {createCat, deleteCat, readAllCat, readCat, updateCat} from "./cats.service";

const router = Router()

router.get('/',(req, res)=>{
    res.send({cats: Cat})
})
router.get('/cats/:id', readCat)
router.post('/cats', readAllCat)
router.put('/cats/:id', createCat)
router.patch('/cats/:id', updateCat)
router.delete('/cats/:id', deleteCat)

export default router;