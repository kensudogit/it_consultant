package jp.kensudo.service;

import jp.kensudo.dao.UserDao;
import jp.kensudo.entity.User;
import org.seasar.doma.jdbc.tx.TransactionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserDao userDao;
    private final TransactionManager transactionManager;

    @Autowired
    public UserService(UserDao userDao, TransactionManager transactionManager) {
        this.userDao = userDao;
        this.transactionManager = transactionManager;
    }

    public List<User> getAllUsers() {
        return transactionManager.required(() -> userDao.selectAll());
    }

    public Optional<User> getUserById(Long id) {
        return transactionManager.required(() -> userDao.selectById(id));
    }

    public Optional<User> getUserByUsername(String username) {
        return transactionManager.required(() -> userDao.selectByUsername(username));
    }

    public Optional<User> getUserByEmail(String email) {
        return transactionManager.required(() -> userDao.selectByEmail(email));
    }

    public User createUser(String username, String email, String passwordHash) {
        LocalDateTime now = LocalDateTime.now();
        User user = new User(null, username, email, passwordHash, now, now, 1);
        
        return transactionManager.required(() -> {
            userDao.insert(user);
            return user;
        });
    }

    public boolean updateUser(User user) {
        return transactionManager.required(() -> {
            int result = userDao.update(user);
            return result > 0;
        });
    }

    public boolean deleteUser(User user) {
        return transactionManager.required(() -> {
            int result = userDao.delete(user);
            return result > 0;
        });
    }
} 