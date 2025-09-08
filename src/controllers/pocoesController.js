import dados from "../models/dados.js";
const {pocoes} = dados; 
 
const getAllPocoes = (req,res) => {
    let resultado = pocoes; 

    res.status(200).json({
        total: resultado.length,
        data: resultado
            })
}

const getPocoesById = (req,res) => {
    let id = req.params.id;
    id = parseInt(id);
    const pocao = pocoes.find(a => a.id === id);
    if (pocao){
        res.status(200).json(pocao);
    } else {
        res.status(404).json ({
            mensagem:"Poção não encontrada"
        });
    };
};

export {getAllPocoes, getPocoesById}