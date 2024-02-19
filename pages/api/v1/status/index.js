import database from "../../../../infra/database";

async function status(req, res) {
  const result = await database.query("SELECT 1 + 1 as soma;");
  console.log(result.rows);
  return res.status(200).json({ status: "ok amigo" });
}

export default status;
