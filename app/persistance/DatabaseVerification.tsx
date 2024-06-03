import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import LocalDB from '../persistance/localdb';

const verifyDatabase = async () => {
  const db = await LocalDB.connect();
  db.transaction(tx => {
    tx.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table';",
      [],
      (_, { rows }) => {
        const tables = [];
        for (let i = 0; i < rows.length; i++) {
          tables.push(rows.item(i).name);
        }
        console.log("Tables in database:", tables);
      },
      error => {
        console.error("Error listing tables:", error);
      }
    );
  });
};

const verifyTableStructure = async (tableName: string) => {
  const db = await LocalDB.connect();
  db.transaction(tx => {
    tx.executeSql(
      `PRAGMA table_info(${tableName});`,
      [],
      (_, { rows }) => {
        const columns = [];
        for (let i = 0; i < rows.length; i++) {
          columns.push(rows.item(i));
        }
        console.log(`Structure of table '${tableName}':`, columns);
      },
      error => {
        console.error(`Error getting structure of table '${tableName}':`, error);
      }
    );
  });
};

const DatabaseVerification = () => {
  useEffect(() => {
    const verify = async () => {
      await verifyDatabase();
      await verifyTableStructure('productos');
      await verifyTableStructure('movimientos');
    };

    verify();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Verifying Database...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default DatabaseVerification;
