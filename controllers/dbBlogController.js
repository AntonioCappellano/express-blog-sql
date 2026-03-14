const connection = require("../data/db");
function index(req, res) {
  const sql = `SELECT * FROM posts`;

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: `Database query failed` });
    res.json({ success: true, message: `Post nel DB`, results });
  });
}

function show(req, res) {
  const id = req.params.id;
  const sql = `SELECT * FROM posts WHERE id = ?`;
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: `Database query failed` });
    if (results.length === 0)
      return res.status(404).json({ error: `Post not found` });
    res.json({ success: true, results : results[0] });
  });
}

function store(req, res) {}

function update(req, res) {}

function modify(req, res) {}

function destroy(req, res) {
  const { id } = req.params;
  const sql = `DELETE FROM posts WHERE id = ?`;

  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: `Failed to delete posts` });
    res.json({ success: true, message: `Eliminazione del post` });
  });
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
