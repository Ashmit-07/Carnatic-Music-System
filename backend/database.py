import sqlite3
import os

_schema = '''
CREATE TABLE IF NOT EXISTS compositions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    content TEXT,
    created_at TEXT DEFAULT (datetime('now'))
);
'''


def init_db(db_path):
    os.makedirs(os.path.dirname(db_path), exist_ok=True)
    conn = sqlite3.connect(db_path)
    conn.executescript(_schema)
    conn.commit()
    conn.close()


def get_db(db_path):
    conn = sqlite3.connect(db_path, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn
