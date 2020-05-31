package cn.ua.goroddrev.service;

import cn.ua.goroddrev.domain.Warehouse;
import cn.ua.goroddrev.repository.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WarehouseService {

    private final WarehouseRepository warehouseRepository;

    @Autowired
    public WarehouseService(WarehouseRepository warehouseRepository) {
        this.warehouseRepository = warehouseRepository;
    }

    public List<Warehouse> findAllWarehouse() {
        return warehouseRepository.findAll();
    }

    public Warehouse findWarehouseById(Long id) {
        Optional<Warehouse> optional = warehouseRepository.findById(id);
        return optional.orElse(null);
    }
}
