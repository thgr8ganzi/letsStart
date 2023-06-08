import {Request, Response} from "express";
import {Cat, CatType} from "./cats.model";

export const readAllCat = (req : Request, res :Response)=>{
    try{
        const data = req.body;
        console.log(data)
        res.status(200).send({
            success:true,
            data : {

            }
        })
    }catch (e) {
        res.status(400).send({
            success : false,
            msg : e.message
        })
    }
}
export const readCat = (req:Request, res:Response)=> {
    try{
        const params = req.params
        const cats = Cat.find((cat) => {
            return cat.id === params.id
        });
        req.params.id
        res.status(200).send({
            success:true,
            data : {
                cats
            }
        })
    }catch (e) {
        res.status(400).send({
            success : false,
            msg : e.message
        })
    }
}

export const createCat = (req:Request, res:Response) => {
    try{
        const params = req.params
        const body = req.body
        let result
        Cat.forEach((cat)=> {
            if(cat.id === params.id){
                cat = body;
                result = cat;
            }
        })
        res.status(200).send({
            success:true,
            data : {
                result
            }
        })
    }catch (e) {
        res.status(400).send({
            success : false,
            msg : e.message
        })
    }
}

export const updateCat = async (req:Request, res:Response) => {
    try{
        const params = req.params
        const body = req.body
        let result
        Cat.forEach((cat)=> {
            if(cat.id === params.id){
                cat = {...cat, ...body};
                result = cat;
            }
        })
        res.status(200).send({
            success:true,
            data : {
                result
            }
        })
    }catch (e) {
        res.status(400).send({
            success : false,
            msg : e.message
        })
    }
}

export const deleteCat = async (req:Request, res:Response) => {
    try{
        const params = req.params
        const newCat = Cat.filter((cat) => cat.id !== params.id)
        res.status(200).send({
            success:true,
            data : {
                newCat
            }
        })
    }catch (e) {
        res.status(400).send({
            success : false,
            msg : e.message
        })
    }
}
