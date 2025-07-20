package jp.kensudo.dao;

import jp.kensudo.entity.User;
import org.seasar.doma.Dao;
import org.seasar.doma.Delete;
import org.seasar.doma.Insert;
import org.seasar.doma.Select;
import org.seasar.doma.Update;

import java.util.List;
import java.util.Optional;

@Dao
public interface UserDao {

    @Select
    List<User> selectAll();

    @Select
    Optional<User> selectById(Long id);

    @Select
    Optional<User> selectByUsername(String username);

    @Select
    Optional<User> selectByEmail(String email);

    @Insert
    int insert(User user);

    @Update
    int update(User user);

    @Delete
    int delete(User user);
} 