package cn.ua.goroddrev.controller;

import cn.ua.goroddrev.domain.Warehouse;
import cn.ua.goroddrev.service.WarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WarehouseController {

    private final WarehouseService warehouseService;

    @Autowired
    public WarehouseController(WarehouseService warehouseService) {
        this.warehouseService = warehouseService;
    }

    @GetMapping("/warehouses")
    public ResponseEntity<List<Warehouse>> getAllProducts() {
        return ResponseEntity.ok(warehouseService.findAllWarehouse());
    }

    @GetMapping("/warehouses/{id}")
    public ResponseEntity<Warehouse> getWarehouse(@PathVariable Long id) {
        return ResponseEntity.ok(warehouseService.findWarehouseById(id));
    }
}
