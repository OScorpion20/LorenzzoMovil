import SQLite from 'react-native-sqlite-storage';

export default class LocalDB {
  static async connect() {
    return SQLite.openDatabase({ name: 'inventario' }, () => {
      console.log("Database connected successfully");
    }, (error) => {
      console.error("Failed to connect to the database", error);
    });
  }

  static async init() {
    const db = await LocalDB.connect();
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS productos (
          id TEXT PRIMARY KEY,
          nombre TEXT NOT NULL,
          descripcion TEXT NOT NULL,
          precio REAL NOT NULL,
          minStock INTEGER NOT NULL
        );`,
        [],
        () => { console.log("Table 'productos' created successfully"); },
        error => console.error("Failed to create table 'productos'", { error })
      );
    });
  }
}
