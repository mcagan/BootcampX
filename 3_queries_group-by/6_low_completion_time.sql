SELECT students.name AS student, 
AVG(assignment_submissions.duration) AS average_time, 
AVG(assignments.duration) AS estimated_time
FROM assignment_submissions
JOIN students ON students.id = student_id
JOIN assignments ON assignments.id = assignment_id
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING AVG(assignment_submissions.duration) < AVG(assignments.duration)
ORDER BY average_time;