import { Request, Response } from "express";
import knex from "knex";

class userController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      if (req.body) {
        await knex("users").insert(req.body);
        res.status(200).json({ message: "Usuário Criado com sucesso!" });
      }
    } catch (err) {
      res.status(400).json({ message: "Erro ao criar o usuário" });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const id = req.params.id;

    try {
      if (id && req.body) {
        await knex("users").update(req.body);
        res.status(200).json({ message: "Registro Atualizado com Sucesso!" });
      }
    } catch (err) {
      res.status(400).json({ message: "Erro ao atualizar o registro" });
      console.log(err);
    }
  }

  public async remove(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      if (id) {
        await knex("users").del(["id"]).where({ id });
        res.status(200).json({ message: "Registro deletado com Sucesso!" });
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Erro ao deletar o registro" });
    }
  }
  
  public async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      if (id) {
        await knex("users").select("*").where({ id });
        res.status(200).json({ message: `Resultados para o Usuário ${id}` });
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Erro ao buscar o registro" });
    }
  }
}

export default new userController();
