import { createPool } from 'mysql2/promise';

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'mazda32007', // La que acabas de poner en el instalador
  port: 3306,
  database: 'creaciones_yuyita' 
});

console.log('Base de datos vinculada con éxito');