class DataBase
{ constructor() 
  { this.connectionPromise = globalThis.sqlite3InitModule().then((sqlite3) => 
    { try 
      { let oo = sqlite3.oo1;
        this.database = new oo.DB("/mydb.sqlite3", 'ct');;
        return true;
      } 
      catch(error) 
      { console.error(error); }
    });
  }

  async exec(SQL, ROWMODE) 
  { await this.connectionPromise;
    try 
    { this.database.exec(
      { sql: SQL, 
        rowMode: ROWMODE,
        callback: (row)=> console.log(row)    
      }); 
    } 
    catch(error) 
    { console.error(error); }
  }
}