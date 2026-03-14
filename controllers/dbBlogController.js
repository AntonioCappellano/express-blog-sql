const connection = require("../data/db");
function index(req, res) {
  const sql = `SELECT * FROM posts`;

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: `Database query failed` });
    res.json({ success: true, message: `Post nel DB`, results });
  });
}

function show(req, res) {}

function store(req, res) {}

function update(req, res) {}

function modify(req, res) {}

function destroy(req, res) {
  const {id} = req.params
  const sql = `DELETE FROM posts WHERE id = ?`

 connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: `Failed to delete posts` });
    res.json({ success: true, message: `Eliminazione del post`});
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
