const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'vagrant'
});

const queryText = 'SELECT students.id, students.name, cohorts.name as cohort_name FROM students JOIN cohorts ON students.cohort_id = cohorts.id WHERE cohorts.name LIKE $1 LIMIT $2;'
const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
const values = [`%${cohortName}%`, limit];


pool.query(queryText, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
});