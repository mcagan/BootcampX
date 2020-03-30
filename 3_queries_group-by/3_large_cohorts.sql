SELECT count(students.cohort_id) AS total_students, cohorts.name AS cohort_name
FROM students JOIN cohorts ON students.cohort_id = cohorts.id
GROUP BY cohorts.id
HAVING count(students.cohort_id) >= 18
ORDER BY cohorts.id;