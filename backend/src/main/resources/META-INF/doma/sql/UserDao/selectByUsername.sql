SELECT
    id,
    username,
    email,
    password_hash,
    created_at,
    updated_at,
    version
FROM users
WHERE username = /* username */'' 