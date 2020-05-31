package cn.ua.goroddrev.repository;

import cn.ua.goroddrev.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, String> {

    Page<Product> findAllByIdContainingAndNameContaining(String id, String name, Pageable pageable);
    Page<Product> findAllByIdContainingAndNameContainingAndMasterId(String id, String name, Long masterId, Pageable pageable);

}
