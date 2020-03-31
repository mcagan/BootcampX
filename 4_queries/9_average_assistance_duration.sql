SELECT AVG(duration) as average_total_duration
FROM (SELECT cohorts.name as name, SUM(completed_at - started_at) as duration
FROM assistance_requests
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
GROUP BY cohorts.name) AS duration;