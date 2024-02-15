import { Request, Response } from "express";
import knex from "knex";

class serviceController {
  public async removeService(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      if (id) {
        await knex("service").del(["id"]).where({ id });
        res.status(200).json({ message: "Serviço deletado com Sucesso" });
      }
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }

  public async getServiceById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      if (id) {
        await knex("services").select("*").where({ id });
        res.status(200).json({ message: `Resultado para Serviço ${id}` });
      }
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }

  public async handleAddToList(req: Request, res: Response): Promise<void> {
    const { name, status } = req.body;
    try {
      if (name && status) {
        (await knex("services").insert(name, status)).values();
        res.status(200).json({ message: "Serviço Adicionado a Lista" });
      }
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }
  
  public async updateService(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const { name, status } = req.body;
    try {
      if (id && status) {
        await knex("services").update({ name, status }).where({ id });
        res.status(200).json({ message: "Serviço Atualizado com Sucesso!" });
      }
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }

  public async updateAllServices(req: Request, res: Response): Promise<void> {
    const status = req.params.status;
    try {
      if (status) {
        await knex("services").update({ status }).where({ status });
        res.status(200).json({ message: "Serviços Atualizados com Sucesso!" });
      }
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }
}

export default new serviceController();
