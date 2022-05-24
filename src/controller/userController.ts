import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";
import connection from "../database";

class userController {
 public async create(req:Request, res:Response):Promise<void>{
    const { nome_emp, cargo, comissao, status, salario, dt_nascimento } =
      req.body;
    if (
      !nome_emp ||
      !cargo ||
      !comissao ||
      !status ||
      !salario ||
      !dt_nascimento
    ) {
      res.status(400).json({ message: "Campos Vazios" });
    } else {
      connection.query(
        `INSERT INTO tb_empregado (nome_emp, cargo,dt_nascimento, salario,comissao,status)
        values('${nome_emp}', '${cargo}','${dt_nascimento}', '${salario}','${comissao}','${status}')`,
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
  public async update(req:Request, res:Response):Promise<void>{
    const id = req.params.id;
    const datas = {
      nome_emp: req.body.nome_emp,
      cargo: req.body.cargo,
      salario: req.body.salario,
    };

    if (!id || !datas.nome_emp || !datas.cargo || !datas.salario) {
      res.status(400).json({ message: "Os campos estão vazios" });
    } else {
      connection.query(
        "UPDATE tb_empregado SET ? WHERE id = ?",
        [datas, id],
        (err:any, results:ResultSetHeader) => {
          if (err) {
            res.status(400).json({ message: err.message });
          } else {
            res
              .status(200).json({ message: "Empregado Atualizado com Sucesso!" });
          }
        }
      );
    }
  }

  public async remove(req:Request, res:Response):Promise<void> {
    const { id } = req.params;

    if (!id) {
      res
        .status(400).json({ message: "Necessário informar o id para excluir o usuário" });
    } else {
      connection.query(
        " DELETE FROM tb_empregado WHERE id = ? ",
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
  public async users(req:Request, res:Response):Promise<void>{
    const { id } = req.params;
    connection.query(
      "SELECT * FROM `tb_empregado` WHERE id = ? ",
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
}

export default new userController();
