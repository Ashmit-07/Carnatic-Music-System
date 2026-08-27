from flask import Flask, request, jsonify
from database import init_db, get_db
import os

app = Flask(__name__)
DB_PATH = os.path.join(os.path.dirname(__file__), 'sruthi.db')
init_db(DB_PATH)

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response

@app.route('/api/status')
def status():
    return jsonify({'status':'ok'})

@app.route('/api/compositions', methods=['GET','POST', 'OPTIONS'])
def compositions():
    if request.method == 'OPTIONS':
        return '', 200

    db = get_db(DB_PATH)
    try:
        if request.method == 'GET':
            cur = db.execute('SELECT id, name, content, created_at FROM compositions ORDER BY created_at DESC')
            rows = cur.fetchall()
            items = [dict(id=r['id'], name=r['name'], content=r['content'], created_at=r['created_at']) for r in rows]
            return jsonify(items)

        data = request.get_json() or {}
        name = data.get('name','Untitled')
        content = data.get('content','')
        cur = db.execute('INSERT INTO compositions (name, content) VALUES (?,?)', (name, content))
        db.commit()
        new_id = cur.lastrowid
        cur = db.execute('SELECT id, name, content, created_at FROM compositions WHERE id = ?', (new_id,))
        r = cur.fetchone()
        return jsonify(dict(id=r['id'], name=r['name'], content=r['content'], created_at=r['created_at']))
    finally:
        db.close()

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
