import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";
import connection from "../database";

class serviceController {
 
  public async removeUser(req:Request, res:Response):Promise<void> {
    const { id } = req.params;

    if (!id) {
      res
        .status(400).json({ message: "Necessário informar o id para excluir o usuário" });
    } else {
      connection.query(
        " DELETE FROM service WHERE id = ? ",
        [Number(id)],
        (err: any) => {
          if (err) {
            res.status(400).json({ message: err.message });
          } else {
            res.status(200).json({ message: "Usuário deletado com Sucesso" });
          }
        }
      );
    }
  }
  
  public async AllUsers(req:Request, res:Response):Promise<void>{
    const { id } = req.params;
    connection.query(
      "SELECT * FROM `service`",
      [id],
      function (err:any, results:any) {
        if (err) {
          res.status(400).json({ message: err.message });
        } else {
          if (results.length === 0) {
            res.status(400).json({ message: "Nehum usuário encontrado!" });
          } else {
            res.status(200).json({ data: results });
          }
        }
      }
    );
  }

  public async addList(req:Request, res:Response):Promise<void>{
    const { nome , status} =
      req.body;
    if (!nome && !status) {
      res.status(400).json({ message: "Campos Vazios" });
    } else {
      connection.query(
        `INSERT INTO service (nome,status)
        values('${nome}','${status}')`,
        (err:any) => {
          if (err) {
            res.status(400).json({ message: err.message });
          } else {
            res.status(200).json({ message: "Usuário Registrado com Sucesso" });
          }
        }
      );
    }
  }
  public async updateUser(req:Request, res:Response):Promise<void>{
    const id = req.params.id;
    const datas = {
      nome: req.body.nome,
      status: req.body.status,
    };

    if (!id ||!datas.status ) {
      res.status(400).json({ message: "Os campos estão vazios" });
    } else {
      connection.query(
        "UPDATE service SET ? WHERE id = ?",
        [datas, id],
        (err:any, results:ResultSetHeader) => {
          if (err) {
            res.status(400).json({ message: err.message });
          } else {
            res
              .status(200).json({ message: "Usuário Atualizado com Sucesso!" });
          }
        }
      );
    }
  }

  public async updateAllUsers(req:Request, res:Response):Promise<void>{
    const status  = req.params.status;

      connection.query(
        "UPDATE service SET status = ?",
        [status],
        (err:any, results:ResultSetHeader) => {
          if (err) {
            res.status(400).json({ message: err.message });
          } else {
            res
              .status(200).json({ message: "Usuário Atualizado com Sucesso!" });
          }
        }
      );
    }
  

}

export default new serviceController();
