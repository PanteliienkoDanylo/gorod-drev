package cn.ua.goroddrev.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "sale_price")
    private BigDecimal salePrice;

    @Column(name = "master_price")
    private BigDecimal masterPrice;

    @ManyToOne
    @JoinColumn(name = "master_id", nullable = false)
    private Master master;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private Set<WarehouseProductsInfo> warehouseProductsInfos;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(BigDecimal salePrice) {
        this.salePrice = salePrice;
    }

    public BigDecimal getMasterPrice() {
        return masterPrice;
    }

    public void setMasterPrice(BigDecimal masterPrice) {
        this.masterPrice = masterPrice;
    }

    public Master getMaster() {
        return master;
    }

    public void setMaster(Master master) {
        this.master = master;
    }

    public Set<WarehouseProductsInfo> getWarehouseProductsInfos() {
        return warehouseProductsInfos;
    }

    public void setWarehouseProductsInfos(Set<WarehouseProductsInfo> warehouseProductsInfos) {
        this.warehouseProductsInfos = warehouseProductsInfos;
    }
}
