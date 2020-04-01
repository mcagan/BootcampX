const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'vagrant'
});

const queryText = 'SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort FROM teachers JOIN assistance_requests ON teacher_id = teachers.id JOIN students ON student_id = students.id JOIN cohorts ON cohort_id = cohorts.id WHERE cohorts.name LIKE $1 ORDER BY teacher;';
const queryParam = process.argv[2] || 'JUL02';
const values = [`%${queryParam}%`];

pool.query(queryText, values)
.then(res => {
  res.rows.forEach(resp => {
    console.log(`${resp.cohort}: ${resp.teacher}`);
  })
});