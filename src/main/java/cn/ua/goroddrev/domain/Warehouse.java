package cn.ua.goroddrev.domain;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "warehouses")
public class Warehouse {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @OneToMany(mappedBy = "warehouse")
    private Set<WarehouseProductsInfo> warehouseProductsInfos;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Set<WarehouseProductsInfo> getWarehouseProductsInfos() {
        return warehouseProductsInfos;
    }

    public void setWarehouseProductsInfos(Set<WarehouseProductsInfo> warehouseProductsInfos) {
        this.warehouseProductsInfos = warehouseProductsInfos;
    }
}
