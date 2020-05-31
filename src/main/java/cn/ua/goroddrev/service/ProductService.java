package cn.ua.goroddrev.service;

import cn.ua.goroddrev.domain.Product;
import cn.ua.goroddrev.repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Page<Product> findAllByIdAndNameAndMasterId(String id, String name, Long masterId, String sort, String order, Integer pageIndex, Integer pageSize) {
        Pageable pageable = "asc".equals(order) ?
                PageRequest.of(pageIndex, pageSize, Sort.by(sort).ascending()) :
                PageRequest.of(pageIndex, pageSize, Sort.by(sort).descending());

        return masterId == -1 ?
                productRepository.findAllByIdContainingAndNameContaining(id, name, pageable) :
                productRepository.findAllByIdContainingAndNameContainingAndMasterId(id, name, masterId, pageable);
    }

    public Product save(Product product) {
        return productRepository.save(product);
    }

}
