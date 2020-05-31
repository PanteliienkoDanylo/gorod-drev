package cn.ua.goroddrev.controller;

import cn.ua.goroddrev.domain.Product;
import cn.ua.goroddrev.dto.TableApi;
import cn.ua.goroddrev.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public ResponseEntity<TableApi<Product>> getAllProducts(@RequestParam("id") String id,
                                                            @RequestParam("name") String name,
                                                            @RequestParam("masterId") Long masterId,
                                                            @RequestParam("sort") String sort,
                                                            @RequestParam("order") String order,
                                                            @RequestParam("pageIndex") Integer pageIndex,
                                                            @RequestParam("pageSize") Integer pageSize) {
        Page<Product> productsPage = productService.findAllByIdAndNameAndMasterId(id, name, masterId, sort, order, pageIndex, pageSize);
        return ResponseEntity.ok(new TableApi<>(productsPage.getContent(), productsPage.getTotalElements()));
    }

    @PostMapping("/product/save")
    public void saveProduct(@RequestBody() Product product) {
        productService.save(product);
    }
}
