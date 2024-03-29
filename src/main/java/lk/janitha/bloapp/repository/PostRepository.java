package lk.janitha.bloapp.repository;

import lk.janitha.bloapp.domain.Post;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Post entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    @Query("select post from Post post where post.creator.login = ?#{principal.username}")
    List<Post> findByCreatorIsCurrentUser();
}
