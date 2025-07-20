SELECT
    id,
    username,
    email,
    password_hash,
    created_at,
    updated_at,
    version
FROM users
WHERE email = /* email */'' 